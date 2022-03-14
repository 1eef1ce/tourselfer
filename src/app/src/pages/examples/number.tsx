import { Layout } from '@components/common';
import Head from 'next/head';
import {Number} from '@components/ui';

export default function PhonesPage() {
    return (
        <Layout>
            <Head>
                <title>Phones</title>
            </Head>

            <Number/>
            
        </Layout>
    );
}