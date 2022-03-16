import {useState, useEffect} from 'react';
import Link from 'next/link';
import {ChevronRight} from '@components/icons';
import { useTranslation } from 'next-i18next';

const FooterMenu = () => {
    
    const {t} = useTranslation("menu");

    return (
        <div className="footer-nav">

            <div className="footer-nav__item">
                <Link href="/how-it-works">
                    <a className="footer-nav__link">{t('footer.how_it_works')}</a>
                </Link>
            </div>

            <div className="footer-nav__item">
                <Link href="/about">
                    <a className="footer-nav__link">{t('footer.about_us')}</a>
                </Link>
            </div>

            <div className="footer-nav__item">
                <Link href="/faq">
                    <a className="footer-nav__link">{t('footer.faq')}</a>
                </Link>
            </div>

            <div className="footer-nav__item">
                <Link href="/become-an-author">
                    <a className="footer-nav__link">{t('footer.become_an_author')}</a>
                </Link>
            </div>

            <div className="footer-nav__item">
                <Link href="/support">
                    <a className="footer-nav__link">{t('footer.support')}</a>
                </Link>
            </div>

            <div className="footer-nav__item">
                <Link href="/blog">
                    <a className="footer-nav__link">{t('footer.blog')}</a>
                </Link>
            </div>

        </div>
    );
};

export default FooterMenu;