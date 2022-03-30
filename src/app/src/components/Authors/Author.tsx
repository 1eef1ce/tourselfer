import {RoutesIcon} from '@components/icons';
import {Button} from '@components/ui';

type AuthorProps = {
    authorDetailPage?: boolean;
};

const Author = (props:AuthorProps) => {
    return (
        <div className="user user--profile">
            <div className="user__img">
                <div className="icon user__icon">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12L3 7L6 8L8 3L10 8L13 7L11 12H5Z" fill="white"/>
                    </svg>
                </div>
                <img src="/images/user.jpg" alt="" title=""/>
            </div>
            <div className="user__content">
                <div className="user__header">
                    {!props.authorDetailPage && (<div className="user__name">Tatiana Sidorenko</div>)}
                    <div className="user__rating">
                        <div className="rating-number rating-number--small">4.9</div>
                    </div>
                </div>
                <div className="user__status">Professional author{!props.authorDetailPage && (<span>, Japan</span>)}</div>
                {!props.authorDetailPage && (
                <div className="user__tag">
                    <Button
                        variant='filled'
                        squared={true}
                        isStartIcon={true}
                        startIcon={<RoutesIcon/>}
                    >
                        6 routes
                    </Button>
                </div>
                )}
            </div>
        </div>
    );
};

export default Author;