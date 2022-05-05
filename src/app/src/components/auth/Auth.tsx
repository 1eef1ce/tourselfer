import React, { useEffect, useState } from 'react';
import { Button, Input } from '@components/ui';
import { PolicyText } from '@components/common';
import { useAuth } from '../../hooks/auth';
import { useNotify } from '../../hooks/notify';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { i18n } from "next-i18next";

interface Props {
    redirectAfterSignin?: string,
    reloadAfterSignin?: boolean
}

const Auth = (props: Props) => {
    const { t } = useTranslation("components");
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
                        password: t('auth.errors.passwords_dont_match'),
                        repeatPassword: t('')
                    });
                } else if (password.length < config.minPasswordLength) {
                    setErrors({
                        password: t('auth.errors.min_password_length_wrong', {value: config.minPasswordLength}),
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
                email: t('auth.errors.empty_email')
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
                        title: t('auth.errors.base_title'),
                        message: error.toString()
                    });

                });
        }

        setErrors(oErrors);
    };

    const submitLoginForm = async event => {
        event.preventDefault();

        let oErrors = {};

        if (password.length <= 7)
            oErrors = {
                password: t('auth.errors.empty_password')
            };

        if (Object.entries(oErrors).length === 0) {

            setShowLoader(true);

            login({ email, password, setErrors, setStatus })
                .then((response) => {
                    setShowLoader(false);
                    refresh();

                    if (response === true && props?.reloadAfterSignin) {
                        router.reload();
                    }
                });
        }

        setErrors(oErrors);
    };

    const submitRegForm = async event => {
        event.preventDefault();

        const oErrors = {};

        if (name.length <= 2)
            oErrors['name'] = t('auth.errors.empty_name');

        if (password.length <= 0 || repeatPassword.length <= 0)
            oErrors['password'] = t('auth.errors.set_password_new_account');


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
                email: t('auth.errors.empty_email')
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
                    title: t('auth.errors.base_title'),
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
                    <div className="auth__title">{t('auth.authorized.title')}</div>
                    <div className="auth__subtitle">{t('auth.authorized.description_p1')} <a href="#" onClick={submitLogout}>{t('auth.authorized.description_p2')}</a>.</div>
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
                    <div className="auth__title">{t('auth.signin.title')}</div>
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
                            colored
                            loading={showLoader}
                            onClick={checkAvaliableEmail}
                        >
                            {t('auth.signin.next_with_email')}
                        </Button>
                        <Button
                            variant="outlined"
                            size="medium"
                            type="button"
                            colored
                            onClick={() => setAction('forgotPassword')}
                        >
                            {t('auth.signin.forgot_password')}
                        </Button>
                    </div>
                </div>
                <div className="text-note">
                    <PolicyText
                        description={t('auth.policy.description')}
                        link1="/policy"
                        title1={t('auth.policy.title1')}
                        link2="/policy"
                        title2={t('auth.policy.title2')}
                    />
                </div>
            </div>
            }

            {action === 'setPassword' &&
            <div className="auth">
                <div className="auth__head">
                    <div className="auth__title">{t('auth.signin.title')}</div>
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
                            label={t("auth.field.password")}
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
                            colored
                            loading={showLoader}
                            onClick={submitLoginForm}
                        >
                            {t('auth.signin.button')}
                        </Button>
                        <Button
                            variant="outlined"
                            size="medium"
                            type="button"
                            colored
                            onClick={() => setAction('forgotPassword')}
                        >
                            {t('auth.signin.forgot_password')}
                        </Button>
                    </div>
                </div>
            </div>
            }

            {action === 'createNewAccount' &&
            <div className="auth">
                <div className="auth__head">
                    <div className="auth__title">{t("auth.signup.title")}</div>
                    <div className="auth__subtitle">{t('auth.signup.description', {minPasswordLength: config.minPasswordLength})}</div>
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
                            label={t("auth.field.name")}
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
                            label={t("auth.field.password")}
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
                            label={t("auth.field.repeat_password")}
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
                            colored
                            onClick={submitRegForm}
                            loading={showLoader}
                        >
                            {t('auth.signup.button')}
                        </Button>

                    </div>
                </div>

                <div className="text-note">
                    <PolicyText
                        description={t('auth.policy.description')}
                        link1="/policy"
                        title1={t('auth.policy.title1')}
                        link2="/policy"
                        title2={t('auth.policy.title2')}
                    />
                </div>

            </div>
            }

            {action === 'needEmailConfirm' &&
            <div className="auth">
                <div className="auth__head">
                    <div className="auth__title">{t('auth.confirm_signup.title')}</div>
                    <div className="auth__subtitle">{t('auth.confirm_signup.description', {email: email})}</div>
                </div>
                <div className="form">

                    <div className="form__group form__group--btn">
                        <Button
                            variant="filled"
                            size="medium"
                            type="button"
                            colored
                            onClick={refresh}
                        >
                            {t('auth.confirm_signup.button')}
                        </Button>

                    </div>
                </div>

                <div className="text-note">
                    <PolicyText
                        description={t('auth.policy.description')}
                        link1="/policy"
                        title1={t('auth.policy.title1')}
                        link2="/policy"
                        title2={t('auth.policy.title2')}
                    />
                </div>
            </div>
            }

            {action === 'successAuth' &&
            <div className="auth">
                <div className="auth__head">
                    <div className="auth__title">{t("auth.success_auth.title")}</div>
                    <div className="auth__subtitle">{t("auth.success_auth.description")}</div>
                </div>
                <div className="form">
                    <div className="form__group form__group--btn">
                        <Button
                            variant="filled"
                            size="medium"
                            type="button"
                            colored
                            onClick={refresh}
                        >
                            {t("auth.success_auth.button")}
                        </Button>
                    </div>
                </div>
            </div>
            }

            {action === 'forgotPassword' &&
            <div className="auth">
                <div className="auth__head">
                    <div className="auth__title">{t('auth.forgot_password.title')}</div>
                    <div className="auth__subtitle">
                        {t('auth.forgot_password.description')}
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
                            label={t('auth.field.email')}
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
                            colored
                            onClick={submitForgotPasswordForm}
                            loading={showLoader}
                        >
                            {t("auth.forgot_password.button_send")}
                        </Button>

                        <Button
                            variant="outlined"
                            size="medium"
                            type="button"
                            colored
                            onClick={() => setAction('')}
                        >
                            {t("auth.forgot_password.button_rembered")}
                        </Button>

                    </div>
                </div>
            </div>
            }

            {action === 'forgotPasswordConfirm' &&
            <div className="auth">
                <div className="auth__head">
                    <div className="auth__title">{t("auth.confirm_forgot.title")}</div>
                    <div className="auth__subtitle">{t("auth.confirm_forgot.description", {email: email})}</div>
                </div>
                <div className="form">

                    <div className="form__group form__group--btn">
                        <Button
                            variant="filled"
                            size="medium"
                            type="button"
                            colored
                        >
                            {t("auth.confirm_forgot.button")}
                        </Button>

                    </div>
                </div>

                <div className="text-note">
                    <PolicyText
                        description={t('auth.policy.description')}
                        link1="/policy"
                        title1={t('auth.policy.title1')}
                        link2="/policy"
                        title2={t('auth.policy.title2')}
                    />
                </div>
            </div>
            }
        </>
    );



};

export default Auth;