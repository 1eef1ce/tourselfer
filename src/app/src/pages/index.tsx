import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {Button} from '@components/ui';
import {AdvantageSlider, AppSlider, Layout, Searchbar} from '@components/common';
import {Review, ReviewSlider} from '@components/Reviews';
import {Appstore, ArrowRight, Googleplay} from '@components/icons';
import {ShowcasePicture, ShowcaseItems} from '@components/Showcase';
import {LocationsContainer} from '@components/Locations';
import {useRouter} from 'next/router';
import {useState, useEffect} from 'react';

import { i18n } from "next-i18next";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import {loadHomepage} from '../lib/api/fetch-homepage';

export const getServerSideProps = async ({locale}) => {

/*    if (process.env.NODE_ENV === "development")
    {*/
        await i18n?.reloadResources();
    // }

    const data = await loadHomepage(locale);
    
    return {
      props: {
        data,
        ...(await serverSideTranslations(locale!, ["menu", "components", "pages__homepage"])),
      },
    };
};


export default function Homepage ({data}) {

    const { t } = useTranslation();

    return (
        <Layout>
            <Head>
                <title>Tourselfer</title>
                <meta name="description" content="Ready routes for your phone"/>
            </Head>
            <div className="showcase showcase--main">
                <ShowcasePicture/>
                <div className="container showcase__container">
                    <h1 className="showcase__heading">{t('h1')}</h1>
                    <div className="search showcase__search">
                        <div className="search__title">{t('hero.search_title')}</div>
                        <Searchbar/>
                        <div className="search__text">
                            Popular now: <span>Bangkok, Paris, London, Dubai, New-York</span>
                        </div>
                    </div>
                    <div className="showcase__bottom container">
                        <ShowcaseItems/>
                    </div>
                </div>
            </div>{/*showcase*/}

            <div className="section locations">
                <div className="container">
                    <div className="section__head">
                        <h2 className="title-2">{t('section_locations.title')}</h2>
                        <Link href="#">
                            <a className="link link--arrow link--gray">
                                <span>{t('section_locations.more_link')}</span>
                                <span className="icon">
                                    <ArrowRight/>
                                </span>
                            </a>
                        </Link>
                    </div>
                    <LocationsContainer/>
                    <div className="locations__more">
                        <Button
                            variant="outlined"
                            size="medium"
                        >
                            {t('section_locations.get_more')}
                        </Button>
                    </div>
                </div>
            </div>{/*locations*/}

            <div className="section advantages">
                <div className="container">
                    <div className="section__head">
                        <h2 className="title-2">{t('section_advantages.title')}</h2>
                        <Link href="/about">
                            <a className="link link--arrow link--gray">
                                <span>{t('section_advantages.about_link')}</span>
                                <span className="icon">
                                    <ArrowRight />
                                </span>
                            </a>
                        </Link>
                    </div>
                    <AdvantageSlider/>
                </div>
            </div>{/*advantages*/}

            <div className="section reviews">
                <div className="container">
                    <div className="section__head">
                        <h2 className="title-2">{t('section_reviews.title')}</h2>
                        <Link href="#">
                            <a className="link link--arrow link--gray">
                                <span>{t('section_reviews.more_link')}</span>
                                <span className="icon">
                                    <ArrowRight />
                                </span>
                            </a>
                        </Link>
                    </div>
                    <Review/>
                    <ReviewSlider/>
                </div>
            </div>{/*reviews*/}

            <div className="section app">
                <div className="container">
                    <div className="section__head section__head--center">
                        <h2 className="title-2">{t('section_app.title')}</h2>
                        <div className="section__text">
                            {t('section_app.description')}
                        </div>
                    </div>
                    <AppSlider/>
                </div>
            </div>{/*app*/}

            <div className="section download">
                <div className="container">
                    <div className="section__head section__head--center">
                        <h2 className="title-2">{t('section_download_app.title')}</h2>
                    </div>
                    <div className="download__items">
                        <a className="download__item icon" href="javascript:void(0)">
                            <Googleplay />
                        </a>
                        <a className="download__item icon" href="javascript:void(0)">
                            <Appstore />
                        </a>
                    </div>
                </div>
            </div>{/*download*/}
        </Layout>
    );
}