import {User} from '@components/icons';
import {Modal} from '@components/ui';
import {useModal} from '@lib/hooks/useModal';
import {Auth} from '@components/auth';

const SignIn = () => {
    const { isShown, toggle } = useModal();

    return (
        <>
            <div className="header-nav__link" onClick={toggle}>
                <span className="icon header-nav__icon">
                    <User />
                </span>
                <span>Sign in</span>
            </div>
            <Modal
                isShown={isShown}
                hide={toggle}
            >
                <Auth/>
            </Modal>
        </>
    );
};

export default SignIn;