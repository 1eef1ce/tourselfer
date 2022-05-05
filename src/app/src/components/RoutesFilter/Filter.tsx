import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { Close } from '@components/icons';
import { Button } from '@components/ui';
import FilterClass from './FilterClass';
import {Api} from "@lib/api"
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface FilterData {
    cost?: any
    type?: any,
    superPlace?: any,
    profAuthor?: any,
    tag?: any,
    duration?: any,
    price?: any,
    conveniences?: any,
    language?: any
}

const Filter = props => {

    const router = useRouter();
    const { t } = useTranslation("components");

    const BaseApi = new Api({locale: props.locale});
    const FilterApi = new FilterClass({router, t});
    const options = FilterApi.getParams();

    const needUpdate = useRef(false);
    const [data, setData] = useState<FilterData>(FilterApi.getFromURL());
    const [tags, setTags] = useState([]);
    const [showMoreFilters, setShowMoreFilters] = useState(false);

    const setOption = (key, value) => {
        setData(prevState => ({
            ...prevState,
            [key]: value
        }));

        needUpdate.current = true;
    };

    const setMultipleOption = (key, value) => {
        let valueArray = data[key] ?? [],
            index = valueArray.indexOf(value);

        if (index !== -1) {
            valueArray.splice(index, 1);
        } else {
            valueArray.push(value);
        }

        setData(prevState => ({
            ...prevState,
            [key]: valueArray
        }));

        needUpdate.current = true;

    };

    useEffect(() => {
        const queryParams = {};

        BaseApi.getRouteTagsList(queryParams)
            .then(response => {
                setTags(response?.data ?? []);
            });
    }, []);

    useEffect(() => {
        if (needUpdate.current == true) {

            needUpdate.current = false;
            if (props?.onChanged && typeof props?.onChanged === 'function') {
                
                props?.onChanged.call(this, data);
            }

            return;
        }
    }, [data]);

    useEffect(() => {
        const moreFilters = [data?.price, data?.conveniences, data?.language].filter(item => {
            if (Array.isArray(item) && item.length > 0) {
                return true;
            } else if (typeof item !== 'undefined') {
                return true;
            }
            return false;
        }).length > 0;

        setShowMoreFilters(moreFilters);

    }, [data]);

    return (
        <div className="filter">
            <div className="filter__block">
                <div className="filter__items">
                    <div className="filter__item">
                        <div className="filter__text">{t('filter.cost')}</div>
                        <div className="switch">
                            {options.cost.map(option => (
                                <a key={option.value} href="javascript:void(0)" onClick={(e) => setOption('cost', option.value)} className={'switch__option' + (data?.cost == option.value ? ' active' : '')}>{option.label}</a>
                            ))}
                        </div>
                    </div>
                    <div className="filter__item">
                        <div className="filter__text">{t('filter.type')}</div>
                        <div className="switch">
                            {options.type.map(option => (
                                <a key={option.value} onClick={(e) => setOption('type', option.value)} className={"switch__option " + option?.className + (data?.type == option.value ? ' active' : '')} href="javascript:void(0)">
                                    {option.label}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="filter__item">
                        <div className="filter__text">{t('filter.superPlace')}</div>
                        <div className="switch">
                            {options.superPlace.map((option, index) => (
                                <a key={index} className={'switch__option' + (data.superPlace == option.value ? ' active' : '')} onClick={(e) => setOption('superPlace', option.value)} href="javascript:void(0)">{option.label}</a>
                            ))}
                        </div>
                    </div>
                    <div className="filter__item">
                        <div className="filter__text">{t('filter.author')}</div>
                        <div className="switch">
                            {options.profAuthor.map((option, index) => (
                                <a key={index} className={'switch__option' + (data?.profAuthor == option.value ? ' active' : '')} onClick={(e) => setOption('profAuthor', option.value)} href="javascript:void(0)">{option.label}</a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="filter-tags">
                <div className="filter-tags__row">
                    <div className="filter-tags__title">{t('filter.tags')}</div>
                    <div className="filter-tags__items">
                        
                        {tags && tags.length > 0 && tags.map(tag => (
                            <a key={tag.code} className={"tag" + (Array.isArray(data?.tag) && data?.tag.indexOf(tag.code) !== -1 ? ' active' : '')} onClick={(e) => setMultipleOption('tag', tag.code)} href="javascript:void(0)">
                                <span>{tag.title}</span>
                                {(Array.isArray(data?.tag) && data?.tag.indexOf(tag.code) !== -1) &&
                                    <span className="tag__icon icon"><Close /></span>
                                }
                            </a>
                        ))

                        ||

                        <Skeleton 
                            containerClassName="skeleton-text"
                        />

                        }
                        
                    </div>
                </div>
                <div className="filter-tags__row">
                    <div className="filter-tags__title">{t('filter.duration')}</div>
                    <div className="filter-tags__items">

                        {options.duration.map(option => (
                            <a key={option.valueMin + ':' + option.valueMax} className={"tag" + (Array.isArray(data?.duration) && data?.duration.indexOf(option.valueMin + ':' + option.valueMax) !== -1 ? ' active' : '')} onClick={(e) => setMultipleOption('duration', option.valueMin + ':' + option.valueMax)} href="javascript:void(0)">
                                <span>
                                    {option.label}
                                </span>
                                {Array.isArray(data?.duration) && data?.duration.indexOf(option.valueMin + ':' + option.valueMax) !== -1 &&
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
                                <a key={option.valueMin + ':' + option.valueMax} className={"tag" + (Array.isArray(data?.price) && data?.price.indexOf(option.valueMin + ':' + option.valueMax) !== -1 ? ' active' : '')} onClick={(e) => setMultipleOption('price', option.valueMin + ':' + option.valueMax)} href="javascript:void(0)">
                                    <span>
                                        {option.label}
                                    </span>
                                    {Array.isArray(data?.price) && data?.price.indexOf(option.valueMin + ':' + option.valueMax) !== -1 &&
                                        <span className="tag__icon icon"><Close /></span>
                                    }
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="filter-tags__row">
                        <div className="filter-tags__title">{t('filter.conveniences')}</div>
                        <div className="filter-tags__items">
                            {options.conveniences.map(option => (
                                <a key={option.value} className={"tag" + (Array.isArray(data?.conveniences) && data?.conveniences.indexOf(option.value) !== -1 ? ' active' : '')} onClick={(e) => setMultipleOption('conveniences', option.value)} href="javascript:void(0)">
                                    <span>
                                        {option.label}
                                    </span>
                                    {Array.isArray(data?.conveniences) && data?.conveniences.indexOf(option.value) !== -1 &&
                                        <span className="tag__icon icon"><Close /></span>
                                    }
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="filter-tags__row">
                        <div className="filter-tags__title">{t('filter.route_language')}</div>
                        <div className="filter-tags__items">
                            {options.language.map(option => (
                                <a key={option.value} className={"tag" + (Array.isArray(data?.language) && data?.language.indexOf(option.value) !== -1 ? ' active' : '')} onClick={(e) => setMultipleOption('language', option.value)} href="javascript:void(0)">
                                    <span>
                                        {option.label}
                                    </span>
                                    {Array.isArray(data?.language) && data?.language.indexOf(option.value) !== -1 &&
                                        <span className="tag__icon icon"><Close /></span>
                                    }
                                </a>
                            ))}
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
        </div>
    );

};

export default Filter;