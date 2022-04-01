import Link from 'next/link';
import cn from 'classnames';
import { useTranslation } from 'next-i18next';

const MobileMenu = (props) =>  {
    const {t} = useTranslation("menu");
    let visibility;
    if (props.menuVisibility) {
        visibility = 'show';
    }

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
        <div className={cn("mobile-menu", visibility)} onMouseDown={props.handleMouseDown}>
            {items && items.length>0 && items.map(item => (
                <div key={item.href} className="mobile-menu__item">
                    <Link href={item.href}>
                        <a className="mobile-menu__link">{item.label}</a>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default MobileMenu;