import ShowcaseItem from './ShowcaseItem';

const ShowcaseItems = ({items}) => {
    return (
        <div className="showcase__items">
            {items && items.length>0 && items.map(item => (
                <ShowcaseItem
                    country={item.country.name}
                    city={item.name}
                    img={item.picture}
                />
            ))}
        </div>
    );
};

export default ShowcaseItems;