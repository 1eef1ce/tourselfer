import React, {useState} from 'react';
import {Breadcrumbs, Layout} from '@components/common';
import Head from 'next/head';
import {Button} from '@components/ui';
import {RoutesContainer} from '@components/Routes';
import {Author, AuthorsContainer} from "@components/Authors";

export default function AuthorDetailPage() {
    const [isShow, setShow] = useState(false);
    const toggleText = () => {
        setShow(!isShow);
    };

    return (
        <Layout>
            <Head>
                <title>Author</title>
            </Head>

            <div className="author">
                <div className="container">
                    <Breadcrumbs/>
                    <h1 className="title-1">Tatiana Sidorenko</h1>
                    <div className="author__container">
                        <div className="author-info">
                            <div className="author-info__items">
                                <div className="author-info__item">
                                    <Author authorDetailPage/>
                                </div>
                                <div className="author-info__item">
                                    <div className="author-info__title">Country of Residence</div>
                                    <div className="author-info__value">Japan</div>
                                </div>
                                <div className="author-info__item">
                                    <div className="author-info__title">Language</div>
                                    <div className="author-info__value">English, Japanese, Russian</div>
                                </div>
                            </div>
                        </div>
                        <div className="author-about">
                            <div className={"author-about__text" + (isShow ? ' show' : '')}>
                                Japan is one of the most amazing countries in the world, where carefully preserved
                                centuries-old traditions are harmoniously combined with cutting-edge technologies.
                                <br/><br/>
                                Initially, my grandmother instilled in me a love for Japan (she was a Japanese
                                translator). Actually, this influenced my choice of Japanese when I entered the
                                International Faculty of the Pacific State University (formerly KSTU). Japan is one
                                of the most amazing countries in the world, where carefully preserved centuries-old
                                traditions are harmoniously combined with cutting-edge technologies.
                            </div>
                            <Button
                                className={isShow ? 'btn--more' : null}
                                variant='filled'
                                squared={true}
                                onClick={toggleText}
                            >
                                <span className="btn__text btn__text--more">Show more</span>
                                <span className="btn__text btn__text--less">Show less</span>
                            </Button>
                        </div>
                    </div>
                    <div className="section routes">
                        <h2 className="title-2">My routes</h2>
                        <RoutesContainer/>
                        <div className="more">
                            <Button
                                variant='outlined'
                                size='medium'
                            >
                                Show more
                            </Button>
                        </div>
                    </div>
                    <div className="section">
                        <h2 className="title-2">Other authors from Japan</h2>
                        <AuthorsContainer/>
                    </div>
                </div>
            </div>
        </Layout>
    );
}