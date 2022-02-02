import Image from 'next/image';
import Link from 'next/link';
import {Crown, Man, MapPin, MapPinGray} from '@components/icons';
import {Button} from '@components/ui';
import {Avatar} from '@components/common';

export default function Routes() {
    return (
        <div className="routes">
            <div className="routes__items">
                <div className="routes__item">
                    <div className="routes__img">
                        <Image src="/images/route-1.jpg" alt="route" title="" layout="fill"/>
                        <div className="rating routes__rating">
                            <div className="rating__number">4.5</div>
                        </div>
                        <div className="routes__user user user--white user--small">
                            <div className="user__img">
                                <div className="icon user__icon">
                                    <Crown />
                                </div>
                                <Avatar/>
                            </div>
                            <div>
                                <div className="user__name">Tatiana Sidorenko</div>
                                <div className="user__status">Professional author</div>
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
                <div className="routes__item">
                    <div className="routes__img">
                        <Image src="/images/route-2.jpg" alt="route" title="" layout="fill"/>
                        <div className="rating routes__rating">
                            <div className="rating__number">4.5</div>
                        </div>
                        <div className="routes__user user user--white user--small">
                            <div className="user__img">
                                <div className="icon user__icon">
                                    <Crown />
                                </div>
                                <Avatar/>
                            </div>
                            <div>
                                <div className="user__name">Tatiana Sidorenko</div>
                                <div className="user__status">Professional author</div>
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
                                <MapPinGray />
                            </div>
                        </div>
                    </div>
                    <Link href="#">
                        <a className="routes__title">Industrial Berlin looooooooooooong title</a>
                    </Link>
                </div>
            </div>
            <div className="routes__more">
                <Button className="btn btn--alt">See more</Button>
            </div>
        </div>
    );
}