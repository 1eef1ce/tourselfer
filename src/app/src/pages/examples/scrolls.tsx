import { Layout } from '@components/common';
import Head from 'next/head';
import {Scrollbar} from '@components/ui';

export default function AlertsPage() {
    return (
        <Layout>
            <Head>
                <title>Alerts</title>
            </Head>

            <div className="container examples">
                <div>
                    <div className="scroll-outer vertical">
                        <Scrollbar>
                            <h1>Scrollable content</h1>
                            <p>
                              Here are many variations of passages of Lorem Ipsum available, but the
                              majority have suffered alteration in some form, by injected humour, or
                              randomised words which don&apos;t look even slightly believable. If you are
                              going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t
                              anything embarrassing hidden in the middle of text. All the Lorem
                              Ipsum generators on the Internet tend to repeat predefined chunks as
                              necessary, making this the first true generator on the Internet. It
                              uses a dictionary of over 200 Latin words, combined with a handful of
                              model sentence structures, to generate Lorem Ipsum which looks
                              reasonable. The generated Lorem Ipsum is therefore always free from
                              repetition, injected humour, or non-characteristic words etc.
                              Here are many variations of passages of Lorem Ipsum available, but the
                              majority have suffered alteration in some form, by injected humour, or
                              randomised words which don&apos;t look even slightly believable. If you are
                              going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t
                              anything embarrassing hidden in the middle of text. All the Lorem
                              Ipsum generators on the Internet tend to repeat predefined chunks as
                              necessary, making this the first true generator on the Internet. It
                              uses a dictionary of over 200 Latin words, combined with a handful of
                              model sentence structures, to generate Lorem Ipsum which looks
                              reasonable. The generated Lorem Ipsum is therefore always free from
                              repetition, injected humour, or non-characteristic words etc.
                            </p>
                        </Scrollbar>
                    </div>

                    <div className="scroll-outer horizontal">
                        <Scrollbar>
                            <h1>Scrollable content</h1>
                            <div className="f-blocks">
                                <div className="item">
                                    Here are many variations of passages of Lorem Ipsum available, but the
                                    majority have suffered alteration in some form, by injected humour, or
                                    randomised words which don&apos;t look even slightly believable. If you are
                                    going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t
                                    anything embarrassing hidden in the middle of text. All the Lorem
                                    Ipsum generators on the Internet tend to repeat predefined chunks as
                                    necessary, making this the first true generator on the Internet.                             
                                </div>
                                <div className="item">
                                    All the Lorem
                                    Ipsum generators on the Internet tend to repeat predefined chunks as
                                    necessary, making this the first true generator on the Internet. It
                                    uses a dictionary of over 200 Latin words, combined with a handful of
                                    model sentence structures, to generate Lorem Ipsum which looks
                                    reasonable. The generated Lorem Ipsum is therefore always free from
                                    repetition, injected humour, or non-characteristic words etc.                               
                                </div>
                                <div className="item">
                                    All the Lorem
                                    Ipsum generators on the Internet tend to repeat predefined chunks as
                                    necessary, making this the first true generator on the Internet. It
                                    uses a dictionary of over 200 Latin words, combined with a handful of
                                    model sentence structures, to generate Lorem Ipsum which looks
                                    reasonable. The generated Lorem Ipsum is therefore always free from
                                    repetition, injected humour, or non-characteristic words etc.                               
                                </div>
                            </div>
                        </Scrollbar>
                    </div>
                </div>
          
            </div>
        </Layout>
    );
}