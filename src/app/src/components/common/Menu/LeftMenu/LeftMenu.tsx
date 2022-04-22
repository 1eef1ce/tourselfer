import Link from 'next/link';
import {Heart, Impression, RoutesIcon, SearchIcon, User} from '@components/icons';

const LeftMenu = () => {
    return (
        <div className="left-menu">
            <Link href="#">
                <a className="left-menu__item active">
                    <div className="left-menu__icon routes"></div>
                    <div className="left-menu__text">
                        <span className="left-menu__title">My routes</span>
                        <span className="left-menu__desc">Purchased or received routes</span>
                    </div>
                </a>
            </Link>
            <Link href="#">
                <a className="left-menu__item">
                    <div className="left-menu__icon profile"></div>
                    <div className="left-menu__text">
                        <span className="left-menu__title">Personal</span>
                        <span className="left-menu__desc">Provide personal contact details </span>
                    </div>
                </a>
            </Link>
            <Link href="#">
                <a className="left-menu__item">
                    <div className="left-menu__icon lock"></div>
                    <div className="left-menu__text">
                        <span className="left-menu__title">Login and Security</span>
                        <span className="left-menu__desc">Keep your account secure</span>
                    </div>
                </a>
            </Link>
            <Link href="#">
                <a className="left-menu__item">
                    <div className="left-menu__icon payment"></div>
                    <div className="left-menu__text">
                        <span className="left-menu__title">Payments and payouts</span>
                        <span className="left-menu__desc">Add credit cards to make shopping easier. 
                        Specify payment methods if you are an author.</span>
                    </div>
                </a>
            </Link>
        </div>
    );
};

export default LeftMenu;