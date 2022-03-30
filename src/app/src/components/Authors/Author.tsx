import React from 'react';
import {RoutesIcon} from '@components/icons';
import {Button} from '@components/ui';

interface AuthorProps {
    name: string;
    professionalAuthor?: boolean;
    rating: number;
    country: string;
    routesNumber: number;
    authorDetailPage?: boolean;
}

const Author:React.FC<AuthorProps> = ({
    name,
    professionalAuthor,
    rating,
    country,
    routesNumber,
    authorDetailPage
                                      }) => {
    return (
        <div className="user user--profile">
            <div className="user__img">
                {professionalAuthor && (
                    <div className="icon user__icon">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12L3 7L6 8L8 3L10 8L13 7L11 12H5Z" fill="white"/>
                        </svg>
                    </div>
                )}
                <img src="/images/user.jpg" alt="" title=""/>
            </div>
            <div className="user__content">
                <div className="user__header">
                    {!authorDetailPage && (<div className="user__name">{name}</div>)}
                    <div className="user__rating">
                        <div className="rating-number rating-number--small">{rating}</div>
                    </div>
                </div>
                <div className="user__status">
                    {professionalAuthor && <span>Professional author</span>}
                    {(!authorDetailPage && professionalAuthor && country) && (', ')}
                    {!authorDetailPage && (<span>{country}</span>)}
                </div>
                {!authorDetailPage && (
                <div className="user__tag">
                    <Button
                        variant='filled'
                        squared={true}
                        isStartIcon={true}
                        startIcon={<RoutesIcon/>}
                    >
                        {routesNumber} routes
                    </Button>
                </div>
                )}
            </div>
        </div>
    );
};

export default Author;