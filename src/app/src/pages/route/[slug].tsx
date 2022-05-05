import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import {Breadcrumbs, Layout, RouteGallerySlider} from '@components/common';
import Link from 'next/link'
import Head from 'next/head';
import Image from 'next/image';
import {Avatar, UserName} from '@components/common';
import {Button, Rating} from '@components/ui';
import {CheckRounded, Lock, Man, Bus, Car, MapPin} from '@components/icons';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { i18n } from "next-i18next";
import {Api} from "@lib/api"
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export async function getServerSideProps ({locale, params, query, res}) {

    const BaseApi = new Api({locale});
    
    if (process.env.NODE_ENV === "development")
    {
        await i18n?.reloadResources();
    }

    const route = await BaseApi.getRouteItem({
        code: query?.slug,
        withReviews: true
    });

    if (typeof route !== 'object' || (typeof route === 'object' && !!route.errorCode))
        return {
            notFound: true
        };
        
    return {
      props: {
        page: await BaseApi.getPageData('routes-item', {
            routeCode: query?.slug,
        }),
        ...route,
        ...(await serverSideTranslations(locale!, ["menu", "components", "pages__route"])),
      },
      
    };
}

const UserComponent = ({userType, user}) => {
    const { t } = useTranslation(["pages__route"]);

    return (
        <div className={`user user--${userType}`}>
            <div className="user__img">
                {user?.prof_author == true &&
                <div className="icon user__icon">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12L3 7L6 8L8 3L10 8L13 7L11 12H5Z" fill="white"/>
                    </svg>
                </div>
                }
                {user?.avatar &&
                    <Image src={user.avatar} alt={user.name + " " + user.last_name} title={user.name + " " + user.last_name} layout="fill"/>
                }
            </div>
            <div className="user__content">
                <div className="user__name">{user.name + " " + user.last_name}</div>
                <div className="user__status">{user?.prof_author == true ? t('author.type_prof') : t('author.type_simple')}</div>
                
            </div>
        </div>
    );
};

export default function RoutePage(props) {

    const router = useRouter();
    const {locale, pathname, query, push} = useRouter();
    const { slug } = router.query;
    const BaseApi = new Api({locale});

    const { t } = useTranslation("pages__route");

    const mainProps = [];

    const needUpdateReviews = useRef(false);
    const [reviews, setReviews] = useState(null);
    const [reviewsFilter, setReviewsFilter] = useState({});



    if (props?.data?.duration?.start)
    {
        if (parseFloat(props?.data?.duration?.start) > 0 && parseFloat(props?.data?.duration?.end) > 0)
        {
            const start = Math.round(props?.data?.duration?.start / 60),
                  end = Math.round(props?.data?.duration?.end / 60);

            if (start != end)
            {
                mainProps.push({
                    'label': t('route.props.duration'),
                    'value': t('route.props.duration_value_range', {
                        'start': start,
                        'end': end,
                    }) 
                });
            }
            else
            {
                mainProps.push({
                    'label': t('route.props.duration'),
                    'value': t('route.props.duration_value', {
                        'value': start,
                    }) 
                });
            }
        }
        else if (parseFloat(props?.data?.duration?.start) > 0)
        {
            mainProps.push({
                'label': t('route.props.duration'),
                'value': t('route.props.duration_value', {
                    'value': Math.round(props?.data?.duration?.start / 60),
                }) 
            });
        }
        
    }

    if (props?.data?.cost)
    {

        mainProps.push({
            'label': t('route.props.costs'),
            'value': t("route.props.costs_" + parseInt(props?.data?.cost))
        });
    }

    if (typeof props?.data?.type !== 'undefined' && Array.isArray(props?.data?.type))
    {
        const items = [];
        if (props?.data?.type.indexOf('foot') !== -1) {
            items.push(<Man />);
        }
        
        if (props?.data?.type.indexOf('car') !== -1) {
            items.push(<Car />);
        }
        
        if (props?.data?.type.indexOf('bus') !== -1) {
            items.push(<Bus />);
        }
        
        if (items.length > 0) {
            mainProps.push({
                'label': t('route.props.type'),
                'value': items
            });
        }
    }

    useEffect(() => {
        if (props?.data?.reviews && props?.data?.reviews.length > 0) {
            setReviews({});
            BaseApi.getRouteReviews({
                routeId: props?.data?.id,
                pagination: {
                    limit: 3,
                    page: 1
                }
            })
            .then((response) => {
                setReviews(response);
            });
        }
    }, []);

    useEffect(() => {
        if (needUpdateReviews.current == true) {
            console.log("useEffect", reviewsFilter);

            BaseApi.getRouteReviews({
                routeId: props?.data?.id,
                filter: reviewsFilter,
                pagination: {
                    limit: 3,
                    page: 1
                }
            })
            .then((response) => {
                setReviews(response);
            });

            needUpdateReviews.current = false;
        }
    }, [reviewsFilter]);

    const setReviewsFilterValue = (key, value) => {
        let valueArray = [];

        if (typeof reviewsFilter == 'object' && typeof reviewsFilter[key] !== undefined)
            valueArray = reviewsFilter[key] ?? [];

        let index = valueArray.indexOf(value);

        if (index !== -1) {
            valueArray.splice(index, 1);
        } else {
            valueArray.push(value);
        }

        needUpdateReviews.current = true;
        setReviewsFilter(prevState => ({
            ...prevState,
            [key]: valueArray
        }));
    }


    return (
        <Layout>
            <Head>
                <title>{props?.page?.meta?.title}</title>
                <meta content={props?.page?.meta?.description} name="description"/>
            </Head>

            <div className="route">
                <div className="showcase showcase--route">
                    <div className="showcase__picture">
                        <div className="showcase__img">
                            <Image src={props?.data?.detail_picture} alt={props?.data?.title} title={props?.data?.title} layout="fill"/>
                        </div>
                    </div>
                    <div className="container showcase__container">
                        <Breadcrumbs rootClass="breadcrumbs breadcrumbs--white"/>
                        <div className="route-cover">
                            <div className="route-cover__bg">
                                <Image src={props?.data?.detail_picture} alt={props?.data?.title} title={props?.data?.title} layout="fill"/>
                            </div>
                            <div className="route-cover__content">
                                {props?.data?.rating > 0 &&
                                <div className="route-cover__rating">
                                    <div className="rating-number">{props?.data?.rating}</div>
                                </div>
                                }
                                <div>
                                    <h1 className="route-cover__heading">{props?.data?.title}</h1>
                                    <div className="route-cover__text">
                                    {props?.data?.preview_description}
                                    </div>
                                </div>
                            </div>
                            {(props?.data?.super_place === true || props?.data?.verified === true) &&
                            <div className="route-cover__labels route-labels">
                                <div className="route-labels__items">
                                    {props?.data?.super_place === true &&
                                    <div className="route-labels__item">
                                        <div className="icon route-labels__icon">
                                            <MapPin/>
                                        </div>
                                        <div>{t('tags.super_place')}</div>
                                    </div>
                                    }

                                    {props?.data?.verified === true &&
                                    <div className="route-labels__item">
                                        <div className="icon route-labels__icon">
                                            <CheckRounded/>
                                        </div>
                                        <div>{t('tags.route_verified')}</div>
                                    </div>
                                    }
                                </div>
                            </div>
                            }
                        </div>{/*route-cover*/}
                    </div>
                </div>
                <div className="container">
                    <div className="route-about">
                        <div className="route-about__user">
                            <UserComponent userType='large' user={props?.data?.author}/>
                        </div>
                        {mainProps && mainProps.length > 0 &&
                        <div className="route-about__params">
                            {mainProps.map(item => (
                                <div className="route-about__param">
                                    <div className="route-about__name">{item.label}</div>
                                    <div className="route-about__value">{item.value}</div>
                                </div>
                            ))}
                            
                        </div>
                        }
                        <div className="route-about__buy">
                            <div className="route-buy">
                                <div className="route-buy__cost">
                                    {props?.data?.price?.current > 0 &&
                                        <div className="route-buy__current" dangerouslySetInnerHTML={{__html: props?.data?.price?.current_print}}></div>
                                    ||
                                        <div className="route-buy__current">{t('route.price_free')}</div>
                                    }
                                    {/*<div className="route-buy__old">$120</div>*/}
                                </div>

                                {props?.data?.price?.current > 0 &&
                                <Link href={`/buy/${props?.data?.code}`}>
                                    <a className="btn btn--large btn--filled">{t('route.buy_button')}</a>
                                </Link>
                                ||
                                <Link href={`/personal/get-route?code=${props?.data?.code}`}>
                                    <a className="btn btn--large btn--filled">{t('route.get_button')}</a>
                                </Link>
                                }
                            </div>
                            
                            <Link href={'#'}>
                                <a className="link link--color route-buy__link">{t('route.walk_with_guide')}</a>
                            </Link>
                        </div>
                    </div>{/*route-about*/}

                    <div className="route-locations">
                        {props?.data?.locations && props?.data?.locations.length > 0 &&
                        <div className="route-locations__items">
                            {props?.data?.locations.map((item, index) => {
                                
                                let isBlocked = (props?.data?.locations_count > 3 && index + 1 == props.data.locations.length);
                                let duration = null;

                                if (parseFloat(item?.duration?.start) > 0 && parseFloat(item?.duration?.end) > 0)
                                {
                                    const start = Math.round(item?.duration?.start / 60),
                                        end = Math.round(item?.duration?.end / 60);

                                    if (start != end)
                                    {
                                        duration = t('route.props.duration_value_range', {
                                            'start': start,
                                            'end': end,
                                        });
                                    }
                                    else
                                    {
                                        duration = t('route.props.duration_value', {
                                            'value': start,
                                        });
                                    }
                                }
                                else if (parseFloat(props?.data?.duration?.start) > 0)
                                {
                                    duration = t('route.props.duration_value', {
                                        'value': Math.round(props?.data?.duration?.start / 60)
                                    });
                                }
                                return (
                                        <div className={"route-locations__item" + (isBlocked ? " route-locations__item--locked" : "")}>
                                            <div className="route-locations__img">
                                                <Image src={item?.picture} alt={item?.title} title={item?.title} layout="fill"/>
                                                {isBlocked &&
                                                    <div className="route-locations__more">
                                                        <div className="route-locations__icon">
                                                            <Lock locked={true}/>
                                                        </div>
                                                        <div>{t('route.locations.unlock_more', {
                                                            value: props?.data?.locations_count - props?.data?.locations.length
                                                        })}</div>
                                                    </div>
                                                }
                                            </div>
                                            {duration &&
                                            <div className="route-locations__duration">
                                                <div className="route-locations__dash"/>
                                                <div className="route-locations__placeholder">
                                                    <div className="route-locations__time">{duration}</div>
                                                </div>
                                            </div>
                                            }
                                            <div className="route-locations__title">{item.title}</div>
                                            {item?.address && item?.address.length > 0 &&
                                                <div className="route-locations__type">{item.address}</div>
                                            }
                                            
                                        </div>
                                    );
                                })}
                        </div>
                        }
                        
                    </div>{/*route-locations*/}
                    
                    {props?.data?.reviews && props?.data?.reviews.length > 0 &&
                        <div className="route-section route-comment">
                            <div className="route-comment__heading">
                                <h2 className="title-2">{t('route.main_comment.title')}</h2>
                            </div>
                            <div className="route-comment__content">
                                <div className="route-review">
                                    <div className="route-review__head">
                                        <UserComponent userType='review' user={props?.data?.reviews[0].author}/>
                                        <div className="route-review__block">
                                            <div className="rating rating--small"><Rating value={props?.data?.reviews[0].rating}/></div>
                                            <div className="route-review__date">
                                                <Moment format="YYYY/MM/DD">{props?.data?.reviews[0].created_at}</Moment>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="route-review__text">
                                        {props?.data?.reviews[0].positive}
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
                    {(props?.data?.pictures.length > 0 || props?.data?.video != "") &&
                    <div className="route-section route-gallery">
                        <RouteGallerySlider data={props.data}/>
                    </div>
                    }
                <div className="container">
                    <div className="route-section route-note">
                        <div>
                            Stylish, traditional, futuristic — it&apos;s all about Tokyo! On a walk we will visit the Meiji
                            Jingu Shinto shrine, sort out fashion
                            trends on Takeshita Street, meet Hachiko at Shibuya Station, look into designer shops and
                            taste unprecedented Japanese sweets.
                        </div>
                    </div>{/*route-note*/}


                    <div className="route-section route-content">
                        <div className="route-content__col">
                            <div className="route-content__img">
                                <Image src="/images/route-pic.jpg" alt="" title="" layout="fill"/>
                            </div>
                        </div>
                        <div className="route-content__col">
                            <div className="route-content__content">
                                <h2 className="title-2 route-content__title">About Shinto Traditions at the Meiji Jingu Shrine</h2>
                                <div className="route-content__text">
                                    Your introduction to traditional Tokyo will begin at the Meiji Jingu Shrine. Here
                                    you will understand how Shinto temples differ from Buddhist ones, and hear
                                    interesting facts about the era of the reign of Emperor Meiji. On the way to the
                                    temple, we will walk through the Yoyogi Park among thousands of trees donated
                                    by people from all over Japan, and take part in a sacred ritual - make a wish by
                                    writing it down on a wooden ema tablet.
                                </div>
                            </div>
                        </div>
                    </div>{/*route-content*/}
                    <div className="route-section route-content route-content--reverse">
                        <div className="route-content__col">
                            <div className="route-content__img">
                                <Image src="/images/route-pic.jpg" alt="" title="" layout="fill"/>
                            </div>
                        </div>
                        <div className="route-content__col">
                            <div className="route-content__content">
                                <h2 className="title-2 route-content__title">The colors and flavors of Takeshita Street</h2>
                                <div className="route-content__text">
                                    Leaving the park, you will find yourself in a favorite place of Japanese youth - on
                                    a small but noisy and crowded Takeshita street. You will be amazed by fashionistas
                                    in crazy outfits and, of course, unusual sweets: &quot;French&quot; pancakes, rainbow cotton
                                    candy the size of a small umbrella or eclairs, the taste of which changes depending
                                    on the season!
                                </div>
                            </div>
                        </div>
                    </div>{/*route-content*/}
                    <div className="route-section route-note route-note--bg">
                        <div>
                            Leaving the park, you will find yourself in a favorite place of Japanese youth - on a small
                            but noisy and crowded Takeshita street. You will be amazed by fashionistas in crazy outfits
                            and unusual sweets: &quot;French&quot; pancakes, rainbow cotton candy the size of a small
                            umbrella or eclairs, the taste of which changes depending on the season!
                        </div>
                    </div>{/*route-note*/}
                    <div className="route-section route-content route-content--center">
                        <div className="route-content__col">
                            <div className="route-content__content">
                                <h2 className="title-2 route-content__title">Japanese shopping: from Oriental Bazar to stylish shops</h2>
                                <div className="route-content__text">
                                    The next stop is the Tokyo Champs Elysees, or Omotesando Street. Boutiques of leading
                                    brands and the oldest souvenir shop Oriental Bazar are located here. And turning to the
                                    inner streets, we will find shops with author&apos;s things by young Japanese designers and
                                    shops with authentic street food.
                                </div>
                            </div>
                        </div>
                    </div>{/*route-content*/}
                    <div className="route-section route-poster">
                        <div className="route-poster__img">
                            <Image src="/images/route-main.jpg" alt="" title="" layout="fill"/>
                        </div>
                        <div className="route-poster__content">
                            <h2 className="title-2">Heading</h2>
                            <div className="route-poster__text">
                                Walk through the atmospheric districts of the city and experience the contrasts of
                                Japanese culture
                            </div>
                        </div>
                    </div>{/*route-poster*/}
                    <div className="route-section route-content route-content--center">
                        <div className="route-content__col">
                            <div className="route-content__content">
                                <h2 className="title-2 route-content__title">The colors and flavors of Takeshita Street</h2>
                                <div className="route-content__text">
                                    Leaving the park, you will find yourself in a favorite place of Japanese youth - on
                                    a small but noisy and crowded Takeshita street. You will be amazed by fashionistas
                                    in crazy outfits and, of course, unusual sweets: &quot;French&quot; pancakes, rainbow cotton
                                    candy the size of a small umbrella or eclairs, the taste of which changes depending
                                    on the season!
                                </div>

                                <h3 className="title-3 route-content__title">The colors and flavors of Takeshita Street</h3>
                                <div className="route-content__text">
                                    Leaving the park, you will find yourself in a favorite place of Japanese youth - on
                                    a small but noisy and crowded Takeshita street. You will be amazed by fashionistas
                                    in crazy outfits and, of course, unusual sweets: &quot;French&quot; pancakes, rainbow cotton
                                    candy the size of a small umbrella or eclairs, the taste of which changes depending
                                    on the season!
                                </div>

                                <h2 className="title-2 route-content__title">Organizational details</h2>
                                <ul>
                                    <li>
                                        Please wear comfortable shoes and bring water.
                                    </li>
                                    <li>
                                        If long walks are difficult for you, we can use a taxi. Transportation costs,
                                        entrance tickets and lunch are not included in the price of the tour (the traveler
                                        pays these expenses for himself and for the guide).
                                    </li>
                                    <li>
                                        For an additional fee (3,000 yen/hour), the tour can be extended at your request.
                                    </li>
                                </ul>

                                <h2 className="title-2 route-content__title">Japanese shopping: from Oriental Bazar to stylish shops</h2>
                                <div className="route-content__text">
                                    The next stop is the Tokyo Champs Elysees, or Omotesando Street. Boutiques of leading
                                    brands and the oldest souvenir shop Oriental Bazar are located here. And turning to the
                                    inner streets, we will find shops with author&apos;s things by young Japanese designers and
                                    shops with authentic street food.
                                </div>
                            </div>
                        </div>
                    </div>{/*route-content*/}
                    
                    {props?.data?.reviews && props?.data?.reviews.length > 0 &&
                    <div className="route-section route-reviews">
                        <div className="route-reviews__head">
                            {props?.data?.rating > 0 &&
                            <div className="rating-number">{props?.data?.rating}</div>
                            }
                            <h2 className="title-2">{t('route.reviews.title')} <span>({reviews?.meta?.total})</span></h2>
                        </div>
                        <div className="route-reviews__container">
                            <div className="route-reviews__content">
                                <div className="route-reviews__items">
                                    {reviews?.data && reviews?.data.length > 0 && reviews?.data.map(item => {

                                        return (
                                            <div className="route-reviews__item">
                                                <div className="route-review">
                                                    <div className="route-review__head">
                                                        <UserComponent userType='review' user={item.author}/>
                                                        <div className="route-review__block">
                                                            <div className="rating rating--small"><Rating value={item.rating}/></div>
                                                            <div className="route-review__date"><Moment format="YYYY/MM/DD">{item.created_at}</Moment></div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="route-review__text">
                                                        {t('route.reviews.recommended', {
                                                            result: !!item?.recommends ? t('route.reviews.recommended_yes') : t('route.reviews.recommended_no')
                                                        })}
                                                    </div>

                                                    {!!item?.positive &&
                                                    <div className="route-review__text">
                                                        <span>{t('route.reviews.positive')}</span>
                                                        {item?.positive}
                                                    </div>
                                                    }

                                                    {!!item?.negative &&
                                                    <div className="route-review__text">
                                                        <span>{t('route.reviews.negative')}</span>
                                                        {item?.negative}
                                                    </div>
                                                    }
                                                </div>
                                            </div>
                                        );
                                    })}
                                    
                                </div>

                                {/*<div className="route-reviews__more">
                                    <Button
                                        variant="outlined"
                                        size="medium"
                                    >
                                        Show more
                                    </Button>
                                </div>*/}
                            </div>
                            <div className="route-reviews__sort">
                                {Array.apply(null, Array (5)).map((item, index) => {
                                    
                                    let rating = 5 - index,
                                        inputId = "route-reviews-rating-" + rating;

                                    return (
                                        <label className="checkbox" htmlFor={inputId}>
                                            <input
                                                className="checkbox__input"
                                                type="checkbox"
                                                id={inputId}
                                                name={inputId}
                                                onChange={e => {setReviewsFilterValue('rating', rating)}}
                                            />
                                            <span className="checkbox__label">
                                                <Rating value={rating}/>
                                                <span className="route-reviews__number"></span>
                                            </span>
                                        </label>
                                    );
                                })}

                                
                            </div>
                        </div>
                    </div>
                    }
                </div>
            </div>

        </Layout>
    );

}