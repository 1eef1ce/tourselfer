import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {RatingNumber} from '@components/ui';

const User = ({userType}) => {
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
                <div className="user__name">Tatiana Sidorenko</div>
                <div className="user__status">Professional author</div>
            </div>
        </div>
    );
};

interface RouteCardProps {
    title: string;
    label: boolean;
    params?: boolean;
}

const RouteCard: React.FC<RouteCardProps> = ((props) => {
    const {
        title,
        label = false,
        params = true,
        children,
    } = props;

    return (
        <Link href="#">
            <a
                className={'route-item'}
                {...props}
            >
                <div className={'route-content'}>
                    <RatingNumber value={4.5}/>
                    <User userType='small'/>
                    {children}
                </div>
                <div className='route-desc'>
                    <div className='route-desc-left'>
                        {params && (
                            <div className={'route-params'}>Длительность, стоимость, вид транспорта</div>
                        )}
                        <span className='routes-title'>{title}</span>
                    </div>
                    <div className={'route-desc-right'}>
                        {label && (
                            <div className="route-mark">
                                <div className="icon route-mark__icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" fill="white"></path>
                                <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" fill="url(#paint0_linear_553_4244)"></path>
                                <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" fill="white"></path>
                                <defs><linearGradient id="paint0_linear_553_4244" x1="21" y1="23" x2="-0.64712" y2="5.51537" gradientUnits="userSpaceOnUse"><stop stop-color="#0B97A0"></stop><stop offset="1" stop-color="#AEDEA6"></stop></linearGradient></defs>
                                </svg>
                                </div>
                                <div className="route-mark__text">super place</div>
                            </div>
                        )}
                    </div>
                </div>
            </a>
        </Link>
    );
});

export default RouteCard;