import React, { useState, useEffect } from 'react';
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

const getQueryParams = (router) => {
   
    const FilterApi = new FilterClass({router});
    const {locale, query} = router;
    const queryParams = {
        cityCode: query.slug[0],
        filter: {},
        pagination: {
            limit: 12,
            page: query?.page ?? 1
        }
    };

    console.log(FilterApi.getFromURL());

    return queryParams;
};

const parseFilterQuery = (route) => {

    const {locale, query} = route;
    const filter = {};

    const findParam = function (value) {

        if (value === 'superplace')
            return {
                superPlace: true
            };

        if (['free', 'cost1', 'cost2', 'cost3', 'cost4'].indexOf(value) !== -1) {
            if (value === 'free') 
                return {
                    cost: 0
                };
            else
                return {
                    cost: parseInt(value.replace('cost', ''))
                };
        }

        return {};
    }

    if (typeof query.slug[1] === 'string') {
        let queryParams = query.slug[1].toString();
        if (queryParams.indexOf('-') !== -1) {
            queryParams.split('-').map(queryPart => {
                Object.assign(filter, findParam(queryPart));
            });
        } else {
            Object.assign(filter, findParam(queryParams));
        }
    }

    //console.log(filter);

    return filter;
};

export async function getServerSideProps ({locale, params, query}) {

    const api = new Api({locale});
    const queryParams = getQueryParams({locale, query});
    
    if (process.env.NODE_ENV === "development")
    {
        await i18n?.reloadResources();
    }

    return {
      props: {
        list: await api.getRoutesList(queryParams),
        ...(await serverSideTranslations(locale!, ["menu", "components", "pages__homepage"])),
      },
    };
};

export default function RoutesListPage(props) {

    const router = useRouter();
    const {locale, pathname, query, push} = useRouter();
    const { slug } = router.query;

    const FilterApi = new FilterClass({router});

    const [items, setItems] = useState(props.list.data);
    const [pagination, setPagination] = useState(props.list.meta);
    const [filter, setFilter] = useState(FilterApi.getFromURL());

    //const list = props.list.data;

    let currentPage = props?.list?.meta?.current_page ?? 1;

    const getItems = async (lazyLoad = false) => {

        const api = new Api({locale});
        const queryParams = getQueryParams({locale, query});

        api.getRoutesList(queryParams)
            .then(response => {
                if (!lazyLoad) {
                    setItems(response?.data ?? []);
                } else {
                    setItems(items.concat(response?.data ?? []));
                }
                setPagination(response?.meta ?? {});
            });
    };

    useEffect(() => {
        console.log(filter);
        const urlParams = FilterApi.getURLFromData(filter);

        router.push({
            pathname: router.pathname,
            query: Object.assign({
                slug: [slug[0].toString(), urlParams.query.toString()]
            }, urlParams.params),
        }, undefined, { shallow: true });
        //getItems();
    }, [filter]);

    useEffect(() => {
        setItems(props.list.data);
    }, [props.list.data]);

    useEffect(() => {
        setPagination(props.list.meta);
    }, [props.list.meta]);

    useEffect(() => {
        
        if (!!router.query?.page && router.query?.page != pagination?.current_page) {
            getItems(!!router.query?.lazy);
        }
    }, [router.query?.page]);


    return (
        <Layout>
            <Head>
                <title>Routes</title>
            </Head>

            <div className="routes">
                <div className="container">
                    <Breadcrumbs/>
                    <h1 className="title-1">Routes</h1>
                    <Filter data={filter} updateData={setFilter} locale={locale}/>
                    <RoutesContainer items={items} classMod="afterSort"/>
                    <SeeMore
                        data={pagination}
                        pathname={pathname}
                        onClick={(page) => {
                            router.push({
                                pathname: pathname,
                                query: {
                                    slug: slug,
                                    page: page,
                                    lazy: true
                                }
                            }, undefined, { shallow: true })
                        }} />
                    <Pagination
                        data={pagination}
                        pathname={pathname}
                        basepath={`/routes/${encodeURIComponent(slug[0])}`}
                    />
                </div>
            </div>
        </Layout>
    );
}