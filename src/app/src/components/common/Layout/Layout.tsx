import {TopBanner, Header, Footer} from '@components/common';
import React from 'react';

export default function Layout({ children }) {
    return (
        <div className="wrapper">
            <TopBanner/>
            <Header/>
            <main>{children}</main>
            <Footer />
        </div>
    );
}