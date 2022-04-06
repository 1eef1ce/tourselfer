import Link from 'next/link';
import {Logo} from '@components/ui';
import {Appstore, ChevronDown, Facebook, Googleplay, Instagram, World} from '@components/icons';
import {I18nWidget} from '@components/common';
import {FC} from 'react';
import { useTranslation } from 'next-i18next';
import FooterMenu from '@components/common/Menu/FooterMenu';

const Footer: FC = () => {

    const {t} = useTranslation("components");

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
                            {t('footer.service_description')}
                        </div>
                    </div>
                    <FooterMenu/>
                    <div className="download-app footer__app">
                        <div className="download-app__title">{t('footer.download_app_title')}</div>
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
                        <a className="link link--underline">{t('footer.privacy_policy')}</a>
                    </Link>
                    <div className="footer__links">
                        <div className="social footer__social">
                            <div className="social__items">
                                <a className="social__item icon" href="javascript:void(0)">
                                    
                                </a>
                                <a className="social__item icon" href="javascript:void(0)">
                                   
                                </a>
                            </div>
                        </div>
                        <div className="dropdown footer__lang">
                            <I18nWidget type={'footer'} />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;