import {ChevronRight} from '@components/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';

const getPathFromUrl = (url: string): string => {
    return url.split(/[?#]/)[0];
};

const convertBreadcrumb = (
    title: string,
): React.ReactNode => {
    const transformedTitle = getPathFromUrl(title);
    return decodeURI(transformedTitle);
};

export interface Breadcrumb {
    breadcrumb: string;
    href: string;
}

export interface BreadcrumbsProps {
    rootLabel?: string | null;
    rootClass?: string;
    items?: any;
}

const defaultProps: BreadcrumbsProps = {
    rootLabel: 'Main',
    rootClass: 'breadcrumbs',
};

const Breadcrumbs = ({
     rootLabel,
     rootClass,
     items,
 }: BreadcrumbsProps) => {
    const router = useRouter();
    const { t } = useTranslation("components");
    const [breadcrumbs, setBreadcrumbs] = useState<Array<Breadcrumb> | null>(
        null
    );


    useEffect(() => {
        /*if (router) {
            const linkPath = router.asPath.split('/');
            linkPath.shift();

            const pathArray = linkPath.map((path, i) => {
                return {
                    breadcrumb: path.replace(/-/g, ' '),
                    href: '/' + linkPath.slice(0, i + 1).join('/'),
                };
            });

            setBreadcrumbs(pathArray);
        }*/
        const newItems = [];
        items.map((item) => {
            newItems.push({
                breadcrumb: item.label.toString(),
                href:  item.url,
            });
        });

        setBreadcrumbs(newItems);

    }, [items]);

    if (!breadcrumbs) {
        return null;
    }

    return (
        <ul className={rootClass}>
            <li className="breadcrumbs__item">
                <Link href="/">
                    <a className="breadcrumbs__link">
                        <span className="breadcrumbs__icon icon">
                            <ChevronRight />
                        </span>
                        <span>
                            {t('breadcrumbs.main_page')}
                        </span>
                    </a>
                </Link>
            </li>
            {breadcrumbs.length >= 1 &&
            breadcrumbs.map((breadcrumb, i) => {
                if (
                    !breadcrumb ||
                    breadcrumb.breadcrumb.length === 0
                ) {
                    return;
                }
                return (
                    <li
                        key={breadcrumb.href}
                        className={
                            i === breadcrumbs.length - 1
                                ? "breadcrumbs__item active"
                                : "breadcrumbs__item"
                        }
                    >
                        <Link href={breadcrumb.href}>
                            <a className="breadcrumbs__link">
                                <span className="breadcrumbs__icon icon">
                                    <ChevronRight />
                                </span>
                                <span>
                                {convertBreadcrumb(
                                    breadcrumb.breadcrumb,
                                )}
                                </span>
                            </a>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

Breadcrumbs.defaultProps = defaultProps;

export default Breadcrumbs;