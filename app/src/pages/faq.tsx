import {Breadcrumbs, Layout} from '@components/common';
import Head from 'next/head';

export default function FAQ() {
    return (
        <Layout>
            <Head>
                <title>FAQ</title>
            </Head>

            <div className="container">
                <Breadcrumbs/>
                <h1 className="title-1">FAQ</h1>
            </div>
        </Layout>
    );
}