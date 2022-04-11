import React, { useState, useEffect } from 'react';
import {Breadcrumbs, Layout, Pagination, SeeMore} from '@components/common';
import Head from 'next/head';
import {Button} from '@components/ui';
import Filter from '@components/filter';
import {RoutesContainer} from '@components/Routes';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { i18n } from "next-i18next";
import {Api} from "@lib/api"


export const getServerSideProps = async ({locale, params, query}) => {
//console.log(query);
    let api = new Api({locale});
    let queryParams = {
        cityCode: params.slug[0],
        filter: {},
        pagination: {
            limit: 12,
            page: query?.page ?? 1
        }
    };

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
    const {locale, pathname} = useRouter();
    const { slug } = router.query;

    console.log(props.list);

    const [items, setItems] = useState(props.list.data);
    const [pagination, setPagination] = useState(props.list.meta);
    const [filter, setFilter] = useState({});

    let currentPage = props?.list?.meta?.current_page ?? 1;

    const getItems = async (updateList = true) => {
        let api = new Api({locale});
        let queryParams = {
            cityCode: slug[0],
            filter: filter,
            pagination: {
                limit: 12,
                page: currentPage
            }
        };

        api.getRoutesList(queryParams)
            .then(response => {
                if (updateList) {
                    setItems(response?.data ?? []);
                } else {
                    setItems(items.concat(response?.data ?? []));
                }
                setPagination(response?.meta ?? {});
            });
    };

    useEffect(() => {
        getItems();
    }, [filter]);


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
                    <SeeMore data={pagination} pathname={pathname} basepath={'/routes/' + slug[0]} onClick={(page) => {
                        currentPage = page;
                        getItems(false);
                    }} />
                    <Pagination data={pagination} pathname={pathname} basepath={'/routes/' + slug[0]}/>
                </div>
            </div>
        </Layout>
    );
}