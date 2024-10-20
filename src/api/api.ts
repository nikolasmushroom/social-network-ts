import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': 'fd5f9688-ccfd-40b8-ab09-e5882d839628'
    }
})
export const usersAPI = {
    async getUsers(currentPage: number, pageSize: number) {
        return await instance.get(`users?page=${currentPage}&count=${pageSize}`);
    },
    async changeFollowStatus(userId: string, followStatus: boolean) {
        return followStatus
            ? await instance.post(`follow/${userId}`)
            : await instance.delete(`follow/${userId}`)
    },
    getUserProfile(userId: string) {
        return profileAPI.getUserProfile(userId)
    },
}
export const profileAPI = {
    async getUserProfile(userId: string) {
        return await instance.get(`profile/${userId}`)
    },
    async getUserStatus(userId: string) {
        return await instance.get(`profile/status/${userId}`)
    },
    async updateUserStatus(status: string) {
        return await instance.put(`profile/status`, {status: status});
    }
}
export const authAPI = {
    async authMe() {
       return await instance.get('auth/me')

    },
    async login(email: string, password: string, rememberMe: boolean = false) {
        return await instance.post('auth/login', {email, password, rememberMe});
    },
    async logout() {
        return await instance.delete('auth/login');
    }
}