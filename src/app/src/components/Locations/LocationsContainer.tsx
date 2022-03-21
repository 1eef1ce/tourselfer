import Location from './Location';
import {useState, useEffect} from 'react';

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
            ))}
        </div>
    );
};

export default LocationsContainer;