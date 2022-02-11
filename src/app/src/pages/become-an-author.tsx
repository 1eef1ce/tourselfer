import {Breadcrumbs, Layout} from '@components/common';
import Head from 'next/head';

export default function BecomeAnAuthor() {
    return (
        <Layout>
            <Head>
                <title>Become an author</title>
            </Head>

            <div className="container">
                <Breadcrumbs/>
                <h1 className="title-1">Become an author</h1>
            </div>
        </Layout>
    );
}