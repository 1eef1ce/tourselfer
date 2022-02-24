import {Breadcrumbs, Layout, Pagination} from '@components/common';
import Head from 'next/head';
import {Button} from '@components/ui';
import Filter from '@components/filter';
import {RoutesContainer} from '@components/Routes';

export default function RoutesPage() {
    return (
        <Layout>
            <Head>
                <title>Routes</title>
            </Head>

            <div className="container">
                <Breadcrumbs/>
                <h1 className="title-1">Routes</h1>
                <Filter/>
                <RoutesContainer/>
                <div className="routes__more">
                    <Button
                        className="btn--alt"
                    >
                        See more
                    </Button>
                </div>
                <Pagination/>
            </div>
        </Layout>
    );
}