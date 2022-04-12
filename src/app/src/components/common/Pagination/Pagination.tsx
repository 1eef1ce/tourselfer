import {ChevronRight} from '@components/icons';
import { useRouter } from 'next/router';
import Link from 'next/link'

export default function Pagination({data, pathname, basepath}) {

    const  links = {
        prev: null,
        next: null,
        pages: [],
        currentPage: 1
    };
    const router = useRouter();
    const { slug } = router.query;

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
        
    }

    if (links.pages.length > 1) {
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
                            /*href={"/routes/berlin/?page=" + item.page}*/
                            href={{
                                pathname: pathname,
                                query: {
                                    slug: slug,
                                    page: item.page
                                }
                            }}
                            shallow={true}
                            scroll={true}
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