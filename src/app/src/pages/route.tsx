import {Breadcrumbs, Layout} from '@components/common';
import Head from 'next/head';
import Image from 'next/image';
import {CheckRounded, Lock, Man, MapPin} from '@components/icons';
import {Rating} from '@components/ui';

export default function RouteDetailPage() {
    return (
        <Layout>
            <Head>
                <title>Route</title>
            </Head>

            <div className="route">
                <div className="showcase showcase--route">
                    <div className="showcase__picture">
                        <img src="/images/route-main.jpg" alt="" title=""/>
                    </div>
                    <div className="container showcase__container">
                        <Breadcrumbs rootClass="breadcrumbs breadcrumbs--white"/>
                        <div className="route-cover">
                            <div className="route-cover__bg">
                                <img src="/images/route-main.jpg" alt="" title=""/>
                            </div>
                            <div className="route-cover__content">
                                <div className="rating route-cover__rating">
                                    <div className="rating__number">4.5</div>
                                </div>
                                <div>
                                    <h1 className="route-cover__heading">Tokyo kaleidoscope</h1>
                                    <div className="route-cover__text">
                                        Walk through the atmospheric districts of the city and experience the contrasts of
                                        Japanese culture
                                    </div>
                                </div>
                            </div>
                            <div className="route-cover__labels route-labels">
                                <div className="route-labels__items">
                                    <div className="route-labels__item">
                                        <div className="icon route-labels__icon">
                                            <MapPin/>
                                        </div>
                                        <div>SUPER PLACE</div>
                                    </div>
                                    <div className="route-labels__item">
                                        <div className="icon route-labels__icon">
                                            <CheckRounded/>
                                        </div>
                                        <div>ROUTE VERIFIED</div>
                                    </div>
                                </div>
                            </div>
                        </div>{/*route-cover*/}
                    </div>
                </div>
                <div className="container">
                    <div className="route-about">
                        <div className="route-about__user">
                            <div className="user user--large">
                                <div className="user__img">
                                    <div className="icon user__icon user__icon--bottom">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 12L3 7L6 8L8 3L10 8L13 7L11 12H5Z" fill="white"/>
                                        </svg>
                                    </div>
                                    <img src="/images/user.jpg" alt="" title=""/>
                                </div>
                                <div className="user__content">
                                    <div className="user__name">Tatiana Sidorenko</div>
                                    <div className="user__status">Professional author</div>
                                </div>
                            </div>
                        </div>
                        <div className="route-about__params">
                            <div className="route-about__param">
                                <div>Travel time</div>
                                <div className="route-about__value">7–8 hours</div>
                            </div>
                            <div className="route-about__param">
                                <div>Route costs</div>
                                <div className="route-about__value">$100–200</div>
                            </div>
                            <div className="route-about__param">
                                <div>Way to travel</div>
                                <div className="route-about__value">
                                    <div className="icon route-about__icon">
                                        <Man/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="route-about__buy">
                            <div className="route-buy">
                                <div className="route-buy__cost">
                                    <div className="route-buy__current">$60</div>
                                    <div className="route-buy__old">$120</div>
                                </div>
                                <a href="#" className="btn btn--large btn--filled">Buy Route</a>
                            </div>
                            <a href="#" className="link link--color route-buy__link">Walk the route with a guide</a>
                        </div>
                    </div>{/*route-about*/}
                    <div className="route-locations">
                        <div className="route-locations__items">
                            <div className="route-locations__item">
                                <div className="route-locations__img">
                                    <Image src="/images/route-pic.jpg" alt="" title="" layout="fill"/>
                                </div>
                                <div className="route-locations__duration">
                                    <div className="route-locations__dash"/>
                                    <div className="route-locations__placeholder">
                                        <div className="route-locations__time">1 hour</div>
                                    </div>
                                </div>
                                <div className="route-locations__title">Imperial Palace in Tokyo</div>
                                <div className="route-locations__type">Architecture, Park</div>
                            </div>
                            <div className="route-locations__item route-locations__item--unlocked">
                                <div className="route-locations__img">
                                    <Image src="/images/route-pic.jpg" alt="" title="" layout="fill"/>
                                    <div className="route-locations__more">
                                        <div className="route-locations__icon">
                                            <Lock locked={false}/>
                                        </div>
                                        <div>12 more locations available</div>
                                    </div>
                                </div>
                                <div className="route-locations__duration">
                                    <div className="route-locations__dash"/>
                                    <div className="route-locations__placeholder">
                                        <div className="route-locations__time">2–3 hours</div>
                                    </div>
                                </div>
                                <div className="route-locations__title">Ginza area in Tokyo</div>
                                <div className="route-locations__type">Architecture</div>
                            </div>
                            <div className="route-locations__item route-locations__item--locked">
                                <div className="route-locations__img">
                                    <Image src="/images/route-pic.jpg" alt="" title="" layout="fill"/>
                                    <div className="route-locations__more">
                                        <div className="route-locations__icon">
                                            <Lock locked={true}/>
                                        </div>
                                        <div>Unlock 12 more locations</div>
                                    </div>
                                </div>
                                <div className="route-locations__duration">
                                    <div className="route-locations__dash"/>
                                    <div className="route-locations__placeholder">
                                        <div className="route-locations__time">1 hour</div>
                                    </div>
                                </div>
                                <div className="route-locations__title">Ginza area in Tokyo</div>
                                <div className="route-locations__type">Entertainment</div>
                            </div>
                        </div>
                    </div>{/*route-locations*/}
                    <div className="route-section route-comment">
                        <div className="route-comment__heading">
                            <h2 className="title-2">What people say</h2>
                        </div>
                        <div className="route-comment__content">
                            <div className="route-review">
                                <div className="route-review__head">
                                    <div className="user">
                                        <div className="user__img">
                                            <div className="icon user__icon user__icon--bottom">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5 12L3 7L6 8L8 3L10 8L13 7L11 12H5Z" fill="white"/>
                                                </svg>
                                            </div>
                                            <img src="/images/user.jpg" alt="" title=""/>
                                        </div>
                                        <div className="user__content">
                                            <div className="user__name">Kelly Harris</div>
                                            <div className="user__status">Traveler, USA</div>
                                        </div>
                                    </div>
                                    <div className="route-review__block">
                                        <div className="rating"><Rating value={5}/></div>
                                        <div className="route-comment__date">Jun 2021</div>
                                    </div>
                                </div>
                                <div className="route-review__text">
                                    Sights. Food. The nearest stops and transport. Free Wi-Fi. Restrooms. Opening hours of
                                    museums, exhibitions, shopping centers ... Rely on the navigator - it is up to date with
                                    the latest information.
                                </div>
                            </div>
                        </div>
                    </div>{/*route-comment*/}
                    <div className="route-section route-gallery">

                    </div>{/*route-gallery*/}
                    <div className="route-section route-note">
                        <div>
                            Stylish, traditional, futuristic — it's all about Tokyo! On a walk, I will help you feel
                            this unity of opposites: we will visit the Meiji Jingu Shinto shrine, sort out fashion
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
                            <h2 className="title-2">About Shinto Traditions at the Meiji Jingu Shrine</h2>
                            <div>
                                Your introduction to traditional Tokyo will begin at the Meiji Jingu Shrine. Here
                                you will understand how Shinto temples differ from Buddhist ones, and hear
                                interesting facts about the era of the reign of Emperor Meiji. And on the way to the
                                temple, we will walk through the shady Yoyogi Park among thousands of trees donated
                                by people from all over Japan, and take part in a sacred ritual - make a wish by
                                writing it down on a wooden ema tablet.
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
                            <h2 className="title-2">The colors and flavors of Takeshita Street</h2>
                            <div>
                                Leaving the park, you will find yourself in a favorite place of Japanese youth - on
                                a small but noisy and crowded Takeshita street. You will be amazed by fashionistas
                                in crazy outfits and, of course, unusual sweets: "French" pancakes, rainbow cotton
                                candy the size of a small umbrella or eclairs, the taste of which changes depending
                                on the season!
                            </div>
                        </div>
                    </div>{/*route-content*/}
                    <div className="route-section route-note route-note--bg">
                        <div>
                            Leaving the park, you will find yourself in a favorite place of Japanese youth - on a small
                            but noisy and crowded Takeshita street. You will be amazed by fashionistas in crazy outfits
                            and, of course, unusual sweets: "French" pancakes, rainbow cotton candy the size of a small
                            umbrella or eclairs, the taste of which changes depending on the season!
                        </div>
                    </div>{/*route-note*/}
                    <div className="route-section route-content route-content--center">
                        <div className="route-content__col">
                            <h2 className="title-2">Japanese shopping: from Oriental Bazar to stylish shops</h2>
                            <div>
                                The next stop is the Tokyo Champs Elysees, or Omotesando Street. Boutiques of leading
                                brands and the oldest souvenir shop Oriental Bazar are located here. And turning to the
                                inner streets, we will find shops with author's things by young Japanese designers and
                                shops with authentic street food.
                            </div>
                        </div>
                    </div>{/*route-content*/}
                    <div className="route-section route-poster">
                        <div className="route-poster__img">
                            <Image src="/images/route-main.jpg" alt="" title="" layout="fill"/>
                        </div>
                        <div className="route-poster__content">
                            <h2 className="title-2">Heading</h2>
                            <div>
                                Walk through the atmospheric districts of the city and experience the contrasts of
                                Japanese culture
                            </div>
                        </div>
                    </div>{/*route-poster*/}
                    <div className="route-section route-content route-content--center">
                        <div className="route-content__col">
                            <h2 className="title-2">Organizational details</h2>
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
                        </div>
                    </div>{/*route-content*/}
                    <div className="route-section route-reviews">
                        <div className="route-reviews__head">
                            <div className="rating">
                                <div className="rating__number">4.5</div>
                            </div>
                            <h2 className="title-2">Reviews <span>(5)</span></h2>
                        </div>
                        <div className="route-reviews__container">
                            <div className="route-reviews__content">
                                <div className="route-reviews__items">
                                    <div className="route-reviews__item">
                                        <div className="route-review">
                                            <div className="route-review__head">
                                                <div className="user">
                                                    <div className="user__img">
                                                        <div className="icon user__icon user__icon--bottom">
                                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M5 12L3 7L6 8L8 3L10 8L13 7L11 12H5Z" fill="white"/>
                                                            </svg>
                                                        </div>
                                                        <img src="/images/user.jpg" alt="" title=""/>
                                                    </div>
                                                    <div className="user__content">
                                                        <div className="user__name">Kelly Harris</div>
                                                        <div className="user__status">Traveler, USA</div>
                                                    </div>
                                                </div>
                                                <div className="route-review__block">
                                                    <div className="rating"><Rating value={5}/></div>
                                                    <div className="route-comment__date">Jun 2021</div>
                                                </div>
                                            </div>
                                            <div className="route-review__text">
                                                Sights. Food. The nearest stops and transport. Free Wi-Fi. Restrooms. Opening hours of
                                                museums, exhibitions, shopping centers ... Rely on the navigator - it is up to date with
                                                the latest information.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="route-reviews__item">
                                        <div className="route-review">
                                            <div className="route-review__head">
                                                <div className="user">
                                                    <div className="user__img">
                                                        <div className="icon user__icon user__icon--bottom">
                                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M5 12L3 7L6 8L8 3L10 8L13 7L11 12H5Z" fill="white"/>
                                                            </svg>
                                                        </div>
                                                        <img src="/images/user.jpg" alt="" title=""/>
                                                    </div>
                                                    <div className="user__content">
                                                        <div className="user__name">Kelly Harris</div>
                                                        <div className="user__status">Traveler, USA</div>
                                                    </div>
                                                </div>
                                                <div className="route-review__block">
                                                    <div className="rating"><Rating value={5}/></div>
                                                    <div className="route-comment__date">Jun 2021</div>
                                                </div>
                                            </div>
                                            <div className="route-review__text">
                                                <p>
                                                    It's great that we managed to see the places and pray in the temple
                                                    and try different tasty treats and shop. There is no such gallop, as
                                                    is usual in travel agencies.
                                                </p>
                                                <p>
                                                    Special thanks for the history of Shintoism.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="route-reviews__sort">
                                <label className="checkbox" htmlFor="s5">
                                    <input
                                        className="checkbox__input"
                                        type="checkbox"
                                        id="s5"
                                        name="s5"
                                    />
                                    <span className="checkbox__label">
                                        <span className="rating"><Rating value={5}/></span>
                                        <span>2</span>
                                    </span>
                                </label>
                                <label className="checkbox" htmlFor="s4">
                                    <input
                                        className="checkbox__input"
                                        type="checkbox"
                                        id="s4"
                                        name="s4"
                                    />
                                    <span className="checkbox__label">
                                        <span className="rating"><Rating value={4}/></span>
                                        <span>1</span>
                                    </span>
                                </label>
                                <label className="checkbox" htmlFor="s3">
                                    <input
                                        className="checkbox__input"
                                        type="checkbox"
                                        id="s3"
                                        name="s3"
                                    />
                                    <span className="checkbox__label">
                                        <span className="rating"><Rating value={3}/></span>
                                        <span>1</span>
                                    </span>
                                </label>
                                <label className="checkbox" htmlFor="s2">
                                    <input
                                        className="checkbox__input"
                                        type="checkbox"
                                        id="s2"
                                        name="s2"
                                    />
                                    <span className="checkbox__label">
                                        <span className="rating"><Rating value={2}/></span>
                                        <span>1</span>
                                    </span>
                                </label>
                                <label className="checkbox" htmlFor="s1">
                                    <input
                                        className="checkbox__input"
                                        type="checkbox"
                                        id="s1"
                                        name="s1"
                                        disabled
                                    />
                                    <span className="checkbox__label">
                                        <span className="rating"><Rating value={1}/></span>
                                        <span>0</span>
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>{/*route-reviews*/}
                </div>
            </div>
        </Layout>
    );
}