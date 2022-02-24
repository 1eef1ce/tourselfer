import {ChevronRight} from '@components/icons';

export default function Pagination() {
    return (
        <div className="pagination">
            <div className="pagination__item pagination__arrow pagination__arrow--prev">
                <button className="icon pagination__icon">
                    <ChevronRight />
                </button>
            </div>
            <ul className="pagination__list">
                <li className="pagination__item active">
                    <button className="pagination__link">1</button>
                </li>
                <li className="pagination__item">
                    <button className="pagination__link">2</button>
                </li>
                <li className="pagination__item">
                    <button className="pagination__link">...</button>
                </li>
                <li className="pagination__item">
                    <button className="pagination__link">15</button>
                </li>
            </ul>
            <div className="pagination__item pagination__arrow pagination__arrow--next">
                <button className="icon pagination__icon">
                    <ChevronRight />
                </button>
            </div>
        </div>
    );
}