import {User} from '@components/icons';
import {Modal} from '@components/ui';
import {useModal} from '@lib/hooks/useModal';
import {Auth} from '@components/auth';
import { useTranslation } from 'next-i18next';
import { useAuth } from '../../../hooks/auth';

const SignIn = () => {
    const { isShown, toggle } = useModal();
    const {t} = useTranslation('components');

    const { user, isLoadingUserData, isAuthorize } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    });

    return (
        <>
            {!isAuthorize &&
            <>
                <div className="header-links__link" onClick={toggle}>
                    <span className="icon header-links__icon">
                        <User />
                    </span>
                    <span>{t('header.link.signIn')}</span>
                </div>

                <Modal
                    isShown={isShown}
                    hide={toggle}
                >
                    <Auth/>
                </Modal>
            </>
            }

            {isAuthorize && 
                <>
                    <div className="header-links__link">
                        <span className="icon header-links__icon">
                            <User />
                        </span>
                        <span>{user.data.name}</span>
                    </div>
                </>
            }
        </>
    );
};

export default SignIn;