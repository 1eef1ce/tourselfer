import React, { useEffect, useState } from 'react';
import { Button, Input } from '@components/ui';
import { PolicyText } from '@components/common';
import { useAuth } from '../../hooks/auth';
import { useNotify } from '../../hooks/notify';
import { useRouter } from 'next/router';


const Auth = (props) => {

    const router = useRouter();
    const config = {
        minPasswordLength: 8
    };

    const { user, refresh, isLoadingUserData, isAuthorize, login, checkEmail, forgotPassword, logout, register } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    });

    const {errorNotify} = useNotify();

    const [showLoader, setShowLoader] = useState(false);
    const [action, setAction] = useState('');

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState(null);

    useEffect(() => {
        setErrors({});
    }, [action, name, email, password]);

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

        let oErrors = {};

        if (email.length <= 5 || email.indexOf('@') == -1 || email.indexOf('.') == -1)
            oErrors = {
                email: "Введите ваш email-адрес"
            };


        if (Object.entries(oErrors).length === 0) {

            setShowLoader(true);
            checkEmail({email, setErrors, setStatus})
                .then((response) => {
                    setShowLoader(false);

                    if (typeof response === 'object') {
                        if (response.result === true) {
                            setAction('setPassword');
                            return;
                        } else if (response.result === false) {
                            setAction('createNewAccount');
                            return;
                        }
                    }
                })
                .catch(error => {
                    setShowLoader(false);
                    errorNotify({
                        title: 'Ошибка',
                        message: error.toString()
                    });

                });
        }

        setErrors(oErrors);
    };

    const submitLoginForm = async event => {
        event.preventDefault();

        let oErrors = {};

        if (password.length <= 4)
            oErrors = {
                email: "Введите пароль от учетной записи"
            };

        if (Object.entries(oErrors).length === 0) {

            setShowLoader(true);

            login({ email, password, setErrors, setStatus })
                .then((response) => {
                    setShowLoader(false);
                    refresh();
                });
        }

        setErrors(oErrors);
    };

    const submitRegForm = async event => {
        event.preventDefault();

        const oErrors = {};

        if (name.length <= 2)
            oErrors['name'] = "Введите ваше имя";

        if (password.length <= 0 || repeatPassword.length <= 0)
            oErrors['password'] = "Укажите пароль для новой учетной записи";


        if (Object.entries(oErrors).length === 0) {

            const data = {
                name: name,
                email: email,
                password: password,
                password_confirmation: repeatPassword
            };

            setShowLoader(true);

            register({setErrors, data})
                .then(response => {
                    setShowLoader(false);

                    if (response) {
                        setAction('needEmailConfirm');
                    }
                });
        }

        setErrors(oErrors);
    };

    const submitForgotPasswordForm = async event => {
        event.preventDefault();

        let oErrors = {};

        if (email.length <= 5 || email.indexOf('@') == -1 || email.indexOf('.') == -1)
            oErrors = {
                email: "Введите ваш email-адрес"
            };


        if (Object.entries(oErrors).length === 0) {

            setShowLoader(true);

            forgotPassword({email, setErrors, setStatus})
                .then(response => {
                    setShowLoader(false);
                    if (response) {
                        setAction('forgotPasswordConfirm');
                    }
                });
        }

        setErrors(oErrors);
    };

    const submitLogout = async event => {
        event.preventDefault();

        setShowLoader(true);

        logout()
            .then(response => {
                setShowLoader(false);
                setAction('');
            })
            .catch(error => {
                setShowLoader(false);
                errorNotify({
                    title: 'Ошибка',
                    message: error.toString()
                });
            });
    };

    if (isLoadingUserData) {
        return (
            <></>
        );
    }

    if (isAuthorize) {
        return (
            <div className="auth">
                <div className="auth__head">
                    <div className="auth__title">Вы уже авторизованы</div>
                    <div className="auth__subtitle">Если желаете выйти из аккаунта, нажмите <a href="#" onClick={submitLogout}>здесь</a>.</div>
                </div>

            </div>
        );
    }



    //if (!isAuthorize) {
    return (
        <>

            {action === '' &&
            <div className="auth">
                <div className="auth__head">
                    <div className="auth__title">Войдите или создайте аккаунт</div>
                </div>
                <div className="form">
                    <div className="form__group">
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
                    <div className="form__group form__group--btn">
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
                            onClick={() => setAction('forgotPassword')}
                        >
                            Забыли пароль?
                        </Button>
                    </div>
                </div>
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
            }

            {action === 'setPassword' &&
            <div className="auth">
                <div className="auth__head">
                    <div className="auth__title">Войдите или создайте аккаунт</div>
                </div>
                <div className="form">

                    <div className="form__group">
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
                    <div className="form__group form__group--btn">
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
                            onClick={() => setAction('forgotPassword')}
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
                    <div className="auth__title">Создание аккаунта</div>
                    <div className="auth__subtitle">Пароль должен состоять из заглавных и строчных букв и цифр. Длина — не менее {config.minPasswordLength} символов.</div>
                </div>
                <div className="form">

                    <div className="form__group">
                        <Input
                            className={"form__input" + (!!errors && errors['name'] ? ' error' : '')}
                            onChange={event => setName(event.target.value)}
                            value={name}
                            id="form__reg__field-name"
                            name="name"
                            type="text"
                            label="Ваше имя"
                            required
                        />
                        {!!errors && errors['name'] ? (
                            <div className="form__error">{errors['name']}</div>
                        ) : null}
                    </div>

                    <div className="form__group">
                        <Input
                            className={"form__input" + (!!errors && errors['password'] ? ' error' : '')}
                            onChange={event => setPassword(event.target.value)}
                            value={password}
                            id="form__reg__field-password"
                            name="password"
                            type="password"
                            label="Пароль"
                            required
                        />
                        {!!errors && errors['password'] ? (
                            <div className="form__error">{errors['password']}</div>
                        ) : null}
                    </div>

                    <div className="form__group">
                        <Input
                            className={"form__input" + (!!errors && errors['repeatPassword'] ? ' error' : '')}
                            onChange={event => setRepeatPassword(event.target.value)}
                            value={repeatPassword}
                            id="form__reg__field-repeat-password"
                            name="repeat-password"
                            type="password"
                            label="Повторите пароль"
                            required
                        />
                        {!!errors && errors['repeatPassword'] ? (
                            <div className="form__error">{errors['repeatPassword']}</div>
                        ) : null}
                    </div>

                    <div className="form__group form__group--btn">
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

            {action === 'needEmailConfirm' &&
            <div className="auth">
                <div className="auth__head">
                    <div className="auth__title">Проверьте папку «Входящие»</div>
                    <div className="auth__subtitle">Мы отправили на {email} ссылку для подтверждения email адреса. Письмо должно прийти через несколько минут.</div>
                </div>
                <div className="form">

                    <div className="form__group form__group--btn">
                        <Button
                            variant="filled"
                            size="medium"
                            type="button"
                            onClick={refresh}
                        >
                            Хорошо
                        </Button>

                    </div>
                </div>

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
            }

            {action === 'successAuth' &&
            <div className="auth">
                <div className="auth__head">
                    <div className="auth__title">Вы успешно выполнили вход</div>
                    <div className="auth__subtitle">Сейчас вы будете перенаправлены на предыдущую страницу.</div>
                </div>
                <div className="form">
                    <div className="form__group form__group--btn">
                        <Button
                            variant="filled"
                            size="medium"
                            type="button"
                            onClick={refresh}
                        >
                            Хорошо
                        </Button>
                    </div>
                </div>
            </div>
            }

            {action === 'forgotPassword' &&
            <div className="auth">
                <div className="auth__head">
                    <div className="auth__title">Забыли пароль?</div>
                    <div className="auth__subtitle">
                        Ничего страшного! Мы отправим вам ссылку для смены пароля. Введите адрес электронной
                        почты, с которой вы заходите на <span>Tourselfer.com</span>.
                    </div>
                </div>
                <div className="form">
                    <div className="form__group">
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

                    <div className="form__group form__group--btn">
                        <Button
                            variant="filled"
                            size="medium"
                            type="button"
                            onClick={submitForgotPasswordForm}
                            loading={showLoader}
                        >
                            Отправить ссылку на смену пароля
                        </Button>

                        <Button
                            variant="outlined"
                            size="medium"
                            type="button"
                            onClick={() => setAction('')}
                        >
                            Я вспомнил пароль
                        </Button>

                    </div>
                </div>
            </div>
            }

            {action === 'forgotPasswordConfirm' &&
            <div className="auth">
                <div className="auth__head">
                    <div className="auth__title">Проверьте папку «Входящие»</div>
                    <div className="auth__subtitle">Мы отправили на {email} ссылку для восстановления пароля. Письмо должно прийти через несколько минут.</div>
                </div>
                <div className="form">

                    <div className="form__group form__group--btn">
                        <Button
                            variant="filled"
                            size="medium"
                            type="button"
                        >
                            Хорошо
                        </Button>

                    </div>
                </div>

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
            }
        </>
    );



};

export default Auth;