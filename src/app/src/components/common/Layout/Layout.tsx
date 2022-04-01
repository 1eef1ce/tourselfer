import React from 'react';
import {TopBanner, Header, Footer, Notifications} from '@components/common';
import { useAuth } from '../../../hooks/auth';

const Layout =({children}) => {
    const showBanner = false;
    const { user } = useAuth();

    return (
        <>
            <Notifications/>
            <div className="wrapper">
                {showBanner && <TopBanner/>}
                <Header/>
                <main>{children}</main>
                <Footer/>
            </div>
            
        </>
    );
};

export default Layout;