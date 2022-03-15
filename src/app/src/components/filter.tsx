import React from 'react';
import {Bus, Car, Close, FilterIcon, Man, Sort} from '@components/icons';
import {Button, Input} from '@components/ui';

const Filter = () => {
    return (
        <div className="filter">
            <div className="filter__block">
                <div className="filter__items">
                    <div className="filter__item">
                        <div className="filter__text">Route costs</div>
                        <div className="switch">
                            <a className="switch__option active" href="javascript:void(0)">All</a>
                            <a className="switch__option" href="javascript:void(0)">Free</a>
                            <a className="switch__option" href="javascript:void(0)">$</a>
                            <a className="switch__option" href="javascript:void(0)">$$</a>
                            <a className="switch__option" href="javascript:void(0)">$$$</a>
                        </div>
                    </div>
                    <div className="filter__item">
                        <div className="filter__text">Way to travel</div>
                        <div className="switch">
                            <a className="switch__option active">All</a>
                            <a className="switch__option switch__option--icon" href="javascript:void(0)">
                                <span className="icon switch__icon">
                                    <Man/>
                                </span>
                            </a>
                            <a className="switch__option switch__option--icon" href="javascript:void(0)">
                                <span className="icon switch__icon">
                                    <Car/>
                                </span>
                            </a>
                            <a className="switch__option switch__option--icon" href="javascript:void(0)">
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
            </div>
            <div className="filter-tags">
                <div className="filter-tags__row">
                    <div className="filter-tags__title">Route type</div>
                    <div className="filter-tags__items">
                        <a className="tag" href="javascript:void(0)"><span>Active</span></a>
                        <a className="tag active" href="javascript:void(0)">
                            <span>Beauty of nature</span>
                            <span className="tag__icon icon"><Close/></span>
                        </a>
                        <a className="tag" href="javascript:void(0)"><span>Religion</span></a>
                        <a className="tag" href="javascript:void(0)"><span>Local color</span></a>
                        <a className="tag" href="javascript:void(0)"><span>Entertainment</span></a>
                    </div>
                </div>
                <div className="filter-tags__row">
                    <div className="filter-tags__title">Route duration</div>
                    <div className="filter-tags__items">
                        <a className="tag" href="javascript:void(0)"><span>Less than 3 hours</span></a>
                        <a className="tag" href="javascript:void(0)"><span>All day</span></a>
                        <a className="tag" href="javascript:void(0)"><span>1–2 days</span></a>
                        <a className="tag" href="javascript:void(0)"><span>2 days or more</span></a>
                    </div>
                </div>
            </div>
            <div className="filter__more">
                <Button
                    className="btn btn--more"
                >
                    More filters
                </Button>
            </div>
            <div className="filter__actions">
                <div className="filter__select">
                    <Input
                        isSelect
                        classPrefix="select-filter"
                        id="filter"
                        name="filter"
                        options = {
                            [
                                {value: 'Route rating', label: 'Route rating'},
                                {value: 'Author rating', label: 'Author rating'},
                                {value: 'Cost', label: 'Cost'},
                                {value: 'Duration', label: 'Duration'}
                            ]
                        }
                        defaultOption = {
                            [
                                {value: 'Route rating', label: 'Route rating'}
                            ]
                        }
                    />
                </div>
                <a className="filter-btn" href="javascript:void(0)">
                    <span className="icon filter-btn__icon">
                        <FilterIcon/>
                    </span>
                    <span>Filter</span>
                </a>
            </div>
        </div>
    );
};

export default Filter;