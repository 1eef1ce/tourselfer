import { appWithTranslation } from 'next-i18next';

import '../styles/vendor/normalize.css';
import '../styles/scss/style.scss';
import '../styles/examples.scss';


const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

export default appWithTranslation(MyApp);