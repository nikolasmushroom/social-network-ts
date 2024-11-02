import {baseURL} from "../../../api/api";

export const authAPI = {
    async authMe() {
        return await baseURL.get('auth/me')

    },
    async login(email: string, password: string, rememberMe: boolean = false, captcha : string = '') {
        return await baseURL.post('auth/login', {email, password, rememberMe, captcha});
    },
    async logout() {
        return await baseURL.delete('auth/login');
    }
}