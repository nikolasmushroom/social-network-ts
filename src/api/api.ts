import axios from "axios";

export const baseURL = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': 'fd5f9688-ccfd-40b8-ab09-e5882d839628'
    }
})
