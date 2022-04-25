import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import {ChevronRight} from '@components/icons';
import { useRouter } from 'next/router';
import Link from 'next/link'

export default function Pagination({data, onClick}) {

    const  links = {
        prev: null,
        next: null,
        pages: [],
        currentPage: 1
    };
    const {pathname, query} = useRouter();

    if (typeof data === 'object' && !!data?.links && Array.isArray(data.links)) {

        let pageCounter = 1;

        data.links.forEach(item => {

            if (item.label.indexOf('Previous') !== -1) {
                links.prev = {
                    active: false,
                    page: links.currentPage - 1,
                    label: links.currentPage - 1,
                };
            } else if (item.label.indexOf('Next')  !== -1) {

                links.next = {
                    active: false,
                    page: links.currentPage + 1,
                    label: links.currentPage + 1,
                };

            } else {

                if (item.active === true) {
                    links.currentPage = pageCounter;

                    links.prev.page = links.currentPage - 1;
                    links.prev.label = links.currentPage - 1;
                }

                links.pages.push({
                    active: item.active ?? false,
                    page: pageCounter
                });
                pageCounter++;

                
            }

        });
        
        if (links.currentPage == 1) {
            links.prev = null;
        }

        if (links.pages.length > 1 && links.currentPage == links.pages[links.pages.length - 1].page) {
            links.next = null;
        }
    }

    if (links.pages.length > 1) {
        return (
            <div className="pagination">
                {links.prev != null &&
                    <div className="pagination__item pagination__arrow pagination__arrow--prev">
                        <Link
                            href={{
                                pathname: pathname,
                                query: {
                                    ...query,
                                    page: links.prev?.page
                                }
                            }}
                            
                            shallow={true}
                            scroll={false}
                        >
                        <a className="icon pagination__icon" onClick={(e) => onClick(links.prev?.page)}>
                            <ChevronRight />
                        </a>
                        </Link>
                    </div>
                }

                <ul className="pagination__list">
                {links.pages.map(item => (
                    <li className="pagination__item active">
                        <Link
                            href={{
                                pathname: pathname,
                                query: {
                                    ...query,
                                    page: item.page
                                }
                            }}
                            
                            shallow={true}
                            scroll={false}
                        >
                            <a onClick={(e) => onClick(item.page)} className="pagination__link">{item.page}</a>
                        </Link>
                        
                    </li>
                ))}
                </ul>

                {links.next != null &&
                    <div className="pagination__item pagination__arrow pagination__arrow--next">
                        <Link
                            href={{
                                pathname: pathname,
                                query: {
                                    ...query,
                                    page: links.next?.page
                                }
                            }}
                            
                            shallow={true}
                            scroll={false}
                        >
                        <a className="icon pagination__icon" onClick={(e) => onClick(links.next?.page)}>
                            <ChevronRight />
                        </a>
                        </Link>
                    </div>
                }
            </div>
        );
    } 

    return (
        <></>
    );
}