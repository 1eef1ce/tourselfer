import {Flag} from '@components/icons';
import Link from 'next/link';
import React, {useState} from 'react';

const TopBanner = () => {
    const bgColor = '#4FB4A2';
    const [showBanner, setShowBanner] = useState<boolean>(true);
    const onClick = () => setShowBanner(false);

    return (
        <>
        {showBanner && (
            <div className="top-banner" style={{backgroundColor: bgColor}}>
                <div className="icon top-banner__close" onClick={onClick}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 10.5856L16.2426 6.34302L17.6565 7.75758L13.414 12.0002L17.6565 16.2427L16.2426 17.6567L12 13.4141L7.75723 17.6569L6.34328 16.2424L10.586 11.9996L6.34306 7.75721L7.75703 6.34323L12 10.5856Z"
                            fill="white"/>
                    </svg>
                </div>
                <div className="container top-banner__container">
                    <div className="icon top-banner__icon">
                        <Flag/>
                    </div>
                    <div className="top-banner__text">
                        Теплые скидки на туры в Италию! -50% на все туры итальянских городов. Только в марте!
                    </div>
                    <Link href="#">
                        <a className="btn top-banner__btn">Подробнее</a>
                    </Link>
                </div>
            </div>
        )}
        </>
    );
};

export default TopBanner;
