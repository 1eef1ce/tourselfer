import {ChevronRight} from '@components/icons'
import {Button} from '@components/ui'

export default function Pagination() {
    return (
        <div className="pagination">
            <div className="pagination__item pagination__arrow pagination__arrow--prev">
                <Button className="icon pagination__icon">
                    <ChevronRight />
                </Button>
            </div>
            <ul className="pagination__list">
                <li className="pagination__item active">
                    <Button className="pagination__link">1</Button>
                </li>
                <li className="pagination__item">
                    <Button className="pagination__link">2</Button>
                </li>
                <li className="pagination__item">
                    <Button className="pagination__link">...</Button>
                </li>
                <li className="pagination__item">
                    <Button className="pagination__link">15</Button>
                </li>
            </ul>
            <div className="pagination__item pagination__arrow pagination__arrow--next">
                <Button className="icon pagination__icon">
                    <ChevronRight />
                </Button>
            </div>
        </div>
    )
}