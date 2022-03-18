import Link from 'next/link';
import {Avatar, UserName} from '@components/common';
import {Rating} from '@components/ui';
import {ArrowRight, Quotes} from '@components/icons';

import { useTranslation } from 'next-i18next';

const ReviewSlide = ({item, route}) => {

    const { t } = useTranslation("components");

    return (
        <div className="reviews__item">
            <div className="user">
                <div className="user__img">
                    <div className="icon user__icon">
                        <Quotes />
                    </div>
                    <Avatar user={item.author}/>
                </div>
                <UserName user={item.author}/>
            </div>
            <div className="rating reviews__rating">
                <div className="rating__number">{item.rating}</div>
                <Rating value={parseFloat(item.rating)} />
            </div>
            <div className="reviews__content">
                <div className="reviews__block reviews__block--first">
                    <span>{t('review.recommended')}</span>
                    <span className="reviews__text">
                        {item.recommends ? t('yes') : t('no')}
                    </span>
                </div>
                {item.positive.length > 10 &&
                <div className="reviews__block">
                    <span>{t('review.liked')}</span>
                    <span className="reviews__text" dangerouslySetInnerHTML={{__html: item.positive}}></span>
                </div>
                }

                {item.negative.length > 10 &&
                <div className="reviews__block">
                    <span>{t('review.not_liked')}</span>
                    <span className="reviews__text" dangerouslySetInnerHTML={{__html: item.negative}}></span>
                </div>
                }
            </div>

            <Link href={"/route/" + route.code + "/reviews/"}>
                <a className="reviews__link link link--arrow link--color">
                    <span>{t('review.more_link')}</span>
                    <span className="icon">
                        <ArrowRight />
                    </span>
                </a>
            </Link>
        </div>
    );
};

export default ReviewSlide;
