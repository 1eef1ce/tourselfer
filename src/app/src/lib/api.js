
export class Api {

    constructor(props) {
        this.locale = props.locale ?? 'en';
        this.baseURL = process.env.API_HOST ?? 'http://localhost'
    }

    getURL(method, data) {

        const params = new URLSearchParams();
        
        Object.entries(data).forEach(([key, value]) => {
            if (typeof value === 'object') {
                Object.entries(value).forEach(([index, value]) => {

                    if (typeof value !== 'undefined') {
                        if (Array.isArray(value) && value.length > 0) {
                            console.log(value);
                            params.append(key + '[' + index + ']', value.join(';'));
                        } else {
                            params.append(key + '[' + index + ']', value.toString());
                        }
                    }
                    
                });
            } else if (Array.isArray(value)) {

                value.forEach(value => params.append(key, value.toString()));

            } else if (typeof value != 'undefined') {
                params.append(key, value.toString());
            }

        });

        console.log(params.toString());

        return this.baseURL + method + '?' + params.toString();
    }

    setPagination(params) {
        let pagination = {};

        if (!!params.pagination) {
            if (!!params.pagination.limit && params.pagination.limit > 0)
                pagination.limit = parseInt(params.pagination.limit);

            if (!!params.pagination.page && params.pagination.page > 0)
                pagination.page = parseInt(params.pagination.page);
        }

        return pagination;
    }

    

    async getHomepage() {

        let params = {
            language: this.locale
        };

        return await fetch(this.getURL('/api/v1/homepage', params))
            .then(resource => resource.json())
            .then((response) => {
                return response;
            })
            .catch(error => {
                console.warn(error);
            });
    }

    async getRoutesList(props) {

        let params = {
            language: this.locale
        };
        let methodURL = '/api/v1/route';
        if (!!props.countryCode && props.countryCode.length)
            methodURL = '/api/v1/route/findByCountryCode/' + encodeURI(props.countryCode);

        if (!!props.cityCode && props.cityCode.length)
            methodURL = '/api/v1/route/findByCityCode/' + encodeURI(props.cityCode);

        if (!!props.filter)
            params.filter = props.filter;

        Object.assign(params, this.setPagination(props));

        console.log(params);

        return await fetch(this.getURL(methodURL, params))
            .then(resource => resource.json())
            .then((response) => {
                return response;
            })
            .catch(error => {
                console.warn(error);

                return {
                    data: [],
                    links: null,
                    meta: null
                };
            });
    }
}
