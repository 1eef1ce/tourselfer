import React from 'react';
import {Bus, Car, FilterIcon, Man, Sort} from '@components/icons';
import {SelectField} from '@components/ui';

const Filter = () => {
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
                        <SelectField
                            classPrefix={"select-filter"}
                            isFilter={true}
                            id="s_rating"
                            label="Rating:"
                            options = {
                                [
                                    {value: 'Any', label: 'Any rating'},
                                    {value: '4+', label: '4+'},
                                    {value: '3+', label: '3+'}
                                ]
                            }
                            defaultOption = {
                                [
                                    {value: 'Any', label: 'Any rating'}
                                ]
                            }
                        />
                    </div>
                    <div className="filter__select">
                        <SelectField
                            classPrefix={"select-filter"}
                            isFilter={true}
                            id="s_duration"
                            label="Duration:"
                            options = {
                                [
                                    {value: 'Any', label: 'Any duration'},
                                    {value: '1-2', label: '1-2 h'},
                                    {value: '2-3', label: '2-3 h'}
                                ]
                            }
                            defaultOption = {
                                [
                                    {value: 'Any', label: 'Any duration'}
                                ]
                            }
                        />
                    </div>
                </div>
            </div>
            <div className="filter__block filter__block--mobile">
                <a className="filter-btn filter-btn--sort" href="javascript:void(0)">
                    <span>Sorting</span>
                    <span className="filter-btn__icon">
                        <Sort/>
                    </span>
                </a>
                <a className="filter-btn" href="javascript:void(0)">
                    <span className="icon filter-btn__icon">
                        <FilterIcon/>
                    </span>
                </a>
            </div>
        </div>
    );
};

export default Filter;