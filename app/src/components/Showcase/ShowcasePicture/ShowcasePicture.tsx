const ShowcasePicture = () => {
    return (
        <picture className="showcase__picture">
            <source srcSet="/images/main.jpg" media="(min-width: 500px)"/>
            <source srcSet="/images/main-mobile.jpg" media="(min-width: 320px)"/>
            <img src="/images/main.jpg" alt="img" title=""/>
        </picture>
    );
};

export default ShowcasePicture;