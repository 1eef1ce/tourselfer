import {ChevronRight} from '@components/icons';
import Link from 'next/link'

export default function Pagination({data, pathname, basepath}) {

    let links = {
        prev: null,
        next: null,
        pages: [],
        currentPage: 1
    };

    if (typeof data === 'object' && Array.isArray(data.links)) {

        let pageCounter = 1;

        data.links.forEach(item => {

            if (item.label.indexOf('Previous') !== -1) {
                links.prev = {
                    active: false,
                    page: 1,
                    label: 1,
                };
            } else if (item.label.indexOf('Next')  !== -1) {

                links.next = {
                    active: false,
                    page: links.currentPage - 1,
                    label: links.currentPage - 1,
                };

            } else {

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
        

        console.log(links);
    }

    if (links.pages.length > 0) {
        return (
            <div className="pagination">
                {!!links.prev && links.currentPage != 1 &&
                    <div className="pagination__item pagination__arrow pagination__arrow--prev">
                        <button className="icon pagination__icon">
                            <ChevronRight />
                        </button>
                    </div>
                }

                <ul className="pagination__list">
                {links.pages.map(item => (
                    <li className="pagination__item active">
                        <Link
                            href={{pathname: pathname, query: {page: item.page}}}
                            as={`${basepath}/?page=${item.page}`}
                        >
                            <a className="pagination__link">{item.page}</a>
                        </Link>
                        
                    </li>
                ))}
                </ul>

                {!!links.next &&
                    <div className="pagination__item pagination__arrow pagination__arrow--next">
                        <button className="icon pagination__icon">
                            <ChevronRight />
                        </button>
                    </div>
                }
            </div>
        );
    } 

    return (
        <></>
    );
}