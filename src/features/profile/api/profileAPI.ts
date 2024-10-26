import {baseURL} from "../../../api/api";

export const profileAPI = {
    async getUserProfile(userId: string) {
        return await baseURL.get(`profile/${userId}`)
    },
    async getUserStatus(userId: string) {
        return await baseURL.get(`profile/status/${userId}`)
    },
    async updateUserStatus(status: string) {
        return await baseURL.put(`profile/status`, {status: status});
    },
    async savePhoto(file: any) {
        const formData = new FormData()
        formData.append('image', file)
        return await baseURL.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}