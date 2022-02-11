import {useState, useEffect} from 'react';
import Link from 'next/link';
import {ChevronRight} from '@components/icons';

const FooterMenu = () => {
    const [items, setItems] = useState<any>([]);

    useEffect(()=>{
        fetch('./footerMenu.json')
            .then(res => res.json())
            .then((result) => setItems(result));
    },[]);

    return (
        <div className="footer-nav">
            {items && items.length>0 && items.map(item => (
                <div key={item.href} className="footer-nav__item">
                    <Link href={item.href}>
                        <a className="footer-nav__link">
                            <span>{item.label}</span>
                            <span className="icon footer-nav__icon"><ChevronRight/></span>
                        </a>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default FooterMenu;