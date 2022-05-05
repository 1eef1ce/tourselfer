import {Accordion, Breadcrumbs, Layout} from '@components/common';
import {Button, Input, Textarea} from '@components/ui';
import Head from 'next/head';

export default function FAQ() {

    const accordionData = [
        {
            "title": "How to report inaccuracies in route information",
            "content": "If you are a business owner, click here for information on how to update your company\n" +
            "          information in the Control Center.If you are a business owner, click here for information on how\n" +
            "          to update your company information in the Control Center.If you are a business owner, click here\n" +
            "          for information on how to update your company information in the Control Center."
        },
        {
            "title": "What documents do you need to bring with you",
            "content": "If you are a business owner, click here for information on how to update your company\n" +
            "          information in the Control Center.If you are a business owner, click here for information on how\n" +
            "          to update your company information in the Control Center.If you are a business owner, click here\n" +
            "          for information on how to update your company information in the Control Center."
        },
        {
            "title": "Can I skip any attractions",
            "content": "If you are a business owner, click here for information on how to update your company\n" +
            "          information in the Control Center.If you are a business owner, click here for information on how\n" +
            "          to update your company information in the Control Center.If you are a business owner, click here\n" +
            "          for information on how to update your company information in the Control Center."
        }
    ];

    return (
        <Layout>
            <Head>
                <title>FAQ</title>
            </Head>

            <div className="container">
                <Breadcrumbs/>
                <h1 className="title-1">Frequently Asked Questions</h1>
                <div className="faq">
                    <div className="faq-section">
                        <div className="accordion">
                            {accordionData.map(({ title, content }) => (
                                <Accordion key={title} title={title} content={content} />
                            ))}
                        </div>
                    </div>
                    <div className="faq-section">
                        <div className="faq__block">
                            <div className="faq__heading">Ask a question</div>
                            <form className="form">
                                <div className="form__group">
                                    <Input
                                        id="question"
                                        name="question"
                                        label="What is your question?"
                                    />
                                </div>
                                <div className="form__group">
                                    <Input
                                        id="route"
                                        name="route"
                                        label="What route are you asking about?"
                                    />
                                </div>
                                <div className="form__group">
                                    <Textarea
                                        id="description"
                                        name="description"
                                    />
                                </div>
                                <div className="form__row form__row--withText">
                                    <div className="form__group form__group--text">
                                        Describe the essence of your question so that it is as clear as possible to other users.
                                    </div>
                                    <div className="form__group form__group--btnRight">
                                        <Button
                                            type="submit"
                                            size="medium"
                                            variant="filled"
                                            colored
                                        >
                                            Send
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}