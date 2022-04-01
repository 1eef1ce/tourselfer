import {Layout} from '@components/common';
import Head from 'next/head';
import {Auth} from '@components/auth';

export default function AuthPage() {
    return (
        <Layout>
            <Head>
                <title>About us</title>
            </Head>
            <Auth />
            
        </Layout>
    );
}