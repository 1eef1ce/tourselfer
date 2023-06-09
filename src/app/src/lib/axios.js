import Axios from 'axios';

const axios = Axios.create({
    baseURL: process.env.API_HOST ?? 'http://localhost',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
});

export default axios;