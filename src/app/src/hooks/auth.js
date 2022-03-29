import useSWR, { useSWRConfig } from 'swr'
import axios from '../lib/axios'
import { useNotify } from './notify'
import { useEffect, useReducer, useState } from 'react'
import { useRouter } from 'next/router'

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
    );

    const csrf = () => axios.get('/api/v1/csrf-cookie');
    
    const login = async ({ setErrors, setStatus, ...props }) => {
        await csrf();

        setErrors([])
        setStatus(null)

        return axios
            .post('/api/v1/login', props, {withCredentials: true})
            .then((response) => {
                mutate('/api/v1/user');

                return response.data;
            })
            .catch(error => {

                if (typeof error.response === 'object') {
                    if (error.response.status == 422) {
                        setErrors({
                            password: "Введенный пароль неверен"
                        });
                    } else {
                        setErrors({
                            password: error.response.data.message
                        });
                    }
                }

                return error.response;
            })
    }

    const register = async ({ setErrors, ...props }) => {
        await csrf();

        setErrors([])

        return axios
            .post('/api/v1/register', props.data)
            .then((response) => {
                if (typeof response.data === 'object' && !!response.data.error && typeof response.data.error === 'string') {

                    errorNotify({
                        title: 'Ошибка',
                        message: response.data.error
                    });

                } else {
                    mutate('/api/v1/user');
                }
                
                return response.data;
            })
            .catch(error => {
                if (typeof error.response === 'object') {
                    

                    if (typeof error.response.data === 'object' && !!error.response.data.error && typeof error.response.data.error === 'string') {
                        setErrors({});

                        errorNotify({
                            title: 'Ошибка',
                            message: error.response.data.error
                        });
                    }
                    
                    //if (error.response.status !== 422) throw error

                    //setErrors(Object.values(error.response.data.errors).flat())
                }
            })
    }

    const forgotPassword = async ({ setErrors, setStatus, email }) => {
        await csrf()

        setErrors([])
        setStatus(null)

        axios
            .post('/api/v1/forgot-password', { email })
            .then((response) => {
                if (typeof response.data === 'object' && !!response.data.error && typeof response.data.error === 'string') {

                    errorNotify({
                        title: 'Ошибка',
                        message: response.data.error
                    });

                }

                return response.data;
            })
            .catch(error => {
                if (error.response.status === 422) {
                    setErrors({
                        email: "Пользователь с указанным email не найден"
                    });
                    return;
                } 

                setErrors({
                    email: "Произошла непредвиденная ошибка. Повторите запрос позже"
                });
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
            })
            .catch(error => {
                console.warn(error);
                return {result: false}
            });
    }

    const resendEmailVerification = ({ setStatus }) => {
        axios
            .post('/api/v1/email/verification-notification')
            .then(response => setStatus(response.data.status))
    }

    const logout = async ({...props}) => {
        if (! error) {
            return axios.post('/api/v1/logout')
                .then(response => {
                    mutate('/api/v1/user');
                });

            

            //revalidate();
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
        resendEmailVerification        
    }
}