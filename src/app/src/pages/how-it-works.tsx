import {Breadcrumbs, Layout} from '@components/common';
import Head from 'next/head';

export default function HowItWorks() {
    return (
        <Layout>
            <Head>
                <title>How the site works</title>
            </Head>

            <div className="container">
                <Breadcrumbs/>
                <h1 className="title-1">How the site works</h1>
            </div>
        </Layout>
    );
}