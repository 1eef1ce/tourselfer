import React from 'react';
import Link from 'next/link';
import {Logo} from '@components/ui';
import {I18nWidget} from '@components/common';
import { useWindowSize } from '@lib/hooks/useWindowSize';
import {useEffect, useState} from 'react';
import throttle from 'lodash.throttle';
import cn from 'classnames';
import HeaderMenu from '@components/common/Menu/HeaderMenu';
import MobileSearch from '@components/common/Search/MobileSearch';
import {SignIn} from '@components/common/UserNav';
import BottomMenu from '@components/common/Menu/BottomMenu';
import {FavoritesWidget} from '@components/common/FavoritesWidget';
import { useTranslation } from 'next-i18next';

interface HeaderProps {
    transparent?: boolean;
}

const Header = ({transparent = false}: HeaderProps) => {
    const [hasScrolled, setHasScrolled] = useState(false);
    const windowSize = useWindowSize();
    const { t } = useTranslation("components");

    let isMobile;
    (windowSize.width < 768) ? isMobile = true : isMobile = false;

    useEffect(() => {
        const handleScroll = throttle(() => {
            const offset = 0;
            const {scrollTop} = document.documentElement;
            const scrolled = scrollTop > offset;

            if (hasScrolled !== scrolled) {
                setHasScrolled(scrolled);
            }
        }, 200);

        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [hasScrolled]);

    return (
        <>
            <header className={cn("header", {'header--transparent': transparent && !hasScrolled})}>
                {/*<IPAddress/>*/}
                <div className="container header__container">
                    <Link href="/">
                        <a className="logo header__logo icon">
                            <Logo/>
                        </a>
                    </Link>
                    {isMobile && <MobileSearch/>}
                    <div className="dropdown header__lang">
                            <I18nWidget/>
                    </div>
                    <HeaderMenu/>
                    <div className="header-links">
                        <div className="header-links__item">
                            <FavoritesWidget/>
                        </div>
                        <div className="header-links__item">
                            <SignIn/>
                        </div>
                    </div>
                </div>
            </header>
            {isMobile && <BottomMenu/>}
        </>
    );
};

export default Header;