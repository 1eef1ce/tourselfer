import Head from 'next/head';
import Link from 'next/link';
import {Layout} from '@components/common';

export default function Examples() {
    return (
        <Layout>
            <Head>
                <title>Examples</title>
            </Head>

            <div className="container">
                <ul>
                    <li>
                        <Link href="/examples/alerts">
                            <a className="link">Alerts</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/examples/buttons">
                            <a className="link">Buttons</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/examples/form">
                            <a className="link">Form</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/examples/scrolls">
                            <a className="link">Scroll</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </Layout>
    );
}