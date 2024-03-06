/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import axios from "axios";

// console.log(import.meta.env.VITE_BASE_URL)

const instance = axios.create({
    baseURL:
        "https://orasure-backend.vercel.app/" || import.meta.env.VITE_BASE_URL,
    headers: {},
});

instance.interceptors.request.use(
    function (config) {
        const token = localStorage.getItem("orasure-user");
        if (token) {
            config.headers.Authorization = `Bearer ${token} `;
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default instance;
