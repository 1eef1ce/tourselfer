import {Button, Input} from '@components/ui';
import Link from 'next/link';

const Callback = () => {
    return (
        <>
            <form className="form">
                <div className="form__row">
                    <Input/>
                </div>
                <div className="form__row">
                    <Input/>
                </div>
                <div className="form__row">
                    <Button className="btn btn--filled btn--medium" type="submit">Заказать звонок</Button>
                </div>
            </form>
            <div className="text-note">
                Нажимая на кнопку, вы соглашаетесь с нашими{' '}
                <Link href="#">
                    <a className="link link--color">Правилами и условиями</a>
                </Link>
                {' '}и{' '}
                <Link href="">
                    <a className="link link--color">Положением о конфиденциальности</a>
                </Link>
            </div>
        </>
    );
};

export default Callback;