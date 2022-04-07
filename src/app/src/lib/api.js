
export class Api {

    constructor(props) {
        this.locale = props.locale ?? 'en';
        this.baseURL = process.env.API_HOST ?? 'http://localhost'
    }

    getURL(method, params) {
        return this.baseURL + method + '?' + new URLSearchParams(params).toString();
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
        let methodURL = !!props.countryCode && props.countryCode.length > 0 ? '/api/v1/route/findByCountryCode/' + encodeURI(props.countryCode) : '/api/v1/route';

        //if (!!props.filter)
        //    params.filter = props.filter;

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
