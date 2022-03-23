import Link from 'next/link';
import { useTranslation } from 'next-i18next';

const HeaderMenu = () => {
    const {t} = useTranslation("menu");

    const items = [
        {
            "href": "/how-it-works",
            "label": t('header.how_it_works')
        },
        {
            "href": "/become-an-author",
            "label": t('header.become_an_author')
        },
        {
            "href": "/support",
            "label": t('header.support')
        }
    ];

    return (
        <div className="header-nav">
            {items && items.length>0 && items.map(item => (
                <div key={item.href} className="header-nav__item">
                    <Link href={item.href}>
                        <a className="header-nav__link">{item.label}</a>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default HeaderMenu;