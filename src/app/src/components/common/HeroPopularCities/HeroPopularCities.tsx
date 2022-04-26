import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const HeroPopularCities = ({items}) => {

    const { t } = useTranslation("components");
    
    return (
        <div className="search__text">
            <span>{t('hero.popular_now')}</span>
                {items && items.length>0 && items.map((item, index) => (
                    <span key={item.code}>
                    {index ? ', ' : ''}
                    <Link href={"/routes/" + item.code}>{item.name}</Link>
                    </span>
                )) 
                
                || 
                
                <Skeleton 
                    containerClassName="skeleton-text"
                />
            } 
        </div>
    );
};

export default HeroPopularCities;