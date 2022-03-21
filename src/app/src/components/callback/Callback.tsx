import {Button, Input} from '@components/ui';
import {PolicyText} from '@components/common';

const Callback = () => {
    return (
        <>
            <form className="form">
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
                <div className="form__row form__row--btn">
                    <Button
                        variant="filled"
                        size="medium"
                        type="submit"
                    >
                        Заказать звонок
                    </Button>
                </div>
            </form>
            <div className="text-note">
                <PolicyText
                    description="Входя в аккаунт или создавая новый, вы соглашаетесь с нашими"
                    link1="/policy"
                    title1="Правилами и условиями"
                />
            </div>
        </>
    );
};

export default Callback;