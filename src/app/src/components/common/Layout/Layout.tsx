import React from 'react';
import {TopBanner, Header, Footer, Notifications} from '@components/common';
import { useAuth } from '../../../hooks/auth';

interface LayoutProps {
    transparentHeader?: boolean;
    children?: any;
}

const Layout =({transparentHeader = false, children}: LayoutProps) => {
    const showBanner = false;
    const { user } = useAuth();

    return (
        <>
            <Notifications/>
            <div className="wrapper">
                {showBanner && <TopBanner/>}
                <Header transparent={transparentHeader}/>
                <main>{children}</main>
                <Footer/>
            </div>
            
        </>
    );
};

export default Layout;