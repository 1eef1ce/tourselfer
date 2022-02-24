import React from 'react';
import Link from 'next/link';
import {Logo} from '@components/ui';
import {ChevronDown, Heart} from '@components/icons';
import {I18nWidget} from '@components/common';
import { useWindowSize } from '@lib/hooks/useWindowSize';
import {useEffect, useState} from 'react';
import throttle from 'lodash.throttle';
import cn from 'classnames';
import MobileMenuContainer from '@components/common/Menu/MobileMenu';
import HeaderMenu from '@components/common/Menu/HeaderMenu';
import MobileSearchContainer from '@components/common/Search/MobileSearch';
import {SignIn} from '@components/common/UserNav';

const Header = () => {
    const [hasScrolled, setHasScrolled] = useState(false);
    const windowSize = useWindowSize();
    let isMobile;
    (windowSize.width < 1024) ? isMobile = true : isMobile = false;

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
        <header className={cn("header", {'header--transparent': !hasScrolled})}>
            {/*<IPAddress/>*/}
            <div className="container header__container">
                {isMobile && <MobileMenuContainer/>}
                <Link href="/">
                    <a className="logo header__logo icon">
                        <Logo/>
                    </a>
                </Link>
                {isMobile && <MobileSearchContainer/>}
                <div className="dropdown header__lang">
                    <button className="dropdown__btn">
                        <span>lang</span>
                        <span className="icon dropdown__icon">
                            <ChevronDown/>
                        </span>
                    </button>
                    <div className="dropdown__content">
                        <I18nWidget/>
                    </div>
                </div>
                <HeaderMenu/>
                <div className="header__links">
                    <div className="header-nav header-nav--icons">
                        <div className="header-nav__item">
                            <Link href="#">
                                <a className="header-nav__link">
                                    <span className="icon header-nav__icon">
                                        <Heart/>
                                    </span>
                                    <span>My routes</span>
                                </a>
                            </Link>
                        </div>
                        <div className="header-nav__item">
                            <SignIn/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;