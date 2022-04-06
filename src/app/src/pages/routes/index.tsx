import {Breadcrumbs, Layout, Pagination} from '@components/common';
import Head from 'next/head';
import {Button} from '@components/ui';
import Filter from '@components/filter';
import {RoutesContainer} from '@components/Routes';

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