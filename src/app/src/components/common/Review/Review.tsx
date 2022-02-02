import Link from 'next/link';
import Image from 'next/image';
import {Avatar} from '@components/common';

export default function Review() {
  return (
      <div className="review">
          <div className="review__img">
              <Image src="/images/review.jpg" alt="Industrial Berlin" title="" layout="fill"/>
              <div className="review__user user user--white user--medium">
                  <div className="user__img">
                      <Avatar/>
                  </div>
                  <div>
                      <div className="user__status">Seller</div>
                      <div className="user__name">Muller Schneider</div>
                  </div>
              </div>
          </div>
          <div className="review__content">
              <div className="rating review__rating">
                  <div className="rating__number">4.5</div>
              </div>
              <div className="review__title title-2">Industrial Berlin</div>
              <div className="review__description">
                  You can start at any time, take time out, deviate from the route. Nobody adjusts,
                  does not limit intime. If you like the location - stay late, not interested -
                  feel free to move on!
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
                  <a className="btn btn--large btn--fill" href="javascript:void(0)">Buy route</a>
                  <Link href="#">
                      <a className="link link--color">Learn more</a>
                  </Link>
              </div>
          </div>
      </div>
  );
}
