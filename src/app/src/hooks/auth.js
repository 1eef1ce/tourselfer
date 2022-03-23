import useSWR from 'swr'
import axios from '../lib/axios'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export const useAuth = ({ middleware, redirectIfAuthenticated } = {}) => {
    const router = useRouter()

    const { data: user, error, revalidate } = useSWR('/api/v1/user', () =>
        axios
            .get('/api/v1/user')
            .then(res => res.data)
            .catch(error => {
                if (error.response.status !== 409) throw error

                router.push('/api/v1/email/verification-notification')
            }),
    )

    const csrf = () => axios.get('/api/v1/csrf-cookie').then(response => {
        console.log(response);
    })

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

        axios
            .post('/api/v1/login', props, {withCredentials: true})
            .then(() => revalidate())
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(Object.values(error.response.data.errors).flat())
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

    useEffect(() => {
        //if (middleware === 'guest' && redirectIfAuthenticated && user) router.push(redirectIfAuthenticated)
        //if (middleware === 'auth' && error) logout()
    }, [user, error])

    return {
        user,
        register,
        login,
        forgotPassword,
        resetPassword,
        resendEmailVerification,
        logout,
    }
}