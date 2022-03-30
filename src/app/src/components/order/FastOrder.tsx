import {Button, Input, SelectField, Textarea} from '@components/ui';
import {PolicyText} from '@components/common';

const FastOrder = () => {
    return (
        <>
            <form className="form">
                <div className="form__title">Доставка</div>
                <div className="form__row">
                    <Input
                        id="address"
                        name="address"
                        label="Адрес"
                        required
                    />
                </div>
                <div className="form__row form__row--select">
                    <SelectField
                        classPrefix="select"
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
                    <Input
                        id="name"
                        name="name"
                        label="Имя"
                        required
                    />
                </div>
                <div className="form__row">
                    <Input
                        id="phone"
                        name="phone"
                        label="Телефон"
                        required
                    />
                </div>
                <div className="form__row">
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        label="Email"
                        required
                    />
                </div>
                <div className="form__row">
                    <Textarea
                        id="comment"
                        name="comment"
                        label="Комментарий"
                    />
                </div>
                <div className="form__row form__row--btn">
                    <Button
                        variant="filled"
                        size="medium"
                        colored={true}
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