import {Bus, Car, FilterIcon, Man, Sort} from '@components/icons'

export default function Filter() {
    return (
        <div className="filter">
            <div className="filter__tags">
                <a className="tag" href="javascript:void(0)"><span>Активный</span></a>
                <a className="tag active" href="javascript:void(0)"><span>Красота природы</span></a>
                <a className="tag" href="javascript:void(0)"><span>Архитектура</span></a>
                <a className="tag" href="javascript:void(0)"><span>Религия</span></a>
                <a className="tag" href="javascript:void(0)"><span>Интересно детям</span></a>
            </div>
            <div className="filter__block filter__block--desktop">
                <div className="filter__items">
                    <div className="filter__item">
                        <div className="filter__text">Costs</div>
                        <div className="switch">
                            <a className="switch__option active" href="javascript:void(0)">All</a>
                            <a className="switch__option" href="javascript:void(0)">$</a>
                            <a className="switch__option" href="javascript:void(0)">$$</a>
                            <a className="switch__option" href="javascript:void(0)">$$$</a>
                        </div>
                    </div>
                    <div className="filter__item">
                        <div className="filter__text">Route types</div>
                        <div className="switch">
                            <a className="switch__option active">All</a>
                            <a className="switch__option" href="javascript:void(0)">
                                <span className="icon switch__icon">
                                    <Man/>
                                </span>
                            </a>
                            <a className="switch__option" href="javascript:void(0)">
                                <span className="icon switch__icon">
                                    <Car/>
                                </span>
                            </a>
                            <a className="switch__option" href="javascript:void(0)">
                                <span className="icon switch__icon">
                                    <Bus/>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="filter__item">
                        <div className="filter__text">Super place</div>
                        <div className="switch">
                            <a className="switch__option active" href="javascript:void(0)">All</a>
                            <a className="switch__option" href="javascript:void(0)">Super places</a>
                        </div>
                    </div>
                    <div className="filter__item">
                        <div className="filter__text">Autor</div>
                        <div className="switch">
                            <a className="switch__option active" href="javascript:void(0)">All</a>
                            <a className="switch__option" href="javascript:void(0)">Professional</a>
                        </div>
                    </div>
                </div>
                <div className="filter__right">
                    <div className="filter__select">
                        <div className="filter__text">Rating:</div>
                        <select>
                            <option>Any rating</option>
                            <option>4+</option>
                            <option>3+</option>
                        </select>
                    </div>
                    <div className="filter__select">
                        <div className="filter__text">Duration:</div>
                        <select>
                            <option>Any duration</option>
                            <option>1-2 h</option>
                            <option>2-3 h</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="filter__block filter__block--mobile">
                <a className="filter-btn filter-btn--sort" href="javascript:void(0)">
                    <span>Sorting</span>
                    <span className="filter-btn__icon">
                        <Sort />
                    </span>
                </a>
                <a className="filter-btn" href="javascript:void(0)">
                    <span className="icon filter-btn__icon">
                        <FilterIcon />
                    </span>
                </a>
            </div>
        </div>
    )
}