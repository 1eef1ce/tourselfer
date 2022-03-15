import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import {useEffect, useState} from "react";

const HeaderMenu = () => {

    const {t} = useTranslation("menu");

    /*const [items, setItems] = useState<any>([]);

    useEffect(()=>{
        fetch('/headerMenu.json')
            .then(res => res.json())
            .then((result) => setItems(result));
    },[]);*/

    return (
        <div className="header-nav">

            <div className="header-nav__item">
                <Link href="/how-it-works">
                    <a className="header-nav__link">{t('header.how_it_works')}</a>
                </Link>
            </div>

            <div className="header-nav__item">
                <Link href="/become-an-author">
                    <a className="header-nav__link">{t('header.become_an_author')}</a>
                </Link>
            </div>

            <div className="header-nav__item">
                <Link href="/support">
                    <a className="header-nav__link">{t('header.support')}</a>
                </Link>
            </div>

        </div>
    );
};

export default HeaderMenu;