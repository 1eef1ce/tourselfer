import { useRouter } from 'next/router';
import { Bus, Car, Close, FilterIcon, Man } from '@components/icons';

const params = {
    cost: [
        { label: 'filter.cost_all', value: undefined },
        { label: 'filter.cost_free', value: 0, queryValue: 'free' },
        { label: 'filter.cost_1', value: 1, queryValue: 'cost1' },
        { label: 'filter.cost_2', value: 2, queryValue: 'cost2' },
        { label: 'filter.cost_3', value: 3, queryValue: 'cost3' },
        { label: 'filter.cost_4', value: 4, queryValue: 'cost4' },
    ],
    type: [
        { label: 'filter.type_all', value: undefined },
        { label: <span className="icon switch__icon"><Man /></span>, value: 'foot', className: 'switch__option--icon', queryValue: 'walk' },
        { label: <span className="icon switch__icon"><Car /></span>, value: 'car', className: 'switch__option--icon', queryValue: 'car' },
        { label: <span className="icon switch__icon"><Bus /></span>, value: 'bus', className: 'switch__option--icon', queryValue: 'bus' },
    ],
    superPlace: [
        { label: 'filter.superPlace_all', value: undefined },
        { label: 'filter.type_all_has', value: true, queryValue: 'superplace' },
    ],
    profAuthor: [
        { label: 'filter.profAuthor_all', value: undefined },
        { label: 'filter.profAuthor_has', value: true, queryValue: 'profauthor' },
    ],
    duration: [
        { label: 'filter.duration_less_3_hour', valueMin: 30, valueMax: 180, getValue: 'less-3-hour' },
        { label: 'filter.duration_all_day', valueMin: 30, valueMax: 1440, getValue: 'all-day' },
        { label: 'filter.duration_1-2_days', valueMin: 1440, valueMax: 2880, getValue: '1-2-days' },
        { label: 'filter.duration_2_days_more', valueMin: 2880, valueMax: 99999, getValue: 'more-2-days' },
    ],
    price: [
        { label: 'filter.price_free', valueMin: 0, valueMax: 0, getValue: 'free' },
        { label: 'filter.price_less_30', valueMin: 1, valueMax: 30, getValue: 'less-30' },
        { label: 'filter.price_30-50', valueMin: 30, valueMax: 50, getValue: '30-50' },
        { label: 'filter.price_50_more', valueMin: 50, valueMax: 999, getValue: 'more-50' },
    ],
    conveniences: [
        { label: 'filter.conveniences_wifi', value: 'wifi', getValue: 'wifi' },
        { label: 'filter.conveniences_restroom', value: 'restroom', getValue: 'restroom' },
        { label: 'filter.conveniences_cafe', value: 'cafe', getValue: 'cafe' },
    ],
    language: [
        { label: 'filter.route_language_en', value: 'en', getValue: 'en' },
        { label: 'filter.route_language_ru', value: 'ru', getValue: 'ru' },
    ]
};

export default class FilterClass {
    router: any;
    translate: any;

    constructor(props) {
        this.router = props?.router ?? undefined;
        this.translate = props?.t ?? undefined;
    }

    getParams() {

        const result = Object.assign(params, {});
        if (!!this.router && !!this.translate) {

            Object.entries(result).map(([key, values]) => {

                if (Array.isArray(values)) {
                    values.forEach((option, index) => {
                        if (!!option.label && typeof option.label === 'string') {
                            result[key][index]['label'] = this.translate(option.label);
                        }
                    });
                }
            });
        }

        return result;
    }

    getFromURL() {

        const filter = {};
        const { locale, query } = this.router;

        let queryParams = [];
        if (!!query.slug && Array.isArray(query.slug) && query.slug.length > 1) {

            if (query.slug[1].indexOf('-') !== -1) {
                queryParams = query.slug[1].toString().split('-');
            } else {
                queryParams.push(query.slug[1].toString());
            }

        }

        Object.entries(this.getParams()).map(([key, values]) => {

            if (Array.isArray(values)) {

                if (queryParams.length > 0) {
                    values.forEach((option, index) => {

                        if (!!option.queryValue && queryParams.indexOf(option?.queryValue) !== -1) {
                            filter[key] = option.value;
                        }

                    });
                }

                if (typeof query[key] !== 'undefined') {

                    let getValues = [];

                    if (query[key].indexOf(';') !== -1) {
                        getValues = query[key].toString().split(';');
                    } else {
                        getValues.push(query[key]);
                    }

                    values.forEach((option, index) => {
                        if (!!option.getValue && getValues.indexOf(option?.getValue) !== -1) {

                            if (typeof filter[key] === 'undefined')
                                filter[key] = [];

                            if (typeof option.value !== 'undefined')
                                filter[key].push(option.value);
                            else if (typeof option.valueMin !== 'undefined' && typeof option.valueMax !== 'undefined') {
                                filter[key].push(option.valueMin + ":" + option.valueMax);
                            }
                        }
                    });
                }

            }

        });

        return filter;
    }

    getURLFromData(filter) {

        if (typeof filter === 'object') {
            let queryParams = [],
                getParams = {};

            Object.entries(this.getParams()).map(([key, values]) => {

                values.forEach((option, index) => {

                    if (typeof filter[key] !== 'undefined') {
                        let type = typeof option.queryValue !== 'undefined' ? 'query' : 'get',
                            queryValue = type == 'query' ? option.queryValue : option.getValue,
                            paramValue = (typeof option.valueMin !== 'undefined' && typeof option.valueMax !== 'undefined') ? option.valueMin + ":" + option.valueMax : option.value;


                        if (typeof queryValue !== 'undefined' && typeof paramValue !== 'undefined') {
                            
                            if (type == 'query') {
                                if (Array.isArray(filter[key]) && filter[key].indexOf(paramValue) !== -1) {
                                    queryParams.push(queryValue);
                                } else if (filter[key].toString().length > 0 && filter[key].toString() == paramValue.toString()) {
                                    queryParams.push(queryValue);
                                }
                            }
                            
                            if (type == 'get') {
                                
                                if (Array.isArray(filter[key]) && filter[key].indexOf(paramValue) !== -1) {
                                    if (!Array.isArray(getParams[key]))
                                        getParams[key] = [];

                                    getParams[key].push(queryValue);

                                } else if (filter[key].toString().length > 0 && filter[key].toString() == paramValue.toString()) {
                                    getParams[key] = queryValue;
                                }
                            }

                        }
                    }

                });

            });

            let params = {};
            Object.entries(getParams).map(([key, value]) => {
                params[key] = (Array.isArray(value) ? value.join(";") : value);
            });

            return {
                query: queryParams.join('-'),
                params: params
            };

        }

    }

}