import axios from "axios";

let appApiUrl = process.env.NODE_ENV === 'production' ? process.env.NEXT_APP_URL : 'http://localhost:3000/api';
const axiosInstance = axios.create({
    baseURL: process.env.CAR_API || appApiUrl,
    headers: {
        "Content-Type": 'application/json'
    },
});

export default axiosInstance;