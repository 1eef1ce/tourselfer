import { appWithTranslation } from 'next-i18next';
import { Provider } from 'react-redux';
import store from '../store/store';
import React from 'react';

import '../styles/vendor/normalize.css';
import '../styles/scss/style.scss';
import '../styles/examples.scss';

import {SessionProvider} from "next-auth/react";

function App({Component, pageProps: {session, ...pageProps}}) {

    return (
        <Provider store={ store }>
            <SessionProvider session={session}>
                <Component {...pageProps} />
            </SessionProvider>
        </Provider>
    );
}

export default appWithTranslation(App);
