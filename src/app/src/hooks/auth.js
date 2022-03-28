import useSWR from 'swr'
import axios from '../lib/axios'
import { useEffect, useReducer, useState } from 'react'
import { useRouter } from 'next/router'

export const useAuth = ({ middleware, redirectIfAuthenticated } = {}) => {

    

    const router = useRouter();
    //const [state, dispatch] = useReducer(reducer, initialState);
    const [csrfToken, setCsrfToken] = useState(null);
    const [userData, setUserData] = useState(null);
    const [isAuthorized, setIsAuthorized] = useState(null);

    /*const { data: user, error, revalidate } = useSWR('/api/v1/user', () =>
        axios
            .get('/api/v1/user')
            .then(res => res.data)
            .catch(error => {
                //if (error.response.status !== 409) throw error

                //router.push('/api/v1/email/verification-notification')
            }),
    );*/

    

    const csrf = async () => {
        if (csrfToken === null) {
            setCsrfToken(true);
            return axios.get('/api/v1/csrf-cookie');
        }
    }

    const user = async () => {
        await csrf();
    };

    /*const user = async ({}) => {
        //await csrf();

        return await axios
            .get('/api/v1/user')
            .then(response => response.data)
            
    };*/

    const register = async ({ setErrors, ...props }) => {
        await csrf();

        setErrors([])

        axios
            .post('/api/v1/register', props)
            .then(() => revalidate())
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(Object.values(error.response.data.errors).flat())
            })
    }

    const login = async ({ setErrors, setStatus, ...props }) => {
        await csrf();

        setErrors([])
        setStatus(null)

        return axios
            .post('/api/v1/login', props, {withCredentials: true})
            .then((response) => {
                revalidate();

                console.log('Then');
                console.log(error.response);

                return response.data;
            })
            .catch(error => {

                if (typeof error.respons === 'object') {
                    if (error.response.status === 422) {
                        setErrors({
                            password: "Введенный пароль неверен"
                        });
                    } else {
                        setErrors({
                            password: error.response.data.message
                        });
                    }
                }

                //if (error.response.status !== 422) throw error

                //setErrors(Object.values(error.response.data.errors).flat())
            })
    }

    const forgotPassword = async ({ setErrors, setStatus, email }) => {
        await csrf()

        setErrors([])
        setStatus(null)

        axios
            .post('/api/v1/forgot-password', { email })
            .then(response => setStatus(response.data.status))
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(Object.values(error.response.data.errors).flat())
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

    const checkEmail = async ({...props}) => {
        return axios
            .post('/api/v1/user/checkEmail', props)
            .then(response => {
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

    const logout = async () => {
        if (! error) {
            await axios.post('/api/v1/logout')

            revalidate()
        }

        window.location.pathname = '/login'
    }

    //useEffect(() => {
        //if (middleware === 'guest' && redirectIfAuthenticated && user) router.push(redirectIfAuthenticated)
        //if (middleware === 'auth' && error) logout()
    //}, [user, error])

    return {
        user,
        register,
        login,
        forgotPassword,
        resetPassword,
        resendEmailVerification,
        logout,
        checkEmail
    }
}