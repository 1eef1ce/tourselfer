import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {RatingNumber} from '@components/ui';
import {Avatar, UserName} from '@components/common';
import {Crown, Man, MapPin} from '@components/icons';

const User = ({user, userType}) => {
    return (
        <div className={`user user--${userType}`}>
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
                <div className="user__name">{user.name + " " + user.last_name}</div>
                <div className="user__status">Professional author</div>
            </div>
        </div>
    );
};


const RouteCard = ((props) => {
    
    const route = props?.route;

    return (
        <Link href={props.link}>
            <a
                className={'route-item'}
            >
                
                <div className={'route-content'}>
                    <RatingNumber value={route.rating}/>
                    <div className="routes__user user user--small">
                        <div className="user__img">
                            <Avatar user={route.author} />
                        </div>
                        <UserName user={route.author}/>
                    </div>
                    <Image src={route.picture} alt="" title="" layout="fill"/>
                </div>
                <div className='route-desc'>
                    <div className='route-desc-left'>
                        {route?.params && (
                            <div className={'route-params'}>Длительность, стоимость, вид транспорта</div>
                        )}
                        <span className='routes-title'>{route.title}</span>
                    </div>
                    <div className={'route-desc-right'}>
                        {!!route.super_place && route.super_place === true &&
                            <div className="route-mark">
                                <div className="icon route-mark__icon">
                                    <MapPin />
                                </div>
                                <div className="route-mark__text">super place</div>
                            </div>
                        }
                    </div>
                </div>
            </a>
        </Link>
    );
});

export default RouteCard;