import axios, { AxiosRequestConfig } from "axios";
export interface FetchResoponse<T>{
    count: number,
    next: string | null,
    results: T[]
}

const axiosInstance =  axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '4a2c0701585342adb50f2d1687cb5e55'
    }
})

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
            .get<FetchResoponse<T>>(this.endpoint, config)
            .then(res => res.data);
    }
}
export default APIClient;