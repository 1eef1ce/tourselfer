import {Breadcrumbs, Layout} from '@components/common';
import Head from 'next/head';

export default function About() {
    return (
        <Layout>
            <Head>
                <title>About us</title>
            </Head>

            <div className="container">
                <Breadcrumbs/>
                <h1 className="title-1">About us</h1>
            </div>
        </Layout>
    );
}