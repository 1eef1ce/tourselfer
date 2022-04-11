import React, { useState, useEffect } from 'react';
import { Button } from '@components/ui';
import { link } from 'fs';

export default function SeeMore({ data, onClick, pathname, basepath }) {

    let links = {
        next: null,
        pages: [],
        currentPage: 1
    };

    if (typeof data === 'object' && Array.isArray(data.links)) {

        let pageCounter = 1;

        data.links.forEach(item => {

            if (item.label.indexOf('Previous') === -1 && item.label.indexOf('Next') === -1) {
                
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
                        See more
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