import {Button, Input} from '@components/ui';
import Link from 'next/link';
import {SocFacebook, SocGoogle, SocApple} from '@components/icons';

const LoginView = () => {
    return (
        <>
            <form className="form">
                <div className="form__row">
                    <Input/>
                </div>
                <div className="form__row">
                    <Button className="btn btn--fill btn--submit" type="submit">Войти</Button>
                    <Button className="btn btn--more btn--submit" type="submit">Забыли пароль?</Button>
                </div>
            </form>
            <div className="social-auth">
                <div className="text-note">Войти через социальные сети</div>
                <div className="social-auth__items">
                    <Button className="social-auth__item">
                        <span className="social-auth__icon icon"><SocFacebook/></span>
                    </Button>
                    <Button className="social-auth__item">
                        <span className="social-auth__icon icon"><SocGoogle/></span>
                    </Button>
                    <Button className="social-auth__item">
                        <span className="social-auth__icon icon"><SocApple/></span>
                    </Button>
                </div>
            </div>
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

export default LoginView;