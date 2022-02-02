import Link from 'next/link'
import {Button, Input, Logo} from '@components/ui'
import {ChevronDown, Heart, SearchIcon, User} from '@components/icons'
import {I18nWidget} from '@components/common'

import { Modal } from '@components/ui/Modal'
import { useModal } from '@lib/hooks/useModal';
import {useEffect, useState} from "react";
import throttle from 'lodash.throttle'
import cn from 'classnames'

const Header = () => {
    const { isShown, toggle } = useModal();

    const [hasScrolled, setHasScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = throttle(() => {
            const offset = 0
            const { scrollTop } = document.documentElement
            const scrolled = scrollTop > offset

            if (hasScrolled !== scrolled) {
                setHasScrolled(scrolled)
            }
        }, 200)

        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [hasScrolled])

    return (
        <header className={cn("header", {'header--transparent': !hasScrolled})}>
            <div className="container header__container">
                <Button className="burger-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </Button>
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
                <div className="header-nav">
                    <div className="header-nav__item">
                        <Link href="#">
                            <a className="header-nav__link">How the site works?</a>
                        </Link>
                    </div>
                    <div className="header-nav__item">
                        <Link href="#">
                            <a className="header-nav__link">Become an author</a>
                        </Link>
                    </div>
                    <div className="header-nav__item">
                        <Link href="#">
                            <a className="header-nav__link">Support</a>
                        </Link>
                    </div>
                </div>
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
                headerText='Confirmation'
                modalContent={
                    <div>
                        <div className="form__row">
                            <label className="form__label">First Name</label>
                            <Input className="form__field"/>
                        </div>
                    </div>
                }
            />
        </header>
    )
}

export default Header