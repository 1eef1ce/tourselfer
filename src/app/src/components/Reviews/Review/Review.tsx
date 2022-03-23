import Link from 'next/link';
import Image from 'next/image';
import {Avatar, UserName} from '@components/common';
import { useTranslation } from 'next-i18next';

export default function Review({item}) {

    const { t } = useTranslation("components");

    const props = [];

    if (typeof item.duration.start !== 'undefined')
    {
        if (parseFloat(item.duration.start) > 0 && parseFloat(item.duration.end) > 0)
        {
            const start = Math.round(item.duration.start / 60),
                  end = Math.round(item.duration.end / 60);

            if (start != end)
            {
                props.push({
                    'label': t('route.props.duration'),
                    'value': t('route.props.duration_value_range', {
                        'start': start,
                        'end': end,
                    }) 
                });
            }
            else
            {
                props.push({
                    'label': t('route.props.duration'),
                    'value': t('route.props.duration_value', {
                        'value': start,
                    }) 
                });
            }
        }
        else if (parseFloat(item.duration.start) > 0)
        {
            props.push({
                'label': t('route.props.duration'),
                'value': t('route.props.duration_value', {
                    'value': Math.round(item.duration.start / 60),
                }) 
            });
        }
        
    }

    if (typeof item.locations_count !== 'undefined')
    {
        props.push({
            'label': t('route.props.locations_count'),
            'value': parseInt(item.locations_count)
        });
    }

    if (typeof item.type !== 'undefined' && Array.isArray(item.type))
    {
        const values = [];
        for (const key in item.type) {
            switch(item.type[key])
            {
                case 'foot':
                    values.push(t('route.props.type_foot'));
                    break;

                case 'car':
                    values.push(t('route.props.type_car'));
                    break;

                case 'bus':
                    values.push(t('route.props.type_bus'));
                    break;
            }
        }

        if (values.length > 0)
        {
            props.push({
                'label': t('route.props.type'),
                'value': values.join(' / ')
            });
        }
    }

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

              {props && props.length>0 && props.map(prop => (
                  <div className="chars__row" key={prop.label}>
                    <div className="chars__name">{prop.label}</div>
                    <div className="chars__value">{prop.value}</div>
                </div>
              ))}
              </div>
              {item.price &&
              <div className="review__block">
                  {parseFloat(item.price.current) > 0
                    ? <div className="review__cost" dangerouslySetInnerHTML={{__html: item.price.current_print}}></div>
                    : <div className="review__cost">{t('price.free')}</div>
                  }
                  {parseFloat(item.price.old) > 0 &&
                    <div className="review__cost-old">{item.price.old_print}</div>
                  }
                  
              </div>
             }
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
