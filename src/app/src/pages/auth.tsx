import Link from 'next/link'
import { useAuth } from '../hooks/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const Login = () => {
    const router = useRouter()

    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/',
    })

    //const [email, setEmail] = useState('')
    //const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    useEffect(() => {
        if (router.query.reset?.length > 0 && errors.length === 0) {
            setStatus(atob(router.query.reset))
        } else {
            setStatus(null)
        }
    });

    const email = 'johnson@gmail.com';
    const password = '12345678';

    const submitForm = async event => {
        event.preventDefault()

        login({ email, password, setErrors, setStatus })
    }

    console.log(status);
    console.log(errors);

    return (
        
        <button onClick={submitForm}>Sign in</button>

    )
}

export default Login