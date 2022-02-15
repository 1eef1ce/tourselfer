import Location from './Location';
import {useState, useEffect} from 'react';

const LocationsContainer = () => {
    const [items, setItems] = useState<any>([]);

    useEffect(()=>{
        fetch('./locations.json')
            .then(res => res.json())
            .then((result) => setItems(result));
    },[]);

    return (
        <div className="locations__items">
            {items && items.length>0 && items.map(item => (
                <Location
                    key={item.city}
                    city={item.city}
                    img={item.img}
                    imgMobile={item.imgMobile}
                    tours={item.tours}
                    authors={item.authors}
                />
            ))}
        </div>
    );
};

export default LocationsContainer;