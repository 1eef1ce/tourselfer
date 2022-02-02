import {TopBanner, Header, Footer} from '@components/common';
import {Loader} from '@components/ui';
import React from 'react';

const Loading = () => (
    <div className="overlay">
        <Loader />
    </div>
);

const dynamicProps = {
    loading: Loading,
};

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