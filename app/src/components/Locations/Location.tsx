import Link from 'next/link';

const Location = (props) => {
    return (
        <Link href="#">
            <a className="locations__item">
                <picture className="locations__picture">
                    <source srcSet={props.img} media="(min-width: 500px)"/>
                    <source srcSet={props.imgMobile} media="(min-width: 320px)"/>
                    <img src={props.img} alt="img" title=""/>
                </picture>
                <div className="locations__content">
                    <div className="title-2 locations__title">{props.city}</div>
                    <div className="locations__text">{props.tours} unique tours from {props.authors} authors</div>
                </div>
            </a>
        </Link>
    );
};

export default Location;