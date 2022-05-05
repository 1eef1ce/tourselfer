import {Breadcrumbs, Layout} from '@components/common';
import Head from 'next/head';

export default function RoutesIndexPage() {
    return (
        <Layout>
            <Head>
                <title>Routes index</title>
            </Head>

            <div className="routes">
                <div className="container">
                    <Breadcrumbs/>
                    <h1 className="title-1">Routes</h1>
                    Text here...
                </div>
            </div>
        </Layout>
    );
}