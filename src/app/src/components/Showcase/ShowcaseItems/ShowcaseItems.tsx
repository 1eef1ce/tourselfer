import ShowcaseItem from './ShowcaseItem';

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
            ))}
        </div>
    );
};

export default ShowcaseItems;