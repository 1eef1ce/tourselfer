import { Layout } from '@components/common';
import Head from 'next/head';
import {Alert} from '@components/ui';

export default function AlertsPage() {
    return (
        <Layout>
            <Head>
                <title>Alerts</title>
            </Head>

            <div className="container">
                <Alert message={'Info message'}/>
                <Alert message={'Error message'} title={'Title alert'} type={'error'}/>
                <Alert message={'Success message'} type={'success'}/>
                <Alert message={'Info message'} icon={true}/>
                <Alert message={'Error message'} type={'error'} icon={true} title={'Title alert'}/>
                <Alert message={'Success message'} type={'success'} icon={true} title={'Title alert'}/>
            </div>
        </Layout>
    );
}