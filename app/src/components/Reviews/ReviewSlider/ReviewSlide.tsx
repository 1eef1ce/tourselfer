import Link from 'next/link';
import {Avatar, UserName} from '@components/common';
import {Rating} from '@components/ui';
import {ArrowRight, Quotes} from '@components/icons';

const ReviewSlide = () => {
    return (
        <div className="reviews__item">
            <div className="user">
                <div className="user__img">
                    <div className="icon user__icon">
                        <Quotes />
                    </div>
                    <Avatar/>
                </div>
                <UserName/>
            </div>
            <div className="rating reviews__rating">
                <div className="rating__number">4.0</div>
                <Rating value={4} />
            </div>
            <div className="reviews__content">
                <div className="reviews__block reviews__block--first">
                    <span>Recommends a route: </span>
                    <span className="reviews__text">Yes</span>
                </div>
                <div className="reviews__block">
                    <span>Liked:</span>
                    <span className="reviews__text">
                        Sights. Food. The nearest stops and transport. Free Wi-Fi. Restrooms. Opening
                        hours of museums, exhibitions, shopping centers ... Rely on the navigator -
                        it is up to date with the latest information.
                    </span>
                </div>
                <div className="reviews__block">
                    <span>Not like:</span>
                    <span className="reviews__text">Sights. Food.</span>
                </div>
            </div>
            <Link href="#">
                <a className="reviews__link link link--arrow link--color">
                    <span>Entire review</span>
                    <span className="icon">
                        <ArrowRight />
                    </span>
                </a>
            </Link>
        </div>
    );
};

export default ReviewSlide;
