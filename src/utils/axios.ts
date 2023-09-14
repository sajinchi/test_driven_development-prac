import { API_REQUEST_TIMEOUT } from "@/src/constants/config";
import { BASE_URL } from "@/src/constants/server.url";
import { store } from "@/src/store";
import axios from "axios";



axios.interceptors.request.use((config) => {
    // const token = store.getState().auth.accessToken;
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk3MDg2NDc5LCJqdGkiOiI5MjJjMjI3NTMxNGM0ZTY3YWM4ODRlYWJhOTFkZDkyYyIsInVzZXJfaWQiOiJiMmQ3ZWFiOC1lZWRmLTQyZjAtOGI4MS01NzUwMWYxYmE1ZjYifQ.o4W58i5R4pKMVnBnVhVcCssfgqC7ZIz-3jxwrfGRY2c";
    config.baseURL = BASE_URL;
    config.timeout = API_REQUEST_TIMEOUT;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    config.headers["Content-Type"] = 'application/json';
    return config;
});


const axiosfile = axios.create({
    baseURL: BASE_URL,
    timeout: API_REQUEST_TIMEOUT,
});

axiosfile.interceptors.request.use((config) => {
    // const token = store.getState().auth.accessToken;
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk3MDg2NDc5LCJqdGkiOiI5MjJjMjI3NTMxNGM0ZTY3YWM4ODRlYWJhOTFkZDkyYyIsInVzZXJfaWQiOiJiMmQ3ZWFiOC1lZWRmLTQyZjAtOGI4MS01NzUwMWYxYmE1ZjYifQ.o4W58i5R4pKMVnBnVhVcCssfgqC7ZIz-3jxwrfGRY2c";
    if (token) {    
        config.headers.Authorization = `Bearer ${token}`;
    }
    config.headers["Content-Type"] = 'multipart/formdata';
    return config;
});

export { axiosfile };

export default axios;