import React, { useEffect, useState } from 'react';
import { Button, Input } from '@components/ui';
import SocialAuth from '@components/auth/SocialAuth';
import { PolicyText } from '@components/common';
import {ArrowRight} from '@components/icons'
import { Formik, Form } from 'formik';
import { useAuth } from '../hooks/auth'
import { useNotify } from '../hooks/notify'
import {Breadcrumbs, Layout} from '@components/common';
import Head from 'next/head';
import { useRouter } from 'next/router'

export default function VerifyEmail() {

    const router = useRouter();
    console.log(router.query)

    return (
        <Layout>
            <Head>
                <title>Verify Email</title>
            </Head>

            <div className="container">
                <Breadcrumbs/>
                <h1 className="title-1">Verify email</h1>
            </div>
        </Layout>
    );
}