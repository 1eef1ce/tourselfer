import React from 'react';
import { Button } from '@components/ui';
import { useTranslation } from 'next-i18next';

export default function SeeMore({ data, onClick, pathname }) {

    const links = {
        next: null,
        pages: [],
        currentPage: 1
    };
    const { t } = useTranslation("components");

    if (typeof data === 'object' && !!data?.links && Array.isArray(data?.links)) {

        let pageCounter = 1;

        data.links.forEach(item => {

            if (item?.label.indexOf('Previous') === -1 && item?.label.indexOf('Next') === -1) {
                
                if (item.active === true) {
                    links.currentPage = pageCounter;
                }

                links.pages.push({
                    active: item.active ?? false,
                    page: pageCounter
                });

                pageCounter++;
            }

        });

    }

    if (typeof links.pages[links.currentPage] !== 'undefined') {
        return (
            <>
                <div className="more">
                    <Button
                        variant='outlined'
                        size='medium'
                        onClick={(e) => {onClick(links.currentPage + 1)}}
                    >
                        {t('pagination.show_more')}
                    </Button>
                </div>
            </>
        );
    } else {
        return (
            <></>
        );
    }
}