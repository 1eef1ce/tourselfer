import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import {Breadcrumbs, Layout, Pagination, SeeMore} from '@components/common';
import Head from 'next/head';
import {Button} from '@components/ui';
import {Filter, FilterClass} from '@components/RoutesFilter';
import {RoutesSort} from '@components/RoutesSort';
import {RoutesContainer} from '@components/Routes';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { i18n } from "next-i18next";
import {Api} from "@lib/api"
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const pageLimit = 12;
const getQueryParams = (router) => {
   
    const FilterApi = new FilterClass({router});
    const {locale, query} = router;
    const queryParams = {
        cityCode: query.slug[0],
        filter: FilterApi.getFromURL(),
        pagination: {
            limit: pageLimit,
            page: query?.page ?? 1
        },
        sort: {
            by: query?.sort_by ?? undefined,
            order: query?.sort_order ?? undefined,
        }
    };

    return queryParams;
};

export async function getServerSideProps ({locale, params, query}) {

    const BaseApi = new Api({locale});
    const queryParams = getQueryParams({locale, query});
    
    if (process.env.NODE_ENV === "development")
    {
        await i18n?.reloadResources();
    }

    return {
      props: {
        page: await BaseApi.getPageData('routes-list', {
            cityCode: query.slug[0],
        }),
        list: await BaseApi.getRoutesList(queryParams),
        ...(await serverSideTranslations(locale!, ["menu", "components", "pages__homepage"])),
      },
    };
}

interface ListSorts {
    by: string,
    order: string,
    label?: any
}

export default function RoutesListPage(props) {

    const router = useRouter();
    const {locale, pathname, query, push} = useRouter();
    const { slug } = router.query;

    const FilterApi = new FilterClass({router});
    const BaseApi = new Api({locale});

    const [items, setItems] = useState(props.list.data);
    const [pagination, setPagination] = useState(props.list.meta);


    const updateList = async (filter: object, page: any, lazyload?: boolean, sort?: any) => {

        let queryParams = {
            cityCode: query.slug[0],
            filter: filter,
            pagination: {
                limit: pageLimit,
                page: page ?? 1
            },
        };

        if (typeof sort !== 'undefined') {
            queryParams['sort'] = {
                by: sort.by,
                order: sort.order
            };
        }

        BaseApi.getRoutesList(queryParams)
            .then(response => {
                if (typeof lazyload !== 'undefined' && lazyload == true) {
                    setItems(items.concat(response?.data ?? []));
                } else {
                    setItems(response?.data ?? []);
                }
                setPagination(response?.meta ?? {});
            });
    }


    return (
        <Layout>
            <Head>
                <title>{props?.page?.meta?.title}</title>
                <meta content={props?.page?.meta?.description} name="description"/>
            </Head>

            <div className="routes">
                <div className="container">
                    {props?.page?.breadcrumbs && props?.page?.breadcrumbs.length > 0 && 
                    <Breadcrumbs
                        items={props?.page?.breadcrumbs}
                    />
                    ||
                    <Skeleton containerClassName="skeleton-text"/>
                    }
                    <h1 className="title-1">{props?.page?.title_h1 || <Skeleton containerClassName="skeleton-text"/>}</h1>
                    <Filter
                        locale={locale}
                        onChanged={(data) => {
                            const urlParams = FilterApi.getURLFromData(data);
                            
                            router.push({
                                pathname: router.pathname,
                                query: Object.assign({
                                    slug: [slug[0].toString(), urlParams.query.toString()]
                                }, urlParams.params),
                            }, undefined, { shallow: true })
                            .then(() => {
                                const page = query?.page ?? 1;
                                updateList(data, page);
                            });
                        }}
                    />
                    <RoutesSort
                        onChange={(sort) => {

                            if (!!sort.by && !!sort.order) {
                                const urlParams = FilterApi.getURLFromData(FilterApi.getFromURL());

                                router.push({
                                    pathname: router.pathname,
                                    query: {
                                        ...query,
                                        sort_by: sort.by,
                                        sort_order: sort.order
                                    }
                                }, undefined, { shallow: true })
                                .then(() => {
                                    const page = query?.page ?? 1;
                                    updateList(FilterApi.getFromURL(), page, false, sort);
                                });


                            }
                        }}
                    />
                    <RoutesContainer items={items} classMod="afterSort"/>
                    <SeeMore
                        data={pagination}
                        pathname={pathname}
                        onClick={(page) => {
                            const urlParams = FilterApi.getURLFromData(FilterApi.getFromURL());

                            router.push({
                                pathname: router.pathname,
                                query: Object.assign({
                                    slug: [slug[0].toString(), urlParams.query.toString()],
                                    page: page,
                                    lazy: true
                                }, urlParams.params),
                            }, undefined, { shallow: true })
                            .then(() => {
                                updateList(FilterApi.getFromURL(), page, true);
                            });
                            
                        }} />

                    <Pagination
                        data={pagination}
                        onClick={(page) => {
                            const urlParams = FilterApi.getURLFromData(FilterApi.getFromURL());

                            router.push({
                                pathname: router.pathname,
                                query: Object.assign({
                                    slug: [slug[0].toString(), urlParams.query.toString()],
                                    page: page,
                                }, urlParams.params),
                            }, undefined, { shallow: true })
                            .then(() => {
                                updateList(FilterApi.getFromURL(), page);
                            });

                        }}
                    />
                </div>
            </div>
        </Layout>
    );
}