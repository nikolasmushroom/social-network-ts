import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': ''
    }
})
export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    changeFollowStatus(userId: string, followStatus : boolean) {
        return followStatus
            ? instance.post(`follow/${userId}`)
                .then(response => {
                    return response.data
                })
            : instance.delete(`follow/${userId}`)
                .then(response => {
                    return response.data
                })
    }
}
