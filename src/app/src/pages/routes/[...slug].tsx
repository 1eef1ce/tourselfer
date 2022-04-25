import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import {Breadcrumbs, Layout, Pagination, SeeMore} from '@components/common';
import Head from 'next/head';
import {Button} from '@components/ui';
import {Filter, FilterClass} from '@components/RoutesFilter';
import {RoutesContainer} from '@components/Routes';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { i18n } from "next-i18next";
import {Api} from "@lib/api"

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
        list: await BaseApi.getRoutesList(queryParams),
        ...(await serverSideTranslations(locale!, ["menu", "components", "pages__homepage"])),
      },
    };
}


export default function RoutesListPage(props) {

    const firstRender = useRef(true);
    const router = useRouter();
    const {locale, pathname, query, push} = useRouter();
    const { slug } = router.query;

    const FilterApi = new FilterClass({router});
    const BaseApi = new Api({locale});

    const [items, setItems] = useState(props.list.data);
    const [pagination, setPagination] = useState(props.list.meta);

    //const list = props.list.data;

    let currentPage = props?.list?.meta?.current_page ?? 1;

    const updateList = async (filter: object, page: any, lazyload?: boolean) => {

        const queryParams = {
            cityCode: query.slug[0],
            filter: filter,
            pagination: {
                limit: pageLimit,
                page: page ?? 1
            }
        };

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
                <title>Routes</title>
            </Head>

            <div className="routes">
                <div className="container">
                    <Breadcrumbs/>
                    <h1 className="title-1">Routes</h1>
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