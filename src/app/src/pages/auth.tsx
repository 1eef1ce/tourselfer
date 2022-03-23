import {Breadcrumbs, Layout} from '@components/common';
import Head from 'next/head';
import Cookies from 'js-cookie';
import {Auth} from '@components/auth';

export default function AuthPage() {

    /*const csrf = fetch('https://api.stage1.test.tourselfer.tech/api/v1/csrf-cookie', {
        method: "GET",
        credentials: "include",
        //mode: "cors",
    })
    .then((response) => {
        fetch('https://api.stage1.test.tourselfer.tech/api/v1/login', {
            method: "POST",
            credentials: "include",
            mode: "cors",
            body: JSON.stringify({
                email: "sss@ssss.ru",
                password: "123333"
            }),
            headers: {
                //'X-XSRF-TOKEN': 
            }
        });
        console.log(Cookies.get('XSRF-TOKEN'));
    });*/

   

    return (
        <Layout>
            <Head>
                <title>About us</title>
            </Head>
            <Auth />
            asd
        </Layout>
    );
}