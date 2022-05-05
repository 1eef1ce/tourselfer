import React from 'react';
import {Button, Input, SelectField, Number} from '@components/ui';
import {Formik, Form} from 'formik';

export default function PersonalForm() {

    const initialValues = {
        exampleEmail: 'email@site.ru',
    };

    return (
        <div>

            <Formik
                initialValues={initialValues}
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
                <Form className="form personal-form" noValidate>
                    <div className="form__row">
                        <div className="form__item">
                            <Input
                                className={"form__input"}
                                id="exampleText"
                                name="exampleText"
                                type="text"
                                label="First name"
                                {...getFieldProps('exampleText')}
                            />
                        </div>
                        <div className="form__item">
                            <Input
                                className={"form__input"}
                                id="exampleText"
                                name="exampleText"
                                type="text"
                                label="Last name"
                                {...getFieldProps('exampleText')}
                            />
                        </div>                      
                    </div>
                    
                    <div className="form__row">
                        <div className="form__item">
                            <Input
                                className={"form__input"}
                                id="exampleEmail"
                                name="exampleEmail"
                                type="email"
                                label="Email"
                                {...getFieldProps('exampleEmail')}
                            />                                 
                        </div>
                        <div className="form__item">
                            <Number/>
                        </div>
                    </div>

                    <div className="form__row">
                        <div className="form__item">
                            <SelectField
                                className={"select"}
                                classPrefix="select"
                                id="Gender"
                                name="Gender"
                                label="Gender"
                                defaultOption={{value: 'male', label: 'Male'}}
                                options={
                                    [
                                        {value: 'male', label: 'Male'},
                                        {value: 'female', label: 'Female'},
                                        {value: 'non-binary', label: 'Non-binary'},
                                        {value: 'prefer not to answer', label: 'Prefer not to answer'}
                                    ]
                                }
                            />
                        </div>
                        <div className="form__item date-of-birth">
                            <Input
                                className={"form__input month"}
                                id="exampleText"
                                name="exampleText"
                                type="text"
                                label="Date of Birth"
                                placeholder="MM"
                                {...getFieldProps('exampleText')}
                            />
                            <Input
                                className={"form__input day"}
                                id="exampleText"
                                name="exampleText"
                                type="text"
                                placeholder="DD"
                                {...getFieldProps('exampleText')}
                            />
                            <Input
                                className={"form__input year"}
                                id="exampleText"
                                name="exampleText"
                                type="text"
                                placeholder="YYYY"
                                {...getFieldProps('exampleText')}
                            />
                        </div>
                    </div>
                                
                    <div className="form__row">
                        <div className="form__item">
                            <SelectField
                                className={"select"}
                                classPrefix="select"
                                id="Citizenship"
                                name="Citizenship"
                                label="Citizenship"
                                defaultOption={{value: 'male', label: 'Male'}}
                                options={
                                    [
                                        {value: 'male', label: 'Male'},
                                        {value: 'female', label: 'Female'},
                                        {value: 'non-binary', label: 'Non-binary'},
                                        {value: 'prefer not to answer', label: 'Prefer not to answer'}
                                    ]
                                }
                            />
                        </div>
                    </div>

                    <div className="form__row form__row--btn">
                        <Button
                            variant="filled"
                            size="large"
                            colored={true}
                            type="submit"
                        >
                            Save changes
                        </Button>
                    </div>
                </Form>
                )}
            </Formik>
        </div>
    );
}