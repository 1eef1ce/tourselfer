import ShowcaseItem from './ShowcaseItem';

const ShowcaseItems = () => {
    return (
        <div className="showcase__items">
            <ShowcaseItem
                country={'Spain'}
                city={'Madrid'}
                img={'/images/route-1.jpg'}
            />
            <ShowcaseItem
                country={'Germany'}
                city={'Berlin'}
                img={'/images/route-2.jpg'}
            />
            <ShowcaseItem
                country={'Holland'}
                city={'Amsterdam'}
                img={'/images/route-3.jpg'}
            />
            <ShowcaseItem
                country={'Сzech'}
                city={'Prague'}
                img={'/images/route-4.jpg'}
            />
        </div>
    );
};

export default ShowcaseItems;