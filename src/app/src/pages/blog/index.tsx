import {Breadcrumbs, Layout} from '@components/common';
import Head from 'next/head';

export default function Blog() {
    return (
        <Layout>
            <Head>
                <title>Blog</title>
            </Head>

            <div className="container">
                <Breadcrumbs/>
                <h1 className="title-1">Blog</h1>
            </div>
        </Layout>
    );
}