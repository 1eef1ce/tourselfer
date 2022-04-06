import useSWR, { useSWRConfig } from 'swr'
import axios from '@lib/axios'
import { useNotify } from './notify'
import { useEffect, useReducer, useState } from 'react'
import { useRouter } from 'next/router'

class ValidationError extends Error {
    constructor(message, property) {
        super(message);
        this.name = "ValidationError";
        this.property = property;
    }
}

export const useAuth = ({ middleware, redirectIfAuthenticated } = {}) => {

    
    const { mutate } = useSWRConfig()
    const router = useRouter();
    const {errorNotify} = useNotify();
    //const [state, dispatch] = useReducer(reducer, initialState);
    const [csrfToken, setCsrfToken] = useState(null);
    const [userData, setUserData] = useState(null);
    const [isAuthorized, setIsAuthorized] = useState(null);

    const { data: user, error, revalidate } = useSWR('/api/v1/user', () =>
        axios
            .get('/api/v1/user')
            .then(response => response.data)
            .catch(error => {
                throw error;
                console.log(error);
                //if (error.response.status !== 409)
                //    throw error;

                //router.push('/api/v1/email/verification-notification')
            }),
    {
        refreshWhenHidden: false,
        refreshWhenOffline: true,
        revalidateIfStale: false,
        shouldRetryOnError: false
    });

    const csrf = () => axios.get('/api/v1/csrf-cookie');

    const refresh = async () => {
        mutate('/api/v1/user');
    };
    
    const login = async ({ setErrors, setStatus, ...props }) => {
        await csrf();

        setErrors([])
        setStatus(null)

        return axios
            .post('/api/v1/login', props, {
                withCredentials: true,
                validateStatus: status => {
                    return status == 200 || status == 422
                }
            })
            .then((response) => {
                
                if (typeof response === 'object') {

                    if (response.status == 422) {

                        throw new ValidationError("Введенный пароль неверен", "password");

                    } else if (response.status == 200) {

                        return true;
                    }

                }

                //return response.data;
            })
            .catch(error => {

                if (error instanceof ValidationError) {

                    let errors = {};
                    errors[error.property] = error.message;
                    
                    setErrors(errors);

                } else if (error instanceof Error) {

                    errorNotify({
                        title: 'Ошибка',
                        message: error.toString()
                    });
                }
                
            })
    }

    const register = async ({ setErrors, ...props }) => {
        await csrf();

        setErrors([])

        return axios
            .post('/api/v1/register', props.data)
            .then((response) => {
                
                if (typeof response === 'object') {

                    if (response.status == 200) {

                        if (response.data && response.data.status === "success")
                            return true;
                        else
                            throw new Error(response.data.error);
                    }
                }

                throw new Error("Непредвиденная ошибка. Повторите запрос позже");
                
            })
            .catch(error => {

                if (error instanceof ValidationError) {

                    let errors = {};
                    errors[error.property] = error.message;
                    
                    setErrors(errors);

                } else if (error instanceof Error) {

                    errorNotify({
                        title: 'Ошибка',
                        message: error.toString()
                    });
                }
                
            })
    }

    const forgotPassword = async ({ setErrors, setStatus, email }) => {
        await csrf()

        setErrors({})
        setStatus(null)

        return axios
            .post('/api/v1/forgot-password', { email })
            .then(response => {

                if (typeof response === 'object') {

                    if (response.status == 200) {
                        /*if (typeof response.data === 'object' &&
                            typeof response.data.message === 'string' &&
                            response.data.message.indexOf('We have emailed your password reset link')
                        )
                        {
                            throw new ValidationError("Непредвиденная ошибка. Повторите запрос позже");
                        }*/

                        return true;
                    }
                }


                throw new Error("Непредвиденная ошибка. Повторите запрос позже");

            })
            .catch(error => {

                if (error instanceof ValidationError) {

                    let errors = {};
                    errors[error.property] = error.message;
                    
                    setErrors(errors);

                } else if (error instanceof Error) {

                    errorNotify({
                        title: 'Ошибка',
                        message: error.toString()
                    });
                }
                
            })
    }

    const resetPassword = async ({ setErrors, setStatus, ...props }) => {
        await csrf()

        setErrors([])
        setStatus(null)

        axios
            .post('/api/v1/reset-password', { token: router.query.token, ...props })
            .then(response => router.push('/login?reset=' + btoa(response.data.status)))
            .catch(error => {
                if (error.response.status != 422) throw error

                setErrors(Object.values(error.response.data.errors).flat())
            })
    }

    const checkEmail = async ({setErrors, setStatus, ...props}) => {
        return axios
            .post('/api/v1/user/checkEmail', props)
            .then(response => {
                if (typeof response !== 'object') {
                    
                    setErrors({
                        email: "Произошла непредвиденная ошибка"
                    });
                }
                
                return response.data;
            });
    }

    const resendEmailVerification = ({ setStatus }) => {
        return axios
            .post('/api/v1/email/verification-notification')
            .then(response => setStatus(response.data.status))
            .catch(error => {
                errorNotify({
                    title: 'Ошибка',
                    message: error.toString()
                });
            })
    }

    const logout = async ({...props}) => {
        if (! error) {
            return axios.post('/api/v1/logout')
                .then(response => {
                    mutate('/api/v1/user');
                });
        }
    }

    //useEffect(() => {
        //if (middleware === 'guest' && redirectIfAuthenticated && user) router.push(redirectIfAuthenticated)
        //if (middleware === 'auth' && error) logout()
    //}, [user, error])

    return {
        isLoadingUserData: !error && !user,
        isAuthorize: (typeof user === 'object' && !error),
        user,
        checkEmail,
        forgotPassword,
        logout,
        login,
        register,
        resetPassword,
        resendEmailVerification,
        refresh   
    }
}