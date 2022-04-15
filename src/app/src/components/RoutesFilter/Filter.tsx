import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { Bus, Car, Close, FilterIcon, Man } from '@components/icons';
import { Button, SelectField } from '@components/ui';
import FilterClass from './FilterClass';
import Link from 'next/link';
import {Api} from "@lib/api"

const Filter = props => {

    const router = useRouter();
    const { t } = useTranslation("components");

    const FilterApi = new FilterClass({router, t});
    const options = FilterApi.getParams();

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
    const [showMoreFilters, setShowMoreFilters] = useState(false);

    useEffect(() => {
        getTagsList();
    }, []);

    useEffect(() => {
        const moreFilters = [props.data?.price].filter(item => {
            if (Array.isArray(item) && item.length > 0) {
                return true;
            } else if (typeof item !== 'undefined') {
                return true;
            }
            return false;
        }).length > 0;

        setShowMoreFilters(moreFilters);

    }, [props.data]);

    return (
        <div className="filter">
            <div className="filter__block">
                <div className="filter__items">
                    <div className="filter__item">
                        <div className="filter__text">{t('filter.cost')}</div>
                        <div className="switch">
                            {options.cost.map(option => (
                                <a key={option.value} href="javascript:void(0)" onClick={(e) => setOption('cost', option.value)} className={'switch__option' + (props.data?.cost == option.value ? ' active' : '')}>{option.label}</a>
                            ))}
                        </div>
                    </div>
                    <div className="filter__item">
                        <div className="filter__text">{t('filter.type')}</div>
                        <div className="switch">
                            {options.type.map(option => (
                                <a key={option.value} onClick={(e) => setOption('type', option.value)} className={"switch__option " + option?.className + (props.data?.type == option.value ? ' active' : '')} href="javascript:void(0)">
                                    {option.label}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="filter__item">
                        <div className="filter__text">{t('filter.superPlace')}</div>
                        <div className="switch">
                            {options.superPlace.map((option, index) => (
                                <a key={index} className={'switch__option' + (props.data?.superPlace == option.value ? ' active' : '')} onClick={(e) => setOption('superPlace', option.value)} href="javascript:void(0)">{option.label}</a>
                            ))}
                        </div>
                    </div>
                    <div className="filter__item">
                        <div className="filter__text">{t('filter.author')}</div>
                        <div className="switch">
                            {options.profAuthor.map((option, index) => (
                                <a key={index} className={'switch__option' + (props.data?.profAuthor == option.value ? ' active' : '')} onClick={(e) => setOption('profAuthor', option.value)} href="javascript:void(0)">{option.label}</a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="filter-tags">
                <div className="filter-tags__row">
                    <div className="filter-tags__title">{t('filter.tags')}</div>
                    <div className="filter-tags__items">
                        {tags.map(tag => (
                            <a key={tag.code} className={"tag" + (Array.isArray(props.data?.tag) && props.data?.tag.indexOf(tag.code) !== -1 ? ' active' : '')} onClick={(e) => setMultipleOption('tag', tag.code)} href="javascript:void(0)">
                                <span>{tag.title}</span>
                                {(Array.isArray(props.data?.tag) && props.data?.tag.indexOf(tag.code) !== -1) &&
                                    <span className="tag__icon icon"><Close /></span>
                                }
                            </a>
                        ))}
                        
                    </div>
                </div>
                <div className="filter-tags__row">
                    <div className="filter-tags__title">{t('filter.duration')}</div>
                    <div className="filter-tags__items">

                        {options.duration.map(option => (
                            <a key={option.valueMin + ':' + option.valueMax} className={"tag" + (Array.isArray(props.data?.duration) && props.data?.duration.indexOf(option.valueMin + ':' + option.valueMax) !== -1 ? ' active' : '')} onClick={(e) => setMultipleOption('duration', option.valueMin + ':' + option.valueMax)} href="javascript:void(0)">
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

                {showMoreFilters &&
                <>
                    <div className="filter-tags__row">
                        <div className="filter-tags__title">{t('filter.price')}</div>
                        <div className="filter-tags__items">
                            {options.price.map(option => (
                                <a key={option.valueMin + ':' + option.valueMax} className={"tag" + (Array.isArray(props.data?.price) && props.data?.price.indexOf(option.valueMin + ':' + option.valueMax) !== -1 ? ' active' : '')} onClick={(e) => setMultipleOption('price', option.valueMin + ':' + option.valueMax)} href="javascript:void(0)">
                                    <span>
                                        {option.label}
                                    </span>
                                    {Array.isArray(props.data?.price) && props.data?.price.indexOf(option.valueMin + ':' + option.valueMax) !== -1 &&
                                        <span className="tag__icon icon"><Close /></span>
                                    }
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="filter-tags__row">
                        <div className="filter-tags__title">{t('filter.conveniences')}</div>
                        <div className="filter-tags__items">

                        </div>
                    </div>

                    <div className="filter-tags__row">
                        <div className="filter-tags__title">{t('filter.route_language')}</div>
                        <div className="filter-tags__items">

                        </div>
                    </div>
                </>
                }
            </div>

            <div className="more">
                    <Button
                        squared={true}
                        onClick={(e) => setShowMoreFilters(!showMoreFilters)}
                    >
                        {!showMoreFilters ? <>{t("filter.button_more_filters")}</> : <>{t('filter.button_less_filters')}</>}
                    </Button>
                </div>


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