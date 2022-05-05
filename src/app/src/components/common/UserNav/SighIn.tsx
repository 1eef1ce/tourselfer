import {User} from '@components/icons';
import {Modal} from '@components/ui';
import {useModal} from '@lib/hooks/useModal';
import {Auth} from '@components/Auth';
import { useTranslation } from 'next-i18next';
import { useAuth } from '@hooks/auth';
import Link from 'next/link';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SignIn = () => {
    const { isShown, toggle } = useModal();
    const {t} = useTranslation('components');

    const { user, isLoadingUserData, isAuthorize } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/personal',
    });

    if (isLoadingUserData)
        return (
            <>
            <div className="header-links__link">
                <Skeleton 
                    containerClassName="skeleton-text"
                    style={{width: '100px', height: '25px'}}
                />
                </div>
            </>
        );

    if (isAuthorize)
        return (
            <>
                    <div className="header-links__link">
                        <span className="icon header-links__icon">
                            <User />
                        </span>
                        <span>
                        <Link href={"/personal"}>
                            <a>{user.data.name}</a>
                        </Link>
                        </span>
                    </div>
                </>
        );

    return (
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
    );
};

export default SignIn;