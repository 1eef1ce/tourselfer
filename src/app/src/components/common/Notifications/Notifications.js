import React from 'react';
import {TopBanner, Header, Footer} from '@components/common';
import {Alert} from '@components/ui';
import { useNotify } from '../../../hooks/notify';

import { useSelector } from "react-redux";

const Notifications = () => {

    const selector = useSelector(state => state);
    let items = [];

    if (selector && Array.isArray(selector.notifications))
        items = selector.notifications;

    return (
       <>
        {items && Array.isArray(items) &&
            <div className=''>
                {items.map((item, key) => (
                    <Alert key={key} icon={true} type={item.type} title={item.title} message={item.message} />
                ))}
            </div>
        }
        
       </>
    );
};

export default Notifications;