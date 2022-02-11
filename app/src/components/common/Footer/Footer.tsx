import Link from 'next/link';
import {Button, Logo} from '@components/ui';
import {Appstore, ChevronDown, Facebook, Googleplay, Instagram, World} from '@components/icons';
import {I18nWidget} from '@components/common';
import {FC} from 'react';
import FooterMenu from '@components/common/Menu/FooterMenu';

const Footer: FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__top">
                    <div className="footer__info">
                        <Link href="/">
                            <a className="logo footer__logo icon">
                                <Logo />
                            </a>
                        </Link>
                        <div className="footer__description">
                            Tourselfer - service of ready-made routes and tours. Only high-quality routes from trusted
                            authors.
                            A couple more lines of description text. So that everyone can understand what great guys we
                            are.
                        </div>
                    </div>
                    <FooterMenu/>
                    <div className="download-app footer__app">
                        <div className="download-app__title">Download our app now:</div>
                        <div className="download-app__items">
                            <a className="download-app__item icon" href="javascript:void(0)">
                                <Googleplay />
                            </a>
                            <a className="download-app__item icon" href="javascript:void(0)">
                                <Appstore />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <Link href="#">
                        <a className="link link--underline">Privacy policy</a>
                    </Link>
                    <div className="footer__links">
                        <div className="social footer__social">
                            <div className="social__items">
                                <a className="social__item icon" href="javascript:void(0)">
                                    <Instagram />
                                </a>
                                <a className="social__item icon" href="javascript:void(0)">
                                    <Facebook />
                                </a>
                            </div>
                        </div>
                        <div className="dropdown footer__lang">
                            <Button className="dropdown__btn">
                                <span className="icon dropdown__icon dropdown__icon--left">
                                    <World/>
                                </span>
                                <span>lang{/*{LOCALES_MAP[currentLocale].name}*/}</span>
                                <span className="icon dropdown__icon">
                                    <ChevronDown/>
                                </span>
                            </Button>
                            <div className="dropdown__content dropdown__content--up">
                                <I18nWidget />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;