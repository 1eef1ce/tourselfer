import Image from 'next/image';
import Link from 'next/link';
import {Man, MapPin} from '@components/icons';
import {Avatar, UserName} from '@components/common';
import { useTranslation } from 'next-i18next';

const Route = ({item}) => {
    
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

    if (typeof item.locations_count !== 'undefined' && item.locations_count > 0)
    {
        props.push({
            'label': t('route.props.locations_count'),
            'value': parseInt(item.locations_count)
        });
    }

    if (typeof item.type !== 'undefined' && Array.isArray(item.type))
    {
        if (item.type.indexOf('foot') !== -1) {

            props.push({
                'label': t('route.props.type_foot'),
                'value': <div className="icon route-params__icon"><Man /></div>
            });

        } else if (item.type.indexOf('car') !== -1) {

            props.push({
                'label': t('route.props.type_car'),
                'value': <div className="icon route-params__icon"><Man /></div>
            });

        } else if (item.type.indexOf('bus') !== -1) {

            props.push({
                'label': t('route.props.type_bus'),
                'value': <div className="icon route-params__icon"><Man /></div>
            });

        }
        
    }

    return (
        <div className="routes__item">
            <div className="routes__img">
                <Image src={item.picture} alt={item.title} title={item.title} layout="fill"/>
                <div className="routes__content">
                    {!!item.rating && item.rating > 0 &&
                    <div className="rating routes__rating">
                        <div className="rating-number">{item.rating}</div>
                    </div>
                    }
                    <div className="routes__user user user--white user--small">
                        <div className="user__img">
                            <Avatar user={item.author} />
                        </div>
                        <UserName user={item.author}/>
                    </div>
                </div>
            </div>
            <div className="route-params">

                {!!props && props.length>0 && props.map(prop => (
                <div className="route-params__item" key={prop.label}>
                    <div className="route-params__value">{prop.value}</div>
                    <div>{prop.label}</div>
                </div>
                ))}

                {!!item.super_place && item.super_place === true &&
                <div className="route-mark">
                    <div className="icon route-mark__icon">
                        <MapPin gradient/>
                    </div>
                    <div className="route-mark__text">super place</div>
                </div>
                }
            </div>
            <Link href={"/route/" + item.code}>
                <a className="routes__title">{item.title}</a>
            </Link>
        </div>
    );
};

export default Route;