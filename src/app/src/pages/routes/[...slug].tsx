import React, { useState } from 'react';
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


export const getServerSideProps = async ({locale}) => {

    //const {getRoutesList} = api();
    let api = new Api({locale});

    if (process.env.NODE_ENV === "development")
    {
        await i18n?.reloadResources();
    }

    return {
      props: {
        //...(await loadHomepage(locale)),
        list: await api.getRoutesList({
            filter: {},
            pagination: {
                limit: 12,
                page: 1
            }
        }),
        ...(await serverSideTranslations(locale!, ["menu", "components", "pages__homepage"])),
      },
    };
};

export default function RoutesListPage(props) {

    const router = useRouter();
    const {locale} = useRouter();
    const { slug } = router.query;

    const [items, setItems] = useState(props.list.data);

    const getItems = async () => {
        let api = new Api({locale});
    }

//console.log(props);
    return (
        <Layout>
            <Head>
                <title>Routes</title>
            </Head>

            <div className="routes">
                <div className="container">
                    <Breadcrumbs/>
                    <h1 className="title-1">Routes</h1>
                    <Filter/>
                    <RoutesContainer items={items} classMod="afterSort"/>
                    <div className="more">
                        <Button
                            variant='outlined'
                            size='medium'
                        >
                            See more
                        </Button>
                    </div>
                    <Pagination/>
                </div>
            </div>
        </Layout>
    );
}