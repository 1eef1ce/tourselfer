import React from 'react';
import {Button, Input} from '@components/ui';
import SocialAuth from '@components/auth/SocialAuth';
import {PolicyText} from '@components/common';
import {Formik, Form} from 'formik';
import * as Yup from "yup";

export interface AuthState {
    showAuth: boolean
    showForgot: boolean
}

class Auth extends React.Component<any, AuthState> {
    constructor(props) {
        super(props);
        this.state = {
            showAuth: true,
            showForgot: false
        };
        this.toggleForgot = this.toggleForgot.bind(this);
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

        return (
            <div className="auth">
                {this.state.showAuth && (
                    <>
                        <div className="auth__head">
                            <div className="auth__title">Войдите или создайте аккаунт</div>
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

export default Auth;