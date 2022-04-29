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

export default function PersonalMyPage(props) {
    const { t } = useTranslation("pages__personal");
    const { user, isLoadingUserData, isAuthorize } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/personal',
    });
    const breadcrumbs = [
        {
            label: t('payments.breadcrumb_1'),
            url: "/personal/"
        },
        {
            label: t('payments.breadcrumb_2'),
            url: "/personal/my/"
        }
    ];
    
    if (!isAuthorize)
        return (<InlineAuth hasContainer={true} breadcrumbs={breadcrumbs} reloadAfterSignin={true} redirectAfterSignin={'/personal/'} />);

    return (
        <Layout>
            <Head>
                <title>{t('payments.title_h1')}</title>
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

                        <h2>{t('payments.title_h1')}</h2>

                        <div className="payment-group">
                                <span className="title">Selected payment methods</span>
                                <span className="desc">Payment methods you have already set up</span>
                                <div className="payment-items">
                                    <div className="item cards">
                                        <span className="payment-system">Bank cards</span>
                                        <div className="logo"></div>
                                    </div>
                                    <div className="item yandex active">
                                        <span className="payment-system">Yandex money</span>
                                        <div className="logo"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="payment-group">
                                <span className="title">Add new payment methods</span>
                                <span className="desc">Choose a payment system from the list</span>
                                <div className="payment-items">
                                    <div className="item sber checked">
                                        <span className="payment-system">Sberbank</span>
                                        <div className="logo"></div>
                                    </div>
                                    <div className="item cards">
                                        <span className="payment-system">Bank cards</span>
                                        <div className="logo"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="payment-group">
                                <span className="title">Specify payment methods if you are an author</span>
                                <span className="desc">Choose a payment system from the list</span>
                                <div className="payment-items">
                                    <div className="item cards">
                                        <span className="payment-system">Bank cards</span>
                                        <div className="logo"></div>
                                    </div>
                                    <div className="item sber checked">
                                        <span className="payment-system">Sberbank</span>
                                        <div className="logo"></div>
                                    </div>                                   
                                    <div className="item yandex">
                                        <span className="payment-system">Yandex money</span>
                                        <div className="logo"></div>
                                    </div>
                                    <div className="item cards">
                                        <span className="payment-system">Bank cards</span>
                                        <div className="logo"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="button-row">
                                <Button
                                    variant="filled"
                                    size="large"
                                    colored={true}
                                    type="submit"
                                >
                                    Go to the payment
                                </Button>
                            </div>
                        
                    </div>
                </div>
            </div>
        </Layout>
    );
}