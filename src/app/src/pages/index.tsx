import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {Layout} from '@components/common';
import {Button} from '@components/ui';
import {AdvantageSlider, AppSlider, Review, ReviewSlider, Searchbar} from '@components/common';
import {Appstore, ArrowRight, Googleplay} from '@components/icons';
import {useRouter} from 'next/router';
import { en } from '../locales/en';
import { ru } from '../locales/ru';
import { zh } from '../locales/zh';

export default function Home() {

    const router = useRouter();
    const r = router.locale;
    let t = null;
    switch (r) {
        case 'ru': t = ru;
            break;
        case 'zh-CN': t = zh;
            break;
        default: t = en;
    }

    return (
        <Layout>
            <Head>
                <title>Tourselfer</title>
                <meta name="description" content="Ready routes for your phone"/>
            </Head>
            <div className="showcase showcase--main">
                <picture className="showcase__picture">
                    <source srcSet="/images/main.jpg" media="(min-width: 500px)"/>
                    <source srcSet="/images/main-mobile.jpg" media="(min-width: 320px)"/>
                    <img src="/images/main.jpg" alt="img" title=""/>
                </picture>
                <div className="container showcase__container">
                    <h1 className="showcase__heading">{t.title}</h1>
                    <div className="search showcase__search">
                        <div className="search__title">where to?</div>
                        <Searchbar/>
                        <div className="search__text">
                            Popular now: <span>Bangkok, Paris, London, Dubai, New-York</span>
                        </div>
                    </div>
                    <div className="showcase__bottom container">
                        <div className="showcase__items">
                            <Link href="#">
                                <a className="showcase__item">
                                    <Image src="/images/route-1.jpg" alt="route" title="" layout="fill"/>
                                    <div className="showcase__content">
                                        <div className="showcase__text">Spain</div>
                                        <div className="title-4 showcase__title">Madrid</div>
                                    </div>
                                </a>
                            </Link>
                            <Link href="#">
                                <a className="showcase__item">
                                    <Image src="/images/route-2.jpg" alt="route" title="" layout="fill"/>
                                    <div className="showcase__content">
                                        <div className="showcase__text">Germany</div>
                                        <div className="title-4 showcase__title">Berlin</div>
                                    </div>
                                </a>
                            </Link>
                            <Link href="#">
                                <a className="showcase__item">
                                    <Image src="/images/route-3.jpg" alt="route" title="" layout="fill"/>
                                    <div className="showcase__content">
                                        <div className="showcase__text">Holland</div>
                                        <div className="title-4 showcase__title">Amsterdam</div>
                                    </div>
                                </a>
                            </Link>
                            <Link href="#">
                                <a className="showcase__item">
                                    <Image src="/images/route-4.jpg" alt="route" title="" layout="fill"/>
                                    <div className="showcase__content">
                                        <div className="showcase__text">Сzech</div>
                                        <div className="title-4 showcase__title">Prague</div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>{/*showcase*/}

            <div className="section locations">
                <div className="container">
                    <div className="section__head">
                        <h2 className="title-2">Travelers like these</h2>
                        <Link href="#">
                            <a className="link link--arrow link--gray">
                                <span>All direction</span>
                                <span className="icon">
                                    <ArrowRight />
                                </span>
                            </a>
                        </Link>
                    </div>
                    <div className="locations__items">
                        <Link href="#">
                            <a className="locations__item locations__item--big">
                                <picture className="locations__picture">
                                    <source srcSet="/images/card-big.jpg" media="(min-width: 500px)"/>
                                    <source srcSet="/images/card-mobile-1.jpg" media="(min-width: 320px)"/>
                                    <img src="/images/card-big.jpg" alt="img" title=""/>
                                </picture>
                                <div className="locations__content">
                                    <div className="title-2 locations__title">Paris</div>
                                    <div className="locations__text">24 unique tours from 20 authors</div>
                                </div>
                            </a>
                        </Link>
                        <Link href="#">
                            <a className="locations__item locations__item--medium">
                                <picture className="locations__picture">
                                    <source srcSet="/images/card-medium.jpg" media="(min-width: 500px)"/>
                                    <source srcSet="/images/card-mobile-2.jpg" media="(min-width: 320px)"/>
                                    <img src="/images/card-big.jpg" alt="img" title=""/>
                                </picture>
                                <div className="locations__content">
                                    <div className="title-2 locations__title">London</div>
                                    <div className="locations__text">27 unique tours from 22 authors</div>
                                </div>
                            </a>
                        </Link>
                        <Link href="#">
                            <a className="locations__item">
                                <picture className="locations__picture">
                                    <source srcSet="/images/card-small-1.jpg" media="(min-width: 500px)"/>
                                    <source srcSet="/images/card-mobile-3.jpg" media="(min-width: 320px)"/>
                                    <img src="/images/card-big.jpg" alt="img" title=""/>
                                </picture>
                                <div className="locations__content">
                                    <div className="title-2 locations__title">Rome</div>
                                    <div className="locations__text">24 unique tours from 20 authors</div>
                                </div>
                            </a>
                        </Link>
                        <Link href="#">
                            <a className="locations__item">
                                <picture className="locations__picture">
                                    <source srcSet="/images/card-small-2.jpg" media="(min-width: 500px)"/>
                                    <source srcSet="/images/card-mobile-4.jpg" media="(min-width: 320px)"/>
                                    <img src="/images/card-big.jpg" alt="img" title=""/>
                                </picture>
                                <div className="locations__content">
                                    <div className="title-2 locations__title">Dubai</div>
                                    <div className="locations__text">24 unique tours from 20 authors</div>
                                </div>
                            </a>
                        </Link>
                        <Link href="#">
                            <a className="locations__item">
                                <picture className="locations__picture">
                                    <source srcSet="/images/card-small-3.jpg" media="(min-width: 500px)"/>
                                    <source srcSet="/images/card-mobile-5.jpg" media="(min-width: 320px)"/>
                                    <img src="/images/card-big.jpg" alt="img" title=""/>
                                </picture>
                                <div className="locations__content">
                                    <div className="title-2 locations__title">New York City</div>
                                    <div className="locations__text">24 unique tours from 20 authors</div>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="locations__more">
                        <Button className="btn btn--more">See more...</Button>
                    </div>
                </div>
            </div>{/*locations*/}

            <div className="section advantages">
                <div className="container">
                    <div className="section__head">
                        <h2 className="title-2">Traveling with us means</h2>
                        <Link href="/about">
                            <a className="link link--arrow link--gray">
                                <span>About Tourselfer</span>
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
                        <h2 className="title-2">Routes reviews</h2>
                        <Link href="#">
                            <a className="link link--arrow link--gray">
                                <span>All direction</span>
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
                        <h2 className="title-2">Everything for an the best trip — in your phone</h2>
                        <div className="section__text">
                            Thoughtful tours to popular and unusual places in your mobile. Follow the virtual guide
                            even without the Internet!
                        </div>
                    </div>
                    <AppSlider/>
                </div>
            </div>{/*app*/}

            <div className="section download">
                <div className="container">
                    <div className="section__head section__head--center">
                        <h2 className="title-2">Download our app now:</h2>
                    </div>
                    <div className="download__items">
                        <a className="download__item icon" href="javascript:void(0)">
                            <Googleplay />
                        </a>
                        <a className="download__item icon" href="javascript:void(0)">
                            <Appstore />
                        </a>
                    </div>
                    <div className="download__block">
                        <div className="download__text">Or use QR-cod</div>
                        <div className="download__code">
                            <Image src="/images/qr.png" alt="qr" title="" layout="fill"/>
                        </div>
                    </div>
                </div>
            </div>{/*download*/}
        </Layout>
    );
}
