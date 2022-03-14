import React from 'react';
import Head from 'next/head';
import {Breadcrumbs, Layout, Searchbar} from '@components/common';
import {Button, Checkbox, Input, InputPassword, PasswordsContainer, Radio, Textarea} from '@components/ui';
import { useFormik } from 'formik';
import * as Yup from "yup";

export default function ExampleForm() {

    const validationSchema = Yup.object({
        exampleText: Yup.string()
            .required('Required'),
        exampleEmail: Yup.string()
            .email('Invalid email')
            .required('Required'),
        exampleCheckbox1: Yup.boolean()
            .oneOf([true], 'Required')
    });

    const formik = useFormik({
        initialValues: {
            exampleText: '',
            exampleEmail: '',
            exampleCheckbox1: false
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <Layout>
            <Head>
                <title>Form</title>
            </Head>

            <div className="container examples">
                <Breadcrumbs/>
                <h1 className="title-1">Form</h1>

                <div style={{margin: "1em 0"}}>
                    <form className="form examples__form" onSubmit={formik.handleSubmit}>
                        <div className="form__title">Text</div>
                        <div className="form__row">
                            <Input
                                className={"form__input" + (formik.touched.exampleText && formik.errors.exampleText ? 'error' : '')}
                                id="exampleText"
                                name="exampleText"
                                type="text"
                                label="Text"
                                //required
                                //pattern="[^0-9]"
                                //requiredMessage="Please complete this field"
                                //patternMessage="This field must not contain numbers"
                                {...formik.getFieldProps('exampleText')}
                            />
                            {formik.touched.exampleText && formik.errors.exampleText ? (
                                <div className="form__error">{formik.errors.exampleText}</div>
                                ) : null}
                        </div>

                        <div className="form__title">Email</div>
                        <div className="form__row">
                            <Input
                                className={"form__input" + (formik.touched.exampleEmail && formik.errors.exampleEmail ? 'error' : '')}
                                id="exampleEmail"
                                name="exampleEmail"
                                type="email"
                                label="Email"
                                //required
                                //requiredMessage="Please complete this field"
                                //pattern="^(.+)@(.+)$"
                                //patternMessage="Email must contain an '@'"
                                {...formik.getFieldProps('exampleEmail')}
                            />
                            {formik.touched.exampleEmail && formik.errors.exampleEmail ? (
                                <div className="form__error">{formik.errors.exampleEmail}</div>
                            ) : null}
                        </div>

                        <div className="form__title">Password</div>
                        <div className="form__row">
                            <InputPassword
                                id="examplePassword"
                                name="examplePassword"
                                label="Password"
                                required
                                requiredMessage="Please complete this field"
                                //pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]"
                                patternMessage="Password must contain at least one letter and one number"
                                //minLength={8}
                                minLengthMessage="Password must contain minimum eight characters"
                            />
                        </div>

                        <div className="form__title">Confirm password</div>
                        <PasswordsContainer
                            id="password"
                            name="password"
                            label="Password"
                            confirmId="passwordRepeat"
                            confirmName="passwordRepeat"
                            confirmLabel="Repeat password"
                            required
                            requiredMessage="Please complete this field"
                            //minLength={6}
                            minLengthMessage="Password must contain minimum six characters"
                        />

                        <div className="form__title">Textarea</div>
                        <div className="form__row">
                            <Textarea
                                id="exampleTextarea"
                                name="exampleTextarea"
                                label="Comment"
                                //required
                                //requiredMessage="Please complete this field"
                            />
                        </div>

                        <div className="form__title">Select</div>
                        <div className="form__row form__row--select">
                            <Input
                                isSelect
                                classPrefix="select"
                                isFilter={false}
                                id="exampleDate"
                                name="exampleDate"
                                label="Дата доставки"
                                options={
                                    [
                                        {value: 'today', label: 'Сегодня'},
                                        {value: 'tomorrow', label: 'Завтра'}
                                    ]
                                }
                                defaultOption={
                                    [
                                        {value: 'today', label: 'Сегодня'}
                                    ]
                                }
                            />
                        </div>

                        <div className="form__title">Radio</div>
                        <div className="form__row form__row--radio">
                            <Radio
                                id="exampleRadio1"
                                name="exampleRadio"
                                value="Default"
                                label="Default"
                            />
                            <Radio
                                id="exampleRadio2"
                                name="exampleRadio"
                                value="Checked"
                                label="Checked"
                                //defaultChecked
                            />
                            <Radio
                                id="exampleRadio3"
                                name="exampleRadio"
                                value="Disabled"
                                label="Disabled"
                                disabled
                            />
                        </div>

                        <div className="form__title">Checkbox</div>
                        <div className="form__row">
                            <Checkbox
                                className={"checkbox__input" + (formik.touched.exampleEmail && formik.errors.exampleEmail ? 'error' : '')}
                                id="exampleCheckbox1"
                                name="exampleCheckbox1"
                                value="agree1"
                                label="Default"
                                {...formik.getFieldProps('exampleCheckbox1')}
                            />
                            {formik.touched.exampleCheckbox1 && formik.errors.exampleCheckbox1 ? (
                                <div className="form__error">{formik.errors.exampleCheckbox1}</div>
                            ) : null}
                            <Checkbox
                                id="exampleCheckbox2"
                                name="exampleCheckbox2"
                                value="agree2"
                                label="Checked"
                                defaultChecked
                                required
                            />
                            <Checkbox
                                id="exampleCheckbox3"
                                name="exampleCheckbox3"
                                value="agree3"
                                label="Disabled"
                                disabled
                            />
                        </div>

                        <div className="form__row form__row--btn">
                            <Button
                                variant="filled"
                                size="medium"
                                type="submit"
                            >
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>

                <h2 className="title-2">Search</h2>
                <div style={{margin: "1em 0"}}>
                    <Searchbar/>
                </div>
            </div>
        </Layout>
    );
}