import { API_REQUEST_TIMEOUT } from "@/src/constants/config";
import { BASE_URL } from "@/src/constants/server.url";
import { store } from "@/src/store";
import axios from "axios";



axios.interceptors.request.use((config) => {
    const token = store.getState().auth.accessToken;
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
    const token = store.getState().auth.accessToken;
    if (token) {    
        config.headers.Authorization = `Bearer ${token}`;
    }
    config.headers["Content-Type"] = 'multipart/formdata';
    return config;
});

export { axiosfile };

export default axios;