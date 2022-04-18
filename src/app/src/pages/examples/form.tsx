import React, {useState} from 'react';
import Head from 'next/head';
import {Breadcrumbs, Layout} from '@components/common';
import {Button, Checkbox, Input, InputPassword, Radio, SelectField, Textarea} from '@components/ui';
import {Formik, Form} from 'formik';
import * as Yup from "yup";

export default function ExampleForm() {

    const validationSchema = Yup.object({
        exampleText: Yup.string()
            .required('Required'),
        exampleEmail: Yup.string()
            .email('Invalid email')
            .required('Required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
        exampleTextarea: Yup.string()
            .matches(/.*\S.*/, 'Empty')
            .required('Required'),
        exampleDate: Yup.array()
            .min(1, 'Required')
            .of(
                Yup.object({
                    label: Yup.string().required(),
                    value: Yup.string().required(),
                })
            ),
        exampleRadio: Yup.string()
            .required('Required'),
        exampleCheckbox1: Yup.boolean()
            .oneOf([true], 'Required')
    });

    const initialValues = {
        exampleText: '',
        exampleEmail: '',
        password: '',
        confirmPassword: '',
        exampleTextarea: '',
        exampleDate: [],
        exampleRadio: '',
        exampleCheckbox1: false
    };

    return (
        <Layout>
            <Head>
                <title>Form</title>
            </Head>

            <div className="container examples">
                <Breadcrumbs/>
                <h1 className="title-1">Form</h1>

                <div style={{margin: "1em 0"}}>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            alert(JSON.stringify(values, null, 2));
                        }}
                    >
                        {({
                              values,
                              errors,
                              touched,
                              getFieldProps,
                              handleBlur,
                              setFieldValue
                          }) => (
                            <Form className="form examples__form" noValidate>
                                <div className="form__title">Text</div>
                                <div className="form__row">
                                    <Input
                                        className={"form__input" + (touched.exampleText && errors.exampleText ? ' error' : '')}
                                        id="exampleText"
                                        name="exampleText"
                                        type="text"
                                        label="Text"
                                        mask="99/99/99"
                                        maskPlaceholder="-"
                                        alwaysShowMask
                                        required
                                        {...getFieldProps('exampleText')}
                                    />
                                    {touched.exampleText && errors.exampleText ? (
                                        <div className="form__error">{errors.exampleText}</div>
                                    ) : null}
                                </div>

                                <div className="form__title">Email</div>
                                <div className="form__row">
                                    <Input
                                        className={"form__input" + (touched.exampleEmail && errors.exampleEmail ? ' error' : '')}
                                        id="exampleEmail"
                                        name="exampleEmail"
                                        type="email"
                                        label="Email"
                                        required
                                        {...getFieldProps('exampleEmail')}
                                    />
                                    {touched.exampleEmail && errors.exampleEmail ? (
                                        <div className="form__error">{errors.exampleEmail}</div>
                                    ) : null}
                                </div>

                                <div className="form__title">Password</div>
                                <div className="form__row">
                                    <InputPassword
                                        className={"form__input" + (touched.password && errors.password ? ' error' : '')}
                                        id="password"
                                        name="password"
                                        label="Password"
                                        required
                                        {...getFieldProps('password')}
                                    />
                                    {touched.password && errors.password ? (
                                        <div className="form__error">{errors.password}</div>
                                    ) : null}
                                </div>
                                <div className="form__row">
                                    <InputPassword
                                        className={"form__input" + (touched.confirmPassword && errors.confirmPassword ? ' error' : '')}
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        label="Confirm password"
                                        required
                                        {...getFieldProps('confirmPassword')}
                                    />
                                    {touched.confirmPassword && errors.confirmPassword ? (
                                        <div className="form__error">{errors.confirmPassword}</div>
                                    ) : null}
                                </div>

                                <div className="form__title">Textarea</div>
                                <div className="form__row">
                                    <Textarea
                                        className={"form__input form__textarea" + (touched.exampleTextarea && errors.exampleTextarea ? ' error' : '')}
                                        id="exampleTextarea"
                                        name="exampleTextarea"
                                        label="Comment"
                                        {...getFieldProps('exampleTextarea')}
                                    />
                                    {touched.exampleTextarea && errors.exampleTextarea ? (
                                        <div className="form__error">{errors.exampleTextarea}</div>
                                    ) : null}
                                </div>

                                <div className="form__title">Select</div>
                                <div className="form__row form__row--select">
                                    <SelectField
                                        className={"select" + (touched.exampleDate && errors.exampleDate ? ' error' : '')}
                                        classPrefix="select"
                                        id="exampleDate"
                                        name="exampleDate"
                                        label="Дата доставки"
                                        options={
                                            [
                                                {value: 'today', label: 'Сегодня'},
                                                {value: 'tomorrow', label: 'Завтра'}
                                            ]
                                        }
/*                                        defaultOption={
                                             [
                                                 {value: 'today', label: 'Сегодня'}
                                             ]
                                        }*/
                                        {...getFieldProps('exampleDate')}
                                        //value={values.exampleDate}
                                        onBlur={() => {
                                            handleBlur({target: {name: 'exampleDate'}});
                                        }}
                                        onChange={(option) => {
                                            setFieldValue("exampleDate", option.value);
                                        }}
                                    />
                                    {touched.exampleDate && errors.exampleDate ? (
                                        <div className="form__error">{errors.exampleDate}</div>
                                    ) : null}
                                </div>

                                <div className="form__title">Radio</div>
                                <div className="form__row form__row--radio">
                                    <Radio
                                        className={"radio__input" + (touched.exampleRadio && errors.exampleRadio ? ' error' : '')}
                                        id="exampleRadio1"
                                        name="exampleRadio"
                                        value="Default"
                                        label="Default"
                                        {...getFieldProps('exampleRadio')}
                                        checked={values.exampleRadio === "Default"}
                                        onChange={() => setFieldValue("exampleRadio", "Default")}
                                    />
                                    <Radio
                                        className={"radio__input" + (touched.exampleRadio && errors.exampleRadio ? ' error' : '')}
                                        id="exampleRadio2"
                                        name="exampleRadio"
                                        value="Checked"
                                        label="Checked"
                                        //defaultChecked
                                        {...getFieldProps('exampleRadio')}
                                        checked={values.exampleRadio === "Checked"}
                                        onChange={() => setFieldValue("exampleRadio", "Checked")}
                                    />
                                    <Radio
                                        id="exampleRadio3"
                                        name="exampleRadio"
                                        value="Disabled"
                                        label="Disabled"
                                        disabled
                                        {...getFieldProps('exampleRadio')}
                                    />
                                    {touched.exampleRadio && errors.exampleRadio ? (
                                        <div className="form__error">{errors.exampleRadio}</div>
                                    ) : null}
                                </div>

                                <div className="form__title">Checkbox</div>
                                <div className="form__row">
                                    <Checkbox
                                        className={"checkbox__input" + (touched.exampleCheckbox1 && errors.exampleCheckbox1 ? ' error' : '')}
                                        id="exampleCheckbox1"
                                        name="exampleCheckbox1"
                                        value="agree1"
                                        label="Default"
                                        {...getFieldProps('exampleCheckbox1')}
                                    />
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
                                    {touched.exampleCheckbox1 && errors.exampleCheckbox1 ? (
                                        <div className="form__error">{errors.exampleCheckbox1}</div>
                                    ) : null}
                                </div>

                                <div className="form__row form__row--btn">
                                    <Button
                                        variant="filled"
                                        size="medium"
                                        colored={true}
                                        type="submit"
                                    >
                                        Submit
                                    </Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </Layout>
    );
}