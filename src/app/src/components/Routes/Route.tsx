import Image from 'next/image';
import Link from 'next/link';
import {Crown, Man, MapPin} from '@components/icons';
import {Avatar, UserName} from '@components/common';

const Route = () => {
    return (
        <div className="routes__item">
            <div className="routes__img">
                <Image src="/images/route-1.jpg" alt="route" title="" layout="fill"/>
                <div className="routes__content">
                    <div className="rating routes__rating">
                        <div className="rating-number">4.5</div>
                    </div>
                    <div className="routes__user user user--white user--small">
                        <div className="user__img">
                            <div className="icon user__icon">
                                <Crown />
                            </div>
                            <Avatar/>
                        </div>
                        <UserName/>
                    </div>
                </div>
            </div>
            <div className="route-params">
                <div className="route-params__item">
                    <div className="route-params__value">2-3,5</div>
                    <div>Duration</div>
                </div>
                <div className="route-params__item">
                    <div className="route-params__value">$$</div>
                    <div>Costs</div>
                </div>
                <div className="route-params__item">
                    <div className="route-params__value">
                        <div className="icon route-params__icon">
                            <Man />
                        </div>
                    </div>
                    <div>On foot</div>
                </div>
                <div className="route-mark">
                    <div className="icon route-mark__icon">
                        <MapPin />
                    </div>
                    <div className="route-mark__text">super place</div>
                </div>
            </div>
            <Link href="#">
                <a className="routes__title">Industrial Berlin</a>
            </Link>
        </div>
    );
};

export default Route;