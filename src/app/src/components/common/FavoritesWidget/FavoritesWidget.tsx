import Link from 'next/link';
import {Heart} from '@components/icons';
import { useTranslation } from 'next-i18next';

const FavoritesWidget = () => {

    const { t } = useTranslation("components");

    return (
        <>
            <Link href="#">
                <a className="header-nav__link">
                    <span className="icon header-nav__icon">
                        <Heart />
                    </span>
                    <span>{t('header.link.favorites')}</span>
                </a>
            </Link>
        </>
    );
};

export default FavoritesWidget;