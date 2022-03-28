import React, { useEffect, useState } from 'react';
import { Button, Input } from '@components/ui';
import SocialAuth from '@components/auth/SocialAuth';
import { PolicyText } from '@components/common';
import { Formik, Form } from 'formik';
import { useAuth } from '../../hooks/auth'
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router'
import { render } from 'react-dom';

const Auth = (props) => {

    const router = useRouter()
    const config = {
        minPasswordLength: 8
    };

    const { user, login, checkEmail } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [showLoader, setShowLoader] = useState(false);
    const [action, setAction] = useState('');
    const [email, setEmail] = useState('johnson@gmail.com');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState(null);

    //if (typeof user === 'object' && typeof user.data === 'object') {
    //    setAction('isAuthorized');
    //}

    

    
    user().then((response) => {
        
        //if (typeof response === 'object' && typeof response.data === 'object') {
        //    setAction('isAuthorized');
        //}
    });

    user().then((response) => {});


    useEffect(() => {
        /*if (router.query.reset?.length > 0 && errors.length === 0) {
            setStatus(atob(router.query.reset));
        } else {
            setStatus(null);
        }*/
//console.log('useEffect');
        
    });

    useEffect(() => {
        if (action === 'createNewAccount') {

            if (password.length > 0 && repeatPassword.length > 0) {

                if (password != repeatPassword) {
                    setErrors({
                        password: 'Введенные пароли не совпадают',
                        repeatPassword: 'Введенные пароли не совпадают'
                    });
                } else if (password.length < config.minPasswordLength) {
                    setErrors({
                        password: 'Минимальная длина пароля ' + config.minPasswordLength + ' символов.',
                    });
                }
                else {
                    setErrors({});
                }
            }

        }
    }, [password, repeatPassword]);

    const checkAvaliableEmail = async event => {
        event.preventDefault();

        setShowLoader(true);
        checkEmail({email}).then((response) => {
            setShowLoader(false);

            if (typeof response !== 'object')
                throw new Error();

            if (response.result === true) {
                setAction('setPassword');
                return;
            } else if (response.result === false) {
                setAction('createNewAccount');
                return;
            }

            throw new Error();
            
        }).catch(error => {
            setErrors({
                email: error.message.length > 0 ? error.message : 'Произошла непредвиденная ошибка. Повторите запрос позже'
            });
        });
    };

    const submitLoginForm = async event => {
        event.preventDefault();

        setShowLoader(true);
        login({ email, password, setErrors, setStatus }).then((response) => {
            setShowLoader(false);
            
            if (typeof response !== 'object') {
                setErrors({
                    password: 'Произошла непредвиденная ошибка'
                });

                return false;
            }

            if (!!response.error && typeof response.error === 'string') {
                setErrors({
                    password: response.error
                });

                return false;
            }

            if (!!response.status && response.status === 'success' && !!response.token) {
                setAction('successAuth');
            }

        });
        
    };

    const submitRegForm = async event => {
        event.preventDefault();
    };


    return (
        <>
        {action === '' &&
        <div className="auth">
            <div className="auth__head">
                <div className="auth__title">Войдите или создайте аккаунт</div>
            </div>
            <div className="form">
                    <div className="form__row">
                        <Input
                            className={"form__input" + (!!errors && errors['email'] ? ' error' : '')}
                            onChange={event => setEmail(event.target.value)}
                            value={email}
                            id="email"
                            name="email"
                            type="email"
                            label="Email"
                            required
                            autoFocus
                        />
                        {!!errors && errors['email'] ? (
                            <div className="form__error">{errors['email']}</div>
                        ) : null}
                    </div>
                    <div className="form__row form__row--btn">
                        <Button
                            variant="filled"
                            size="medium"
                            type="button"
                            loading={showLoader}
                            onClick={checkAvaliableEmail}
                        >
                            Продолжить через электронную почту
                        </Button>
                        <Button
                            variant="outlined"
                            size="medium"
                            type="button"
                        >
                            Забыли пароль?
                        </Button>
                    </div>
            </div>
        </div>
        }

        {action === 'setPassword' &&
        <div className="auth">
            <div className="auth__head">
                <div className="auth__title">Войдите или создайте аккаунт</div>
            </div>
            <div className="form">
                    
                    <div className="form__row">
                        <Input
                            className={"form__input" + (!!errors && errors['password'] ? ' error' : '')}
                            onChange={event => setPassword(event.target.value)}
                            value={password}
                            id="password"
                            name="password"
                            type="password"
                            label="Пароль"
                            required
                            autoComplete="current-password"
                        />
                        {!!errors && errors['password'] ? (
                            <div className="form__error">{errors['password']}</div>
                        ) : null}
                    </div>
                    <div className="form__row form__row--btn">
                            <Button
                                variant="filled"
                                size="medium"
                                type="button"
                                loading={showLoader}
                                onClick={submitLoginForm}
                            >
                                Войти
                            </Button>
                            <Button
                                variant="outlined"
                                size="medium"
                                type="button"
                                
                            >
                                Забыли пароль?
                            </Button>
                    </div>
            </div>
        </div>
        }

        {action === 'createNewAccount' &&
            <div className="auth">
                <div className="auth__head">
                    <div className="auth__title">Создание пароля</div>
                    <div className="auth__subtitle">Пароль должен состоять из заглавных и строчных букв и цифр. Длина — не менее {config.minPasswordLength} символов.</div>
                </div>
                <div className="form">
                
                    <div className="form__row">
                        <Input
                            className={"form__input" + (!!errors && errors['password'] ? ' error' : '')}
                            onChange={event => setPassword(event.target.value)}
                            value={password}
                            id="password"
                            name="password"
                            type="password"
                            label="Пароль"
                            required
                        />
                        {!!errors && errors['password'] ? (
                            <div className="form__error">{errors['password']}</div>
                        ) : null}
                    </div>

                    <div className="form__row">
                        <Input
                            className={"form__input" + (!!errors && errors['repeatPassword'] ? ' error' : '')}
                            onChange={event => setRepeatPassword(event.target.value)}
                            value={repeatPassword}
                            id="repeat-password"
                            name="repeat-password"
                            type="password"
                            label="Повторите пароль"
                            required
                        />
                        {!!errors && errors['repeatPassword'] ? (
                            <div className="form__error">{errors['repeatPassword']}</div>
                        ) : null}
                    </div>

                    <div className="form__row form__row--btn">
                            <Button
                                variant="filled"
                                size="medium"
                                type="button"
                                onClick={submitRegForm}
                                loading={showLoader}
                            >
                                Создать аккаунт
                            </Button>
                            
                    </div>
                </div>

                <div className="text-note">
                    <PolicyText
                        description="Создавая новый аккаунт, вы соглашаетесь с нашими"
                        link1="/policy"
                        title1="Правилами и условиями"
                        link2="/policy"
                        title2="Положением о конфиденциальности"
                    />
                </div>

            </div>
        }

        {action === 'successAuth' &&
            <div className="auth">
                <div className="auth__head">
                    <div className="auth__title">Вы успешно выполнили вход</div>
                    <div className="auth__subtitle">Сейчас вы будете перенаправлены на предыдущую страницу.</div>
                </div>
                <div className="form">
                    <div className="form__row form__row--btn">
                        <Button
                            variant="filled"
                            size="medium"
                            type="button"
                        >
                            Хорошо
                        </Button>
                    </div>
                </div>
            </div>
        }

        {action === 'isAuthorized' &&
            <div className="auth">
                <div className="auth__head">
                    <div className="auth__title">Вы уже авторизованы</div>
                    <div className="auth__subtitle">Если желаете выйти из аккаунта, нажмите кнопку ниже.</div>
                </div>
                <div className="form">
                    <div className="form__row form__row--btn">
                        <Button
                            variant="filled"
                            size="medium"
                            type="button"
                        >
                            Хорошо
                        </Button>
                    </div>
                </div>
            </div>
        }
        </>
    );

};

export default Auth;


/*export interface AuthState {
    showAuth: boolean
    showForgot: boolean
}

class AuthClass extends React.Component<any, any, AuthState> {
    
    
    constructor(props) {
        super(props);
        this.state = {
            showAuth: true,
            showForgot: false,
            email: "",
            errors: [],
            status: null
        };
        this.toggleForgot = this.toggleForgot.bind(this);
    }

    componentDidMount() {
        
    }

    toggleForgot() {
        this.setState({
            showAuth: false,
            showForgot: true
        });
    }

    render() {

        const validationSchema = Yup.object({
            email: Yup.string()
                .email('Некорректный адрес электронной почты')
                .required('Введите адрес электронной почты')
        });

        const initialValues = {
            email: ''
        };

        const { login } = this.props.auth;

        return (
            <div className="auth">
                {this.state.showAuth && (
                    <>
                        <div className="auth__head">
                            <div className="auth__title">Войдите или создайте аккаунт</div>
                        </div>
                        <Formik
                            initialValues={initialValues}
                            
                            onSubmit={(values) => {
                                
                                login('asd@asdasd.ru', '123', );
                                    
                                    //console.log(Cookies.get('XSRF-TOKEN'));
                                
                                //alert(JSON.stringify(values, null, 2));
                            }}
                        >
                            {({
                                  errors,
                                  status,
                                  touched,
                                  getFieldProps
                              }) => (
                                <Form className="form">
                                    <div className="form__row">
                                        <Input
                                            className={"form__input" + (touched.email && errors.email ? ' error' : '')}
                                            id="email"
                                            name="email"
                                            type="email"
                                            label="Email"
                                            {...getFieldProps('email')}
                                        />
                                        {touched.email && errors.email ? (
                                            <div className="form__error">{errors.email}</div>
                                        ) : null}
                                    </div>
                                    <div className="form__row form__row--btn">
                                        <Button
                                            variant="filled"
                                            size="medium"
                                            type="submit"
                                        >
                                            Войти
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            size="medium"
                                            type="button"
                                            onClick={this.toggleForgot}
                                        >
                                            Забыли пароль?
                                        </Button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </>
                )}

                {this.state.showForgot && (
                    <>
                        <div className="auth__head">
                            <div className="auth__title">Забыли пароль?</div>
                            <div className="auth__subtitle">
                                Ничего страшного! Мы отправим вам ссылку для смены пароля. Введите адрес электронной
                                почты, с которой вы заходите на <span>Booking.com</span>.
                            </div>
                        </div>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={(values) => {
                                alert(JSON.stringify(values, null, 2));
                            }}
                        >
                            {({
                                  errors,
                                  status,
                                  touched,
                                  getFieldProps
                              }) => (
                                <Form className="form">
                                    <div className="form__row">
                                        <Input
                                            className={"form__input" + (touched.email && errors.email ? ' error' : '')}
                                            id="email"
                                            name="email"
                                            type="email"
                                            label="Email"
                                            {...getFieldProps('email')}
                                        />
                                        {touched.email && errors.email ? (
                                            <div className="form__error">{errors.email}</div>
                                        ) : null}
                                    </div>
                                    <div className="form__row form__row--btn">
                                        <Button
                                            variant="filled"
                                            size="medium"
                                            type="submit"
                                        >
                                            Отправить ссылку на смену пароля
                                        </Button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </>
                )}

                {this.state.showAuth && (
                    <SocialAuth/>
                )}

                <div className="text-note">
                    <PolicyText
                        description="Входя в аккаунт или создавая новый, вы соглашаетесь с нашими"
                        link1="/policy"
                        title1="Правилами и условиями"
                        link2="/policy"
                        title2="Положением о конфиденциальности"
                    />
                </div>
            </div>
        );
    }
}

const Auth = Component => props => {
    const t = useTranslation('components');
    const route = useRouter();
    const auth = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard'
    });

    return <Component {...props} auth={auth} t={t} route={route} />;
};

export default Auth(AuthClass);*/