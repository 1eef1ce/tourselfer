import Axios from 'axios';

const axios = Axios.create({
    baseURL: process.env.API_HOST,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
});

export default axios;