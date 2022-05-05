import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const HeroPopularCities = ({items}) => {

    const { t } = useTranslation("components");

    return (
        <div className="search__text">
            <span>{t('hero.popular_now')}</span>
                {items && items.length>0 && items.map((item, index) => {
                    
                    if (typeof item?.name === 'string') {
                        return (
                            <>
                            {index ? ', ' : ''}
                            <Link key={item?.id} href={"/routes/" + item?.code}><a>{item.name}</a></Link>
                            </>
                        );
                    } else {
                        return (<></>);
                    }
                    
                }) 
                
                || 
                
                <Skeleton 
                    containerClassName="skeleton-text"
                />
            } 
        </div>
    );
};

export default HeroPopularCities;