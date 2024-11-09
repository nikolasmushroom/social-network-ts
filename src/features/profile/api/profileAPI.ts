import {baseURL} from "../../../api/api";
import {ProfileType} from "../../../app/store/store";

type ApiResponse<D = {}> = {
    resultCode: 0 | 1
    messages: Array<String>,
    data: D
}
type PhotoData = {
    photos?: {
        small?: string
        large?: string
    }
}
export const profileAPI = {
    async getUserProfile(userId: string) {
        return await baseURL.get<ProfileType>(`profile/${userId}`)
    },
    async updateUserProfileData(profile: ProfileType) {
        return await baseURL.put<ApiResponse<PhotoData>>('profile', profile)
    },
    async getUserStatus(userId: number) {
        return await baseURL.get<string>(`profile/status/${userId}`)
    },
    async updateUserStatus(status: string) {
        return await baseURL.put<ApiResponse>(`profile/status`, {status: status});
    },
    async savePhoto(file: any) {
        const formData = new FormData()
        formData.append('image', file)
        return await baseURL.put<ApiResponse<PhotoData>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}