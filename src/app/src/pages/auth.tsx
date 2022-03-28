import {Breadcrumbs, Layout} from '@components/common';
import Head from 'next/head';
import Cookies from 'js-cookie';
import {Auth} from '@components/auth';

export default function AuthPage() {

    
    return (
        <Layout>
            <Head>
                <title>About us</title>
            </Head>
            <Auth />
            asd
        </Layout>
    );
}