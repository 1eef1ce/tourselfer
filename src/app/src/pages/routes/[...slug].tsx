import React, { useState, useEffect } from 'react';
import {Breadcrumbs, Layout, Pagination} from '@components/common';
import Head from 'next/head';
import {Button} from '@components/ui';
import Filter from '@components/filter';
import {RoutesContainer} from '@components/Routes';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { i18n } from "next-i18next";
import {Api} from "@lib/api"


export const getServerSideProps = async ({locale, params}) => {

    let api = new Api({locale});
    let queryParams = {
        cityCode: params.slug[0],
        filter: {},
        pagination: {
            limit: 12,
            page: params?.page ?? 1
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

    const [items, setItems] = useState(props.list.data);
    const [pagination, setPagination] = useState(props.list.meta);
    const [filter, setFilter] = useState({});

    const getItems = async () => {
        let api = new Api({locale});
        let queryParams = {
            cityCode: slug[0],
            filter: filter,
            pagination: {
                limit: 12,
                //page: params?.page ?? 1
            }
        };

        api.getRoutesList(queryParams)
            .then(response => {
                setItems(response?.data ?? []);
                setPagination(response?.meta ?? {});
            });

        //console.log(queryParams);
    };

    useEffect(() => {
        getItems()
    }, [filter]);

    //console.log(filter);
    return (
        <Layout>
            <Head>
                <title>Routes</title>
            </Head>

            <div className="routes">
                <div className="container">
                    <Breadcrumbs/>
                    <h1 className="title-1">Routes</h1>
                    <Filter data={filter} updateData={setFilter} />
                    <RoutesContainer items={items} classMod="afterSort"/>
                    <div className="more">
                        <Button
                            variant='outlined'
                            size='medium'
                        >
                            See more
                        </Button>
                    </div>
                    <Pagination data={pagination} pathname={pathname} basepath={'/routes/' + slug[0]}/>
                </div>
            </div>
        </Layout>
    );
}