import {baseURL} from "../../../api/api";
export const securityAPI = {
    getCaptchaUrl(){
        return baseURL.get( '/security/get-captcha-url')
            .then((response) => {
                return response
                }
            )
    }
}