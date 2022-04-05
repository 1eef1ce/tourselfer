import Head from 'next/head';
import Link from 'next/link';
import {Button} from '@components/ui';
import {AdvantageSlider, AppSlider, Layout, Searchbar} from '@components/common';
import {HeroPopularCities} from '@components/common/HeroPopularCities';
import {Review, ReviewSlider} from '@components/Reviews';
import {Appstore, ArrowRight, Googleplay} from '@components/icons';
import {ShowcasePicture, ShowcaseItems} from '@components/Showcase';
import {LocationsContainer} from '@components/Locations';
import { i18n } from "next-i18next";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {loadHomepage} from '@lib/api/fetch-homepage';

export const getServerSideProps = async ({locale}) => {

    if (process.env.NODE_ENV === "development")
    {
        await i18n?.reloadResources();
    }

    return {
      props: {
        ...(await loadHomepage(locale)),
        ...(await serverSideTranslations(locale!, ["menu", "components", "pages__homepage"])),
      },
    };
};


export default function Homepage (props) {

    const { t } = useTranslation("pages__homepage");

    return (
        <Layout mainPage={true}>
            <Head>
                <title>Tourselfer</title>
                <meta name="description" content="Ready routes for your phone"/>
            </Head>
            <div className="showcase showcase--main">
                <ShowcasePicture/>
                <div className="container showcase__container">
                    <h1 className="showcase__heading">{t('hero.title')}</h1>
                    <div className="search showcase__search">
                        <div className="search__title">{t('hero.search_title')}</div>
                        <Searchbar/>
                        {(typeof props.data === 'object') && Array.isArray(props.data.popular_now) &&
                        <HeroPopularCities items={props.data.popular_now} />
                        }
                    </div>
                    {(typeof props.data === 'object') && Array.isArray(props.data.favorite_cities) &&
                    <div className="showcase__bottom container">
                        <ShowcaseItems items={props.data.favorite_cities}/>
                    </div>
                    }
                </div>
            </div>{/*showcase*/}

            {(typeof props.data === 'object') && Array.isArray(props.data.bestsellers_cities) && props.data.bestsellers_cities.length > 0 &&
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
                    <LocationsContainer items={props.data.bestsellers_cities}/>
                    <div className="locations__more">
                        <Button
                            variant="outlined"
                            size="medium"
                        >
                            {t('section_locations.get_more')}
                        </Button>
                    </div>
                </div>
            </div>
            }

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

            {(typeof props.data === 'object') && Array.isArray(props.data.route_reviews) && props.data.route_reviews.length > 0 &&
            <div className="section reviews">
                <div className="container">
                    <div className="section__head">
                        <h2 className="title-2">{t('section_reviews.title')}</h2>
                        <Link href={"routes"}>
                            <a className="link link--arrow link--gray">
                                <span>{t('section_reviews.more_link')}</span>
                                <span className="icon">
                                    <ArrowRight />
                                </span>
                            </a>
                        </Link>
                    </div>
                    <Review item={props.data.route_reviews[0]}/>
                    <ReviewSlider route={props.data.route_reviews[0]} items={props.data.route_reviews[0].reviews}/>
                </div>
            </div>
            }

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