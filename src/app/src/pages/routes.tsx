import {Breadcrumbs, Layout, Pagination} from '@components/common'
import Head from 'next/head'
import Filter from '@components/filter'
import Routes from '@components/routes'

export default function RoutesPage() {
    return (
        <Layout>
            <Head>
                <title>Routes</title>
            </Head>

            <div className="container">
                <Breadcrumbs/>
                <h1 className="title-1">Routes</h1>
                <Filter />
                <Routes/>
                <Pagination />
            </div>
        </Layout>
    )
}