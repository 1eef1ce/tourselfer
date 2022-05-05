import Location from './Location';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const LocationsContainer = ({items}) => {
    
    return (
        <div className="locations__items">
            {items && items.length>0 && items.map(item => (
                <Location
                    key={item.id}
                    code={item.code}
                    name={item.name}
                    img={item.picture}
                    imgMobile={item.picture}
                    tours="0"
                    authors="0"
                />
            ))
            
            || 
               
            <div className="skeleton-container"> 
                <div className="skeleton-row">
                    <Skeleton 
                        containerClassName="item big"
                        className="item-title"
                    />
                    <Skeleton 
                        containerClassName="item medium"
                        className="item-title"
                    />                  
                </div>
                <div className="skeleton-row">
                    {Array(...Array(3)).map((i)=>
                        <Skeleton 
                            containerClassName="item"
                            className="item-title"
                        />
                    )}                   
                </div>
            </div>

            }
        </div>
    );
};

export default LocationsContainer;