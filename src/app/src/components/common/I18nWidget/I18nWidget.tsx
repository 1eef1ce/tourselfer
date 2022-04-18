import Link from 'next/link';
import { FC } from 'react';
import { useRouter } from 'next/router';
import { ChevronDown, World } from '@components/icons';
import { useTranslation } from 'next-i18next';


const I18nWidget = (props) => {
    const {
        locale,
        defaultLocale = 'en',
        asPath: currentPath,
    } = useRouter();

    const locales = [
        {
            iso: 'ru',
            name: 'Русский (RU)',
            shortName: 'RU',
        },
        {
            iso: 'en',
            name: 'English (EN)',
            shortName: 'EN',
        }
    ];

    const { t } = useTranslation("components");
    const type = props.type ?? 'header';
    const currentLocale = locale || defaultLocale;
    const currentLang = locales.filter((val) => val.iso === currentLocale).shift() || locales.shift();
    
    if (type == 'header') {
        return (
            <>
                <button className="dropdown__btn">
                    <span>{currentLang.shortName}</span>
                    <span className="icon dropdown__icon">
                        <ChevronDown />
                    </span>
                </button>
                <div className="dropdown__content">
                    {locales.map((item) => (
                        <div className="dropdown__item" key={item.iso}>
                            <Link href={currentPath} locale={item.iso}>
                                <a className="dropdown__link">
                                    {item.name}
                                </a>
                            </Link>
                        </div>
                    ))}
                </div>
            </>
        );
    } else if (type == 'footer') {
        return (
            <>
                <button className="dropdown__btn">
                    <span className="icon dropdown__icon dropdown__icon--left">
                        <World />
                    </span>
                    <span>{currentLang.shortName}</span>
                    <span className="icon dropdown__icon">
                        <ChevronDown />
                    </span>
                </button>
                <div className="dropdown__content dropdown__content--up">
                    {locales.map((item) => (
                        <div className="dropdown__item" key={item.iso}>
                            <Link href={currentPath} locale={item.iso}>
                                <a className="dropdown__link">
                                    {item.name}
                                </a>
                            </Link>
                        </div>
                    ))}
                </div>
            </>
        );
    }
};

export default I18nWidget;