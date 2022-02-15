import Link from 'next/link';
import {useEffect, useState} from "react";

const HeaderMenu = () => {

    const [items, setItems] = useState<any>([]);

    useEffect(()=>{
        fetch('/headerMenu.json')
            .then(res => res.json())
            .then((result) => setItems(result));
    },[]);

    return (
        <div className="header-nav">
            {items && items.length>0 && items.map(item => (
                <div key={item.href} className="header-nav__item">
                    <Link href={item.href}>
                        <a className="header-nav__link">{item.label}</a>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default HeaderMenu;