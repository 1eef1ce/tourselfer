import {Button, Input, SelectField, Textarea} from '@components/ui';
import Link from 'next/link';
import {PolicyText} from '@components/common';

const FastOrder = () => {
    return (
        <>
            <form className="form">
                <div className="form__title">Доставка</div>
                <div className="form__row">
                    <Input/>
                </div>
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
                <div className="form__row">
                    <label className="checkbox">
                        <input className="checkbox__input" type="checkbox"/>
                        <span className="checkbox__label">Перезвоните мне для подтверждения заказа</span>
                    </label>
                </div>
                <div className="form__title">Получатель заказа</div>
                <div className="form__row">
                    <Input/>
                </div>
                <div className="form__row">
                    <Input/>
                </div>
                <div className="form__row">
                    <Input/>
                </div>
                <div className="form__row">
                    <Textarea/>
                </div>
                <div className="form__row form__row--btn">
                    <Button
                        variant="filled"
                        size="medium"
                        type="submit"
                    >
                        Оформить заказ
                    </Button>
                </div>
            </form>
            <div className="text-note">
                <PolicyText
                    description="Нажимая на «Оформить заказ», вы соглашаетесь с"
                    link1="/policy"
                    title1="условиями оферты"
                    link2="/policy"
                    title2="политикой о конфиденциальности"
                />
            </div>
        </>
    );
};

export default FastOrder;