import Image from 'next/image';
import Link from 'next/link';

const ShowcaseItem = (props) => {
    return (
        <Link href="#">
            <a className="showcase__item">
                <Image src={props.img} alt="{props.city}" title="" layout="fill"/>
                <div className="showcase__content">
                    <div className="showcase__text">{props.country}</div>
                    <div className="title-4 showcase__title">{props.city}</div>
                </div>
            </a>
        </Link>
    );
};

export default ShowcaseItem;