import Link from 'next/link';
import { useRouter } from 'next/router';
import {Heart, Impression, RoutesIcon, SearchIcon, User} from '@components/icons';
import { useTranslation } from 'next-i18next';

const PersonalMenu = () => {
    const { t } = useTranslation("menu");
    const router = useRouter();
    const {locale, pathname, query, push} = useRouter();

    return (
        <div className="left-menu">
            <Link href="/personal">
                <a className={"left-menu__item" + (pathname == "/personal" ? " active" : "")}>
                    <div className="left-menu__icon routes"></div>
                    <div className="left-menu__text">
                        <span className="left-menu__title">{t('personal.index')}</span>
                        <span className="left-menu__desc">{t('personal.index_description')}</span>
                    </div>
                </a>
            </Link>
            <Link href="/personal/profile">
                <a className={"left-menu__item" + (pathname == "/personal/profile" ? " active" : "")}>
                    <div className="left-menu__icon profile"></div>
                    <div className="left-menu__text">
                        <span className="left-menu__title">{t('personal.profile')}</span>
                        <span className="left-menu__desc">{t('personal.profile_description')}</span>
                    </div>
                </a>
            </Link>
            <Link href="/personal/security">
                <a className={"left-menu__item" + (pathname == "/personal/security" ? " active" : "")}>
                    <div className="left-menu__icon lock"></div>
                    <div className="left-menu__text">
                        <span className="left-menu__title">{t('personal.security')}</span>
                        <span className="left-menu__desc">{t('personal.security_description')}</span>
                    </div>
                </a>
            </Link>
            <Link href="/personal/payments">
                <a className={"left-menu__item" + (pathname == "/personal/payments" ? " active" : "")}>
                    <div className="left-menu__icon payment"></div>
                    <div className="left-menu__text">
                        <span className="left-menu__title">{t('personal.payment')}</span>
                        <span className="left-menu__desc">{t('personal.payment_description')}</span>
                    </div>
                </a>
            </Link>
        </div>
    );
};

export default PersonalMenu;