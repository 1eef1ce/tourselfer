import {Breadcrumbs, Layout, RouteCard} from '@components/common';
import Head from 'next/head';
import Image from 'next/image';
import {CheckRounded, Lock, Man, MapPin} from '@components/icons';
import {Button, Rating, Input, Number, SelectField} from '@components/ui';
import LeftMenu from '@components/common/Menu/LeftMenu';

import {Formik, Form} from 'formik';

export default function MyAccount() {
    return (
        <Layout>
            <Head>
                <title>My Account</title>
            </Head>
            <div className="container">
                <Breadcrumbs/>
                <div className="personal">
                    <div className="column left">
                        <h1 className="title-1">My Account</h1>

                        <LeftMenu/>
                        
                    </div>
                    <div className="column right">
                        <div className="tab-content active">
                            <RouteCard params={false} title={'Tokyo kaleidoscope'} label={true}>
                                <Image src="/images/route-personal1.png" alt="" title="" layout="fill"/>
                            </RouteCard>
                            <RouteCard params={false} title={'Route Name'} label={true}>
                                <Image src="/images/route-personal2.png" alt="" title="" layout="fill"/>
                            </RouteCard>
                            <RouteCard params={false} title={'Route Name'} label={true}>
                                <Image src="/images/route-personal3.png" alt="" title="" layout="fill"/>
                            </RouteCard>
                        </div>

                        <div className="tab-content">
                            <SelectField
                                label={'Gender'}
                                options={[
                                    {value: 'male', label: 'Male'},
                                    {value: 'female', label: 'Female'},
                                    {value: 'non-binary', label: 'Non-binary'},
                                    {value: 'prefer not to answer', label: 'Prefer not to answer'}
                                ]}
                            />
                            <SelectField
                                label={'Citizenship'}
                                options={[
                                    {value: 'male', label: 'Male'},
                                    {value: 'female', label: 'Female'},
                                    {value: 'non-binary', label: 'Non-binary'},
                                    {value: 'prefer not to answer', label: 'Prefer not to answer'}
                                ]}
                            />
                            <Number/>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}