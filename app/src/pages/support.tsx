import {Breadcrumbs, Layout} from '@components/common';
import Head from 'next/head';

export default function Support() {
    return (
        <Layout>
            <Head>
                <title>Support</title>
            </Head>

            <div className="container">
                <Breadcrumbs/>
                <h1 className="title-1">Support</h1>
            </div>
        </Layout>
    );
}