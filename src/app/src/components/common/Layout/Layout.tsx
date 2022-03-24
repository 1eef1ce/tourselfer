import React, {useState} from 'react';
import {TopBanner, Header, Footer} from '@components/common';

const Layout =({children}) => {
    const showBanner = false;
    return (
        <div className="wrapper">
            {showBanner && <TopBanner/>}
            <Header/>
            <main>{children}</main>
            <Footer/>
        </div>
    );
};

export default Layout;