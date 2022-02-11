import Link from 'next/link';
import cn from 'classnames';
import {useEffect, useState} from "react";


const MobileMenu = (props) =>  {
    let visibility;
    if (props.menuVisibility) {
        visibility = 'show';
    }

    const [items, setItems] = useState<any>([]);

    useEffect(()=>{
        fetch('./mobileMenu.json')
            .then(res => res.json())
            .then((result) => setItems(result));
    },[]);

    return (
        <div className={cn("mobile-menu", visibility)} onMouseDown={props.handleMouseDown}>
            {items && items.length>0 && items.map(item => (
                <div key={item.href} className="mobile-menu__item">
                    <Link href={item.href}>
                        <a className="mobile-menu__link">{item.label}</a>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default MobileMenu;