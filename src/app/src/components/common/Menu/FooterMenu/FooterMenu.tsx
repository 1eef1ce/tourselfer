import Link from 'next/link';
import {ChevronRight} from '@components/icons';
import { useTranslation } from 'next-i18next';

const FooterMenu = () => {
    const {t} = useTranslation("menu");

    const items = [
        {
            "href": "/how-it-works",
            "label": t('footer.how_it_works')
        },
        {
            "href": "/about",
            "label": t('footer.about_us')
        },
        {
            "href": "/faq",
            "label": t('footer.faq')
        },
        {
            "href": "/become-an-author",
            "label": t('footer.become_an_author')
        },
        {
            "href": "/support",
            "label": t('footer.support')
        },
        {
            "href": "/blog",
            "label": t('footer.blog')
        }
    ];

    return (
        <div className="footer-nav">
            {items && items.length>0 && items.map(item => (
                <div key={item.href} className="footer-nav__item">
                    <Link href={item.href}>
                        <a className="footer-nav__link">
                            <span>{item.label}</span>
                            <span className="icon footer-nav__icon"><ChevronRight/></span>
                        </a>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default FooterMenu;