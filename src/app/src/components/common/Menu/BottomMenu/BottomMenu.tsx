import Link from 'next/link';
import {Heart, Impression, Routes, SearchIcon, User} from '@components/icons';

const BottomMenu = () => {
    return (
        <div className="bottom-menu">
            <Link href="#">
                <a className="bottom-menu__item">
                    <div className="bottom-menu__icon icon">
                        <SearchIcon/>
                    </div>
                    <div className="bottom-menu__title">Search</div>
                </a>
            </Link>
            <Link href="#">
                <a className="bottom-menu__item">
                    <div className="bottom-menu__icon icon">
                        <Heart/>
                    </div>
                    <div className="bottom-menu__title">Favorites</div>
                </a>
            </Link>
            <Link href="#">
                <a className="bottom-menu__item">
                    <div className="bottom-menu__icon icon">
                        <Routes/>
                    </div>
                    <div className="bottom-menu__title">Routes</div>
                </a>
            </Link>
            <Link href="#">
                <a className="bottom-menu__item">
                    <div className="bottom-menu__icon icon">
                        <Impression/>
                    </div>
                    <div className="bottom-menu__title">Impression</div>
                </a>
            </Link>
            <Link href="#">
                <a className="bottom-menu__item">
                    <div className="bottom-menu__icon icon">
                        <User/>
                    </div>
                    <div className="bottom-menu__title">Profile</div>
                </a>
            </Link>
        </div>
    );
};

export default BottomMenu;