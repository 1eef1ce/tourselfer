import React, { useState, useEffect } from 'react';
import { Bus, Car, Close, FilterIcon, Man } from '@components/icons';
import { Button, SelectField } from '@components/ui';
import Link from 'next/link';
import {Api} from "@lib/api"

const Filter = props => {

    const options = {
        cost: [
            { label: 'All', value: undefined },
            { label: 'Free', value: 0 },
            { label: '$', value: 1 },
            { label: '$$', value: 2 },
            { label: '$$$', value: 3 },
            { label: '$$$$', value: 4 },
        ],
        type: [
            { label: 'All', value: undefined },
            { label: <span className="icon switch__icon"><Man /></span>, value: 'foot', className: 'switch__option--icon' },
            { label: <span className="icon switch__icon"><Car /></span>, value: 'car', className: 'switch__option--icon' },
            { label: <span className="icon switch__icon"><Bus /></span>, value: 'bus', className: 'switch__option--icon' },
        ],
        superPlace: [
            { label: 'All', value: undefined },
            { label: 'Super places', value: true },
        ],
        profAuthor: [
            { label: 'All', value: undefined },
            { label: 'Professional', value: true },
        ],
        duration: [
            { label: 'Less than 3 hours', valueMin: 30, valueMax: 180 },
            { label: 'All day', valueMin: 30, valueMax: 1440 },
            { label: '1–2 days', valueMin: 1440, valueMax: 2880 },
            { label: '2 days or more', valueMin: 2880, valueMax: 99999 },
        ]
    };


    const setOption = (key, value) => {
        props.updateData(prevState => ({
            ...prevState,
            [key]: value
        }));
    };

    const setMultipleOption = (key, value) => {
        let valueArray = props.data[key] ?? [],
            index = valueArray.indexOf(value);

        if (index !== -1) {
            valueArray.splice(index, 1);
        } else {
            valueArray.push(value);
        }

        props.updateData(prevState => ({
            ...prevState,
            [key]: valueArray
        }));

    };

    const getTagsList = () => {
        let api = new Api({locale: props.locale});
        let queryParams = {};

        api.getRouteTagsList(queryParams)
            .then(response => {
                setTags(response?.data ?? []);
            });
    }

    const [tags, setTags] = useState([]);

    useEffect(() => {
        getTagsList();
    }, []);


    return (
        <div className="filter">
            <div className="filter__block">
                <div className="filter__items">
                    <div className="filter__item">
                        <div className="filter__text">Route costs</div>
                        <div className="switch">
                            {options.cost.map(option => (
                                <a href="javascript:void(0)" onClick={(e) => setOption('cost', option.value)} className={'switch__option' + (props.data?.cost == option.value ? ' active' : '')}>{option.label}</a>
                            ))}
                        </div>
                    </div>
                    <div className="filter__item">
                        <div className="filter__text">Way to travel</div>
                        <div className="switch">
                            {options.type.map(option => (
                                <a onClick={(e) => setOption('type', option.value)} className={"switch__option " + option?.className + (props.data?.type == option.value ? ' active' : '')} href="javascript:void(0)">
                                    {option.label}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="filter__item">
                        <div className="filter__text">Super place</div>
                        <div className="switch">
                            {options.superPlace.map(option => (
                                <a className={'switch__option' + (props.data?.superPlace == option.value ? ' active' : '')} onClick={(e) => setOption('superPlace', option.value)} href="javascript:void(0)">{option.label}</a>
                            ))}
                        </div>
                    </div>
                    <div className="filter__item">
                        <div className="filter__text">Autor</div>
                        <div className="switch">
                            {options.profAuthor.map(option => (
                                <a className={'switch__option' + (props.data?.profAuthor == option.value ? ' active' : '')} onClick={(e) => setOption('profAuthor', option.value)} href="javascript:void(0)">{option.label}</a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="filter-tags">
                <div className="filter-tags__row">
                    <div className="filter-tags__title">Route type</div>
                    <div className="filter-tags__items">
                        {tags.map(tag => (
                            <a className={"tag" + (Array.isArray(props.data?.tag) && props.data?.tag.indexOf(tag.code) !== -1 ? ' active' : '')} onClick={(e) => setMultipleOption('tag', tag.code)} href="javascript:void(0)">
                                <span>{tag.title}</span>
                                {(Array.isArray(props.data?.tag) && props.data?.tag.indexOf(tag.code) !== -1) &&
                                    <span className="tag__icon icon"><Close /></span>
                                }
                            </a>
                        ))}
                        
                    </div>
                </div>
                <div className="filter-tags__row">
                    <div className="filter-tags__title">Route duration</div>
                    <div className="filter-tags__items">

                        {options.duration.map(option => (
                            <a className={"tag" + (Array.isArray(props.data?.duration) && props.data?.duration.indexOf(option.valueMin + ':' + option.valueMax) !== -1 ? ' active' : '')} onClick={(e) => setMultipleOption('duration', option.valueMin + ':' + option.valueMax)} href="javascript:void(0)">
                                <span>
                                    {option.label}
                                </span>
                                {Array.isArray(props.data?.duration) && props.data?.duration.indexOf(option.valueMin + ':' + option.valueMax) !== -1 &&
                                    <span className="tag__icon icon"><Close /></span>
                                }
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            {/*<div className="more">
                <Button
                    squared={true}
                >
                    More filters
                </Button>
                        </div>*/}
            <div className="filter__actions">
                <div className="filter__select filter__select--simple">
                    <SelectField
                        classPrefix="select-filter"
                        id="filter"
                        name="filter"
                        options={
                            [
                                { value: 'Route rating', label: 'Route rating' },
                                { value: 'Author rating', label: 'Author rating' },
                                { value: 'Cost', label: 'Cost' },
                                { value: 'Duration', label: 'Duration' }
                            ]
                        }
                        defaultOption={
                            [
                                { value: 'Route rating', label: 'Route rating' }
                            ]
                        }
                    />
                </div>
                <a className="filter-btn" href="javascript:void(0)">
                    <span className="icon filter-btn__icon">
                        <FilterIcon />
                    </span>
                    <span>Filter</span>
                </a>
            </div>
        </div>
    );

};

export default Filter;