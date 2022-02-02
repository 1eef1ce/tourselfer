import Link from 'next/link'
import { FC } from 'react'
import { useRouter } from 'next/router'

interface LOCALE_DATA {
    name: string,
    shortName: string
}

const LOCALES_MAP: Record<string, LOCALE_DATA> = {
    ru: {
        name: 'Russian (RU)',
        shortName: 'RU',
    },
    'en-US': {
        name: 'English (EN)',
        shortName: 'EN',
    },
    'zh-CN': {
        name: 'Chinese (CN)',
        shortName: 'CN',
    },
}

const I18nWidget: FC = () => {
    const {
        locale,
        locales,
        defaultLocale = 'en-US',
        asPath: currentPath,
    } = useRouter()

    const options = locales?.filter((val) => val !== locale)
    const currentLocale = locale || defaultLocale

    return (
        <>
            {options.map((locale) => (
                <div className="dropdown__item" key={locale}>
                    <Link href={currentPath} locale={locale}>
                        <a className="dropdown__link">
                        {LOCALES_MAP[locale].name}
                        </a>
                    </Link>
                </div>
            ))}
        </>
    )
}

export default I18nWidget
