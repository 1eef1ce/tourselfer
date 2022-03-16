import Link from 'next/link';
import { FC } from 'react';
import { useRouter } from 'next/router';
import {ChevronDown} from '@components/icons';
import { useTranslation } from 'next-i18next';

interface LOCALE_DATA {
    name: string,
    shortName: string
}

const LOCALES_MAP: Record<string, LOCALE_DATA> = {
    'ru': {
        name: 'Русский (RU)',
        shortName: 'RU',
    },
    'en': {
        name: 'English (EN)',
        shortName: 'EN',
    }
};

const I18nWidget: FC = () => {
    const {
        locale,
        locales,
        defaultLocale = 'en',
        asPath: currentPath,
    } = useRouter();
    const {t} = useTranslation("components");

    const options = locales?.filter((val) => val !== locale);
    const currentLocale = locale || defaultLocale;

    return (
        <>
            <button className="dropdown__btn">
                        <span>{LOCALES_MAP[currentLocale].shortName}</span>
                        <span className="icon dropdown__icon">
                            <ChevronDown/>
                        </span>
                    </button>
                    <div className="dropdown__content">
                    {options.map((locale) => (
                        <div className="dropdown__item" key={locale}>
                            <Link href={currentPath} locale={locale}>
                                <a className="dropdown__link">
                                {LOCALES_MAP[locale].name}
                                </a>
                            </Link>
                        </div>
                    ))}
            </div>
        </>
    );
};

export default I18nWidget;