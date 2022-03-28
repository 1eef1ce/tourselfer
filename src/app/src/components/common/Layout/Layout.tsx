import React from 'react';
import {TopBanner, Header, Footer} from '@components/common';
import { useAuth } from '../../../hooks/auth';

const Layout =({children}) => {

    const { user } = useAuth();

    return (
        <div className="wrapper">
            <TopBanner/>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </div>
    );
};

export default Layout;