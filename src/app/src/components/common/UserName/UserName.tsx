import { useTranslation } from 'next-i18next';

const UserName = ({user}) => {

    const { t } = useTranslation("components");

    if (typeof user === 'object')
    {
        return (
            <div className="user__content">
                <div className="user__status">
                    {user.type == 'author' 
                        ? t('user.type_author')
                        : t('user.type_user')
                    }
                </div>
                <div className="user__name">{user.name} {user.last_name}</div>
            </div>
        );
    }
    else
    {
        return (
            <></>
        );
    }
};

export default UserName;