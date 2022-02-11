import React from 'react';
import Link from 'next/link';
import {Button, Logo, Modal} from '@components/ui';
import {ChevronDown, Heart, SearchIcon, User} from '@components/icons';
import {I18nWidget, IPAddress} from '@components/common';
import { useModal } from '@lib/hooks/useModal';
import {useEffect, useState} from 'react';
import throttle from 'lodash.throttle';
import cn from 'classnames';
import {ForgotPassword, LoginView} from '@components/auth';
import {Callback} from '@components/callback';
import {FastOrder} from '@components/order';
import MobileMenuContainer from '@components/common/Menu/MobileMenu';
import HeaderMenu from '@components/common/Menu/HeaderMenu';

const Header = () => {
    const { isShown, toggle } = useModal();
    const [hasScrolled, setHasScrolled] = useState(false);

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
                <MobileMenuContainer/>
                <Link href="/">
                    <a className="logo header__logo icon">
                        <Logo />
                    </a>
                </Link>
                <Button className="search-btn icon">
                    <SearchIcon/>
                </Button>
                <div className="dropdown header__lang">
                    <Button className="dropdown__btn">
                        <span>lang</span>
                        <span className="icon dropdown__icon">
                            <ChevronDown />
                        </span>
                    </Button>
                    <div className="dropdown__content">
                        <I18nWidget />
                    </div>
                </div>
                <HeaderMenu/>
                <div className="header__links">
                    <div className="header-nav header-nav--icons">
                        <div className="header-nav__item">
                            <Link href="#">
                                <a className="header-nav__link" href="javascript:void(0)">
                                    <span className="icon header-nav__icon">
                                        <Heart />
                                    </span>
                                    <span>My routes</span>
                                </a>
                            </Link>
                        </div>
                        <div className="header-nav__item">
                            <Button className="header-nav__link" onClick={toggle}>
                                <span className="icon header-nav__icon">
                                    <User />
                                </span>
                                <span>Sign in</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                isShown={isShown}
                hide={toggle}
                modalContent={
                    <FastOrder/>
                }
            />
        </header>
    );
};

export default Header;