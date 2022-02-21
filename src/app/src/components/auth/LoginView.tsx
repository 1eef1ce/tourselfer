import {Button, Input} from '@components/ui';
import Link from 'next/link';
import {SocFacebook, SocGoogle, SocApple} from '@components/icons';
import {ForgotPassword} from '@components/auth';
import {Modal} from '@components/ui';
import {useModal} from '@lib/hooks/useModal';

const LoginView = () => {
    const {isShown, toggle} = useModal();

    return (
        <>
            <form className="form">
                <div className="form__row">
                    <Input/>
                </div>
                <div className="form__row">
                    <Button
                        variant="filled"
                        size="medium"
                        type="submit"
                    >
                        Войти
                    </Button>
                    <Button
                        variant="outlined"
                        size="medium"
                        type="button"
                        onClick={toggle}
                    >
                        Забыли пароль?
                    </Button>
                </div>
            </form>
            <div className="social-auth">
                <div className="text-note">Войти через социальные сети</div>
                <div className="social-auth__items">
                    <button className="social-auth__item">
                        <span className="social-auth__icon icon"><SocFacebook/></span>
                    </button>
                    <button className="social-auth__item">
                        <span className="social-auth__icon icon"><SocGoogle/></span>
                    </button>
                    <button className="social-auth__item">
                        <span className="social-auth__icon icon"><SocApple/></span>
                    </button>
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

            <Modal
                isShown={isShown}
                hide={toggle}
                width="small"
                modalTitle="Забыли пароль?"
                modalSubtitle="Ничего страшного! Мы отправим вам ссылку для смены пароля. Введите адрес электронной почты, с которой вы заходите на Booking.com."
                modalContent={
                    <ForgotPassword/>
                }
            />
        </>
    );
};

export default LoginView;