import ShowcaseItem from './ShowcaseItem';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ShowcaseItems = ({items}) => {
    return (
        <div className="showcase__items">
            {items && items.length>0 && items.map(item => (
                <ShowcaseItem
                    key={item.id}
                    code={item.code}
                    country={item.country.name}
                    city={item.name}
                    img={item.picture}
                />
            )) 
            
            || 
                
            <div className="skeleton-items">
                {Array(...Array(4)).map((i)=>
                    <Skeleton 
                        containerClassName="item"
                        className="item-title"
                    />
                )}                   
            </div>
            }
        </div>
    );
};

export default ShowcaseItems;