import {ChevronRight} from '@components/icons';
import {Button} from '@components/ui';

export default function Pagination() {
    return (
        <div className="pagination">
            <div className="pagination__item pagination__arrow pagination__arrow--prev">
                <div className="icon pagination__icon">
                    <ChevronRight />
                </div>
            </div>
            <ul className="pagination__list">
                <li className="pagination__item active">
                    <div className="pagination__link">1</div>
                </li>
                <li className="pagination__item">
                    <div className="pagination__link">2</div>
                </li>
                <li className="pagination__item">
                    <div className="pagination__link">...</div>
                </li>
                <li className="pagination__item">
                    <div className="pagination__link">15</div>
                </li>
            </ul>
            <div className="pagination__item pagination__arrow pagination__arrow--next">
                <div className="icon pagination__icon">
                    <ChevronRight />
                </div>
            </div>
        </div>
    );
}