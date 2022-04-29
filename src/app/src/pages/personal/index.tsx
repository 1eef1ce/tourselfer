import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import {InlineAuth} from '@components/InlineAuth';
import {Breadcrumbs, Layout, RouteCard, PersonalForm} from '@components/common';
import Head from 'next/head';
import {Button} from '@components/ui';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { i18n } from "next-i18next";
import {Api} from "@lib/api"
import Image from 'next/image';
import {Trash} from '@components/icons';
import PersonalMenu from '@components/common/Menu/PersonalMenu';
import { useAuth } from '@hooks/auth';
import 'react-loading-skeleton/dist/skeleton.css';

export async function getServerSideProps ({locale, params, query}) {

    const BaseApi = new Api({locale});
    
    if (process.env.NODE_ENV === "development")
    {
        await i18n?.reloadResources();
    }

    return {
      props: {
        ...(await serverSideTranslations(locale!, ["menu", "components", "pages__personal"])),
      },
    };
}

export default function PersonalIndexPage(props) {
    const { t } = useTranslation("pages__personal");
    const { user, isLoadingUserData, isAuthorize } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/personal',
    });
    const breadcrumbs = [
        {
            label: t('index.breadcrumb_1'),
            url: "/personal/"
        },
        {
            label: t('index.breadcrumb_2'),
            url: "/personal/"
        }
    ];
    
    if (!isAuthorize)
        return (<InlineAuth hasContainer={true} breadcrumbs={breadcrumbs} reloadAfterSignin={true} redirectAfterSignin={'/personal/'} />);

    return (
        <Layout>
            <Head>
                <title>{t('index.title_h1')}</title>
                <meta content={''} name="description"/>
            </Head>

            <div className="container">
                <Breadcrumbs items={breadcrumbs}/>
                <div className="personal">
                    <div className="column left">
                        <h1 className="title-1">{t('account.title')}</h1>

                        <PersonalMenu/>
                        
                    </div>
                    <div className="column right">
                    
                        <div className="tab-content active">
                            <h2>{t('index.title_h1')}</h2>

                            <RouteCard params={false} title={'Tokyo kaleidoscope'} label={true}>
                                <Image src="/images/route-personal1.png" alt="" title="" layout="fill"/>
                            </RouteCard>
                            <RouteCard params={false} title={'Route Name'} label={true}>
                                <Image src="/images/route-personal2.png" alt="" title="" layout="fill"/>
                            </RouteCard>
                            <RouteCard params={false} title={'Route Name'} label={true}>
                                <Image src="/images/route-personal3.png" alt="" title="" layout="fill"/>
                            </RouteCard>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </Layout>
    );
}