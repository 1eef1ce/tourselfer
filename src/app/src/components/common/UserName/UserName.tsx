const UserName = ({user}) => {
    if (typeof user === 'object')
    {
        return (
            <div className="user__content">
                <div className="user__status">Traveller</div>
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