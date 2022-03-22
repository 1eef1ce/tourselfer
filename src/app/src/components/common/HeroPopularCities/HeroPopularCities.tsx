import { useTranslation } from 'next-i18next';
import Link from 'next/link';

const HeroPopularCities = ({items}) => {

    const { t } = useTranslation("components");
    
    return (
        <div className="search__text">
            {t('hero.popular_now')}
            <span>
                {items && items.length>0 && items.map(item => (
                    <Link href={"/routes/" + item.code}>{item.name}</Link>
                ))}
            </span>
        </div>
    );
};

export default HeroPopularCities;