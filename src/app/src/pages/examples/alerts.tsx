import { Layout } from '@components/common';
import Head from 'next/head';
import {Alert} from '@components/ui';
import { i18n } from "next-i18next";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getServerSideProps = async ({locale}) => {

    if (process.env.NODE_ENV === "development")
    {
        await i18n?.reloadResources();
    }

    return {
      props: {
        ...(await serverSideTranslations(locale!, ["menu", "components", "pages__homepage"])),
      },
    };
};

export default function AlertsPage() {
    const {t} = useTranslation('components');
    return (
        <Layout>
            <Head>
                <title>Alerts</title>
            </Head>

            <div className="container">    
                <Alert type={'success'} icon={true}>
                    <span className={'alert-title'}>{t('alert.title')}</span>
                    <span className={'alert-msg'}>{t('alert.message_success')}</span>
                </Alert>           
                <Alert type={'error'}>
                    <span className={'alert-msg'}>{t('Сообщение об ошибке')}</span>
                </Alert>
            </div>
        </Layout>
    );
}
