import React from 'react';
import Head from 'next/head';
import {Breadcrumbs, Layout, Searchbar} from '@components/common';
import {Button, Input, InputPassword, SelectField, Textarea} from '@components/ui';

export default function ExampleForm() {
    return (
        <Layout>
            <Head>
                <title>Form</title>
            </Head>

            <div className="container examples">
                <Breadcrumbs/>
                <h1 className="title-1">Form</h1>

                <div style={{margin: "1em 0"}}>
                    <form className="form">
                        <div className="form__title">Text</div>
                        <div className="form__row">
                            <Input
                                type="text"
                                label="Text"
                                required={true}
                            />
                        </div>

                        <div className="form__title">Email</div>
                        <div className="form__row">
                            <Input
                                type="email"
                                label="Email"
                                required={true}
                            />
                        </div>

                        <div className="form__title">Password</div>
                        <div className="form__row">
                            <InputPassword
                                label="Password"
                            />
                        </div>
                        <div className="form__row">
                            <InputPassword
                                label="Repeat password"
                            />
                        </div>

                        <div className="form__title">Textarea</div>
                        <div className="form__row">
                            <Textarea/>
                        </div>

                        <div className="form__title">Select</div>
                        <div className="form__row form__row--select">
                            <SelectField
                                classPrefix={"select"}
                                isFilter={false}
                                id="s_date"
                                label="Дата доставки"
                                options = {
                                    [
                                        {value: 'today', label: 'Сегодня'},
                                        {value: 'tomorrow', label: 'Завтра'}
                                    ]
                                }
                                defaultOption = {
                                    [
                                        {value: 'today', label: 'Сегодня'}
                                    ]
                                }
                            />
                        </div>

                        <div className="form__title">Radio</div>
                        <div className="form__row form__row--radio">
                            <label className="radio">
                                <input className="radio__input" type="radio" name="r1"/>
                                <span className="radio__label">10:00 — 14:00</span>
                            </label>
                            <label className="radio">
                                <input className="radio__input" type="radio" name="r1"/>
                                <span className="radio__label">10:00 — 18:00</span>
                            </label>
                            <label className="radio">
                                <input className="radio__input" type="radio" name="r1"/>
                                <span className="radio__label">10:00 — 22:00</span>
                            </label>
                        </div>

                        <div className="form__title">Checkbox</div>
                        <div className="form__row">
                            <label className="checkbox">
                                <input className="checkbox__input" type="checkbox"/>
                                <span className="checkbox__label">Перезвоните мне для подтверждения заказа</span>
                            </label>
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