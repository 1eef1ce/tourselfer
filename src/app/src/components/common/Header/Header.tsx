import React from 'react';
import Link from 'next/link';
import {Logo, Modal} from '@components/ui';
import {ChevronDown, Heart, User} from '@components/icons';
import {I18nWidget, IPAddress} from '@components/common';
import { useModal } from '@lib/hooks/useModal';
import { useWindowSize } from '@lib/hooks/useWindowSize';
import {useEffect, useState} from 'react';
import throttle from 'lodash.throttle';
import cn from 'classnames';
import {ForgotPassword, LoginView} from '@components/auth';
import {Callback} from '@components/callback';
import {FastOrder} from '@components/order';
import MobileMenuContainer from '@components/common/Menu/MobileMenu';
import HeaderMenu from '@components/common/Menu/HeaderMenu';
import MobileSearchContainer from "@components/common/Search/MobileSearch";

const Header = () => {
    const { isShown, toggle } = useModal();
    const [hasScrolled, setHasScrolled] = useState(false);
    const windowSize = useWindowSize();
    let isMobile;
    (windowSize.width < 1024) ? isMobile = true : isMobile = false;

    useEffect(() => {
        const handleScroll = throttle(() => {
            const offset = 0;
            const { scrollTop } = document.documentElement;
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
                        <Logo />
                    </a>
                </Link>
                {isMobile && <MobileSearchContainer/>}
                <div className="dropdown header__lang">
                    <div className="dropdown__btn">
                        <span>lang</span>
                        <span className="icon dropdown__icon">
                            <ChevronDown />
                        </span>
                    </div>
                    <div className="dropdown__content">
                        <I18nWidget />
                    </div>
                </div>
                <HeaderMenu/>
                <div className="header__links">
                    <div className="header-nav header-nav--icons">
                        <div className="header-nav__item">
                            <Link href="#">
                                <a className="header-nav__link">
                                    <span className="icon header-nav__icon">
                                        <Heart />
                                    </span>
                                    <span>My routes</span>
                                </a>
                            </Link>
                        </div>
                        <div className="header-nav__item">
                            <div className="header-nav__link" onClick={toggle}>
                                <span className="icon header-nav__icon">
                                    <User />
                                </span>
                                <span>Sign in</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                isShown={isShown}
                hide={toggle}
                modalContent={
                    <LoginView/>
                    //<ForgotPassword/>
                    //<Callback/>
                    //<FastOrder/>
                }
            />
        </header>
    );
};

export default Header;