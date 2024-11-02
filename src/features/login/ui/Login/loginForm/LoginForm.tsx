import {useForm} from "react-hook-form";
import React, {useEffect} from "react";
import classes from "../Login.module.css";
import {Button} from "../../../../../common/components/Button/Button";

type loginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}
type loginFormPropsType<T extends {} = {}> = T & {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
    error : string
    captchaUrl: string
}
export const LoginForm = <T extends {}>({ captchaUrl,  login, error,   ...props }: loginFormPropsType<T>) => {
    const {register, handleSubmit, formState: {errors, isSubmitting}, setValue, setError} = useForm<loginFormValuesType>({
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false,
            captcha: ''
        },
        mode: "onChange"
    });
    useEffect(() => {
        const savedEmail = localStorage.getItem('userEmail') || sessionStorage.getItem('userEmail')
        const savedPassword = localStorage.getItem('userPassword') || sessionStorage.getItem('userPassword')
        const savedRememberMe = localStorage.getItem('rememberMe') || sessionStorage.getItem('rememberMe');
        if(savedEmail && savedPassword){
            setValue('email', savedEmail)
            setValue('password', savedPassword)
            setValue('rememberMe', savedRememberMe === 'true')
        }
    }, [setValue])

    useEffect(() => {
        if(error){
            setError('email', { type: 'custom', message: error });
            setError('password', { type: 'custom', message: error});
        }
    }, [error, setError])

    const onSubmit = (data: loginFormValuesType) => {
        if(data.rememberMe){
            localStorage.setItem('userEmail', data.email)
            localStorage.setItem('userPassword', data.password)
            localStorage.setItem('rememberMe', 'true')
        } else {
            localStorage.removeItem('userEmail');
            localStorage.removeItem('userPassword');
            localStorage.removeItem('rememberMe');
        }
        login(data.email, data.password, data.rememberMe, data.captcha)
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={classes.loginForm}>
            <div>
                <input {...register('email', {
                        required: 'This field is required',
                        minLength: {
                            value: 7,
                            message: 'Your login should have min. 7 characters '
                        },
                        validate: (value) => {
                            if(!value.includes('@')) {
                                return 'Your login should have @';
                            }
                            return true;
                        }
                    }
                )} placeholder={'Login'}/>
                {errors.email?.message ? <div className={classes.error}>{errors.email.message}</div> : ''}
            </div>
            <div>
                <input {...register('password', {
                        required: 'This field is required',
                        minLength: {
                            value: 7,
                            message: 'Your password should have min. 7 characters '
                        }
                    }
                )} type={"password"} placeholder={'Password'}/>
                {errors.password?.message ? <div className={classes.error}>{errors.password.message}</div> : ''}
            </div>
            <div>
                <div className={classes.checkbox}>
                    <input {...register('rememberMe')} type="checkbox" className={classes.checkbox}/>
                    <div>remember me</div>
                </div>

            </div>
            {captchaUrl && <div className={classes.captchaContainer}>
                <img src={captchaUrl} className={classes.captcha} alt="Captcha generated image"/>
                <input {...register('captcha')} type="text"/>
            </div>}
            <div>
                <Button disabled={isSubmitting} className={classes.submit}>{isSubmitting ? 'Loading...' : 'Submit'}</Button>
            </div>
        </form>
    )
}