import Axios from 'axios'

const axios = Axios.create({
    baseURL: "https://api.stage1.test.tourselfer.tech",
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
})

export default axios