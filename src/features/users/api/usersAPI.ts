// разбить по разным сущностям
import {baseURL} from "../../../api/api";
import {profileAPI} from "../../profile/api/profileAPI";

export const usersAPI = {
    async getUsers(currentPage: number, pageSize: number) {
        return await baseURL.get(`users?page=${currentPage}&count=${pageSize}`);
    },
    async changeFollowStatus(userId: string, followStatus: boolean) {
        return followStatus
            ? await baseURL.post(`follow/${userId}`)
            : await baseURL.delete(`follow/${userId}`)
    },
    getUserProfile(userId: string) {
        return profileAPI.getUserProfile(userId)
    },
}