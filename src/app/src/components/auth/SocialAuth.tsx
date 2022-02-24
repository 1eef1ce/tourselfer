import {SocFacebook, SocGoogle, SocApple} from '@components/icons';

const SocialAuth = () => {
    return (
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
    );
};

export default SocialAuth;