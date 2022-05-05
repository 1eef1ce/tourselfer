import {Breadcrumbs, Layout, RouteCard, PersonalForm} from '@components/common';
import Head from 'next/head';
import Image from 'next/image';
import {Trashcan} from '@components/icons';
import {Button} from '@components/ui';
import LeftMenu from '@components/common/Menu/LeftMenu';

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
                            <h2>My routes</h2>
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
                            <h2>Personal</h2>
                            <div className="change-avatar">
                                <div className="avatar">
                                    <Image src="/images/avatar.png" alt="" title="" layout="fill"/>
                                </div>
                                <Button
                                >
                                    Change avatar
                                </Button>
                                <Button
                                    isStartIcon={true}
                                    startIcon={<Trashcan/>}
                                >
                                    Delete
                                </Button>
                            </div>
                            <PersonalForm/>                          
                        </div>

                        <div className="tab-content">
                            <h2>Login and Security</h2>
                            <PersonalForm/>                          
                        </div>
                        
                        <div className="tab-content">
                            <h2>Payments and payouts</h2>
                            <div className="payment-group">
                                <span className="title">Selected payment methods</span>
                                <span className="desc">Payment methods you have already set up</span>
                                <div className="payment-items">
                                    <div className="item cards">
                                        <span className="payment-system">Bank cards</span>
                                        <div className="logo"></div>
                                    </div>
                                    <div className="item yandex active">
                                        <span className="payment-system">Yandex money</span>
                                        <div className="logo"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="payment-group">
                                <span className="title">Add new payment methods</span>
                                <span className="desc">Choose a payment system from the list</span>
                                <div className="payment-items">
                                    <div className="item sber checked">
                                        <span className="payment-system">Sberbank</span>
                                        <div className="logo"></div>
                                    </div>
                                    <div className="item cards">
                                        <span className="payment-system">Bank cards</span>
                                        <div className="logo"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="payment-group">
                                <span className="title">Specify payment methods if you are an author</span>
                                <span className="desc">Choose a payment system from the list</span>
                                <div className="payment-items">
                                    <div className="item cards">
                                        <span className="payment-system">Bank cards</span>
                                        <div className="logo"></div>
                                    </div>
                                    <div className="item sber checked">
                                        <span className="payment-system">Sberbank</span>
                                        <div className="logo"></div>
                                    </div>                                   
                                    <div className="item yandex">
                                        <span className="payment-system">Yandex money</span>
                                        <div className="logo"></div>
                                    </div>
                                    <div className="item cards">
                                        <span className="payment-system">Bank cards</span>
                                        <div className="logo"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="button-row">
                                <Button
                                    variant="filled"
                                    size="large"
                                    colored={true}
                                    type="submit"
                                >
                                    Go to the payment
                                </Button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </Layout>
    );
}