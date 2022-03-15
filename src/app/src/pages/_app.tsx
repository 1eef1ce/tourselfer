import '../styles/vendor/normalize.css';
import '../styles/scss/style.scss';
import '../styles/examples.scss';

import {SessionProvider} from "next-auth/react";

function App({Component, pageProps: {session, ...pageProps}}) {
    return (
        <SessionProvider session={session}>
            <Component {...pageProps} />
        </SessionProvider>
    );
}

export default App;