import React, { useEffect, useState } from 'react';
import { Auth } from '@components/Auth';
import {Breadcrumbs, Layout} from '@components/common';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';

interface Props {
    title?: string,
    hasContainer?: boolean,
    breadcrumbs?: array<Objects>,
    redirectAfterSignin?: string,
    reloadAfterSignin?: boolean
}

const InlineAuth = (props: Props) => {
    const { t } = useTranslation("components");

    if (props?.hasContainer)
        return (
            <Layout>
                <Head>
                    <title>{props?.title ? props?.title : t('auth.signin.title')}</title>
                    <meta content={''} name="description"/>
                </Head>
                <div className="container">
                    {props?.breadcrumbs &&
                    <Breadcrumbs items={props?.breadcrumbs}/>
                    }

                    <Auth reloadAfterSignin={props?.reloadAfterSignin} redirectAfterSignin={props?.redirectAfterSignin}/>
                </div>
            </Layout>
        );
        

    return (
        <>
            <Auth/>
        </>
    );



};

export default InlineAuth;