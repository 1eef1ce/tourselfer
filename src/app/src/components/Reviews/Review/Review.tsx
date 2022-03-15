import Link from 'next/link';
import Image from 'next/image';
import {Avatar, UserName} from '@components/common';
import { useTranslation } from 'next-i18next';

export default function Review({item}) {

    const { t } = useTranslation("components");

    return (
      <div className="review">
          <div className="review__img">
              <Image src={item.picture} alt={item.title} title={item.title} layout="fill"/>
              <div className="review__user user user--white user--medium">
                  <div className="user__img">
                      <Avatar user={item.author} />
                  </div>
                  <UserName user={item.author}/>
              </div>
          </div>
          <div className="review__content">
              <div className="rating review__rating">
                  <div className="rating__number">{item.rating}</div>
              </div>
              <div className="review__title title-2">{item.title}</div>
              <div className="review__description">
                  {item.preview_description}
              </div>
              <div className="review__chars chars">
                  <div className="chars__row">
                      <div className="chars__name">Number of points</div>
                      <div className="chars__value">24</div>
                  </div>
                  <div className="chars__row">
                      <div className="chars__name">Travel time</div>
                      <div className="chars__value">6 hours</div>
                  </div>
                  <div className="chars__row">
                      <div className="chars__name">More Characteristics</div>
                      <div className="chars__value">yes</div>
                  </div>
              </div>
              <div className="review__block">
                  <div className="review__cost">3 €</div>
                  <div className="review__cost-old">5 €</div>
              </div>
              <div className="review__buttons">
                  <a className="btn btn--large btn--filled" href="javascript:void(0)">{t('button.buy_route')}</a>
                  <Link href={"route/" + item.code}>
                      <a className="link link--color">{t('links.more')}</a>
                  </Link>
              </div>
          </div>
      </div>
  );
}
