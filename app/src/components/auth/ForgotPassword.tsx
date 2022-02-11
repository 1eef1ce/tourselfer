import {Button, Input} from '@components/ui';
import Link from 'next/link';

const ForgotPassword = () => {
    return (
        <>
            <form className="form">
                <div className="form__row">
                    <Input/>
                </div>
                <div className="form__row">
                    <Button className="btn btn--fill btn--submit" type="submit">Отправить ссылку на смену пароля</Button>
                </div>
            </form>
            <div className="text-note">
                Входя в аккаунт или создавая новый, вы соглашаетесь с нашими{' '}
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

export default ForgotPassword;