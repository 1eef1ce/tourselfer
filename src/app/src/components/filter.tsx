import React, { useState, useEffect } from 'react';
import {Bus, Car, Close, FilterIcon, Man} from '@components/icons';
import {Button, SelectField} from '@components/ui';
import Link from 'next/link'

const Filter = ({initialData, updateData}) => {

    //updateData({hello: "world"});
console.log(initialData);
    const [data, setData] = useState(initialData);
    const options = {
        costs: [
            {
                label: 'All',
                value: undefined
            },
            {
                label: 'Free',
                value: 0
            },
            {
                label: '$',
                value: 1
            },
            {
                label: '$$',
                value: 2
            },
            {
                label: '$$$',
                value: 3
            },
            {
                label: '$$$$',
                value: 4
            },
        ]
    };

    useEffect(() => {
        updateData(data);
    }, data);

    const setOption = (key, value) => {
        let bufData = Object.assign(data, {});

        bufData[key] = value;

        console.log(bufData);

        setData(bufData);
        updateData(bufData);
    };

    return (
        <div className="filter">
            <div className="filter__block">
                <div className="filter__items">
                    <div className="filter__item">
                        <div className="filter__text">Route costs</div>
                        <div className="switch">
                            {options.costs.map(option => (
                                <a onClick={(e) => setOption('costs', option.value)} className={'switch__option' + (data?.costs === option.value ? ' active' : '')}>{option.label}</a>
                            ))}
                        </div>
                    </div>
                    <div className="filter__item">
                        <div className="filter__text">Way to travel</div>
                        <div className="switch">
                            <a className="switch__option">All</a>
                            <a className="switch__option active switch__option--icon" href="javascript:void(0)">
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
            <div className="more">
                <Button
                    squared={true}
                >
                    More filters
                </Button>
            </div>
            <div className="filter__actions">
                <div className="filter__select filter__select--simple">
                    <SelectField
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