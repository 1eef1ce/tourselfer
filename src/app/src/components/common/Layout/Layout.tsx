import React from 'react';
import {TopBanner, Header, Footer} from '@components/common';

const Layout =({children}) => {
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