import React from 'react';
import {TopBanner, Header, Footer, Notifications} from '@components/common';
import { useAuth } from '../../../hooks/auth';

interface LayoutProps {
    mainPage?: boolean;
}

const Layout: React.FC<LayoutProps> = ((props) => {
    const {
        mainPage = false,
        children
    } = props;

    const showBanner = false;
    const { user } = useAuth();

    return (
        <>
            <Notifications/>
            <div className="wrapper">
                {showBanner && <TopBanner/>}
                <Header mainPage={mainPage}/>
                <main>{children}</main>
                <Footer/>
            </div>
            
        </>
    );
});

export default Layout;