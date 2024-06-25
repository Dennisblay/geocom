import axios, {AxiosRequestConfig} from "axios";
import configEnv from "../config.ts";

const axiosInstance = axios.create({
    baseURL: configEnv.BASE_URL,
})

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = async (config?: AxiosRequestConfig) => {
        return axiosInstance
            .get<T>(this.endpoint, config)
            .then(res => res.data);
    }

    post = async (data: T, config?: AxiosRequestConfig) => {
        return axiosInstance
            .post<T>(this.endpoint, data, config)
            .then(res => res.data);
    }
}

export default APIClient;