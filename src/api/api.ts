import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': 'fd5f9688-ccfd-40b8-ab09-e5882d839628'
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
    },
    getUserProfile(userId : string){
       return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    },
    showAuthorisationStatus(){
        return instance.get('auth/me')
            .then(response => {
                    return response.data
            })

    }
}