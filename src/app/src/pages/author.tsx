import {Breadcrumbs, Layout} from '@components/common';
import Head from 'next/head';
import {Button} from '@components/ui';
import {RoutesContainer} from '@components/Routes';
import {AuthorDetail, AuthorsContainer} from '@components/Authors';

export default function AuthorDetailPage() {
    return (
        <Layout>
            <Head>
                <title>Author</title>
            </Head>

            <div className="container">
                <Breadcrumbs/>
                <h1 className="title-1">Tatiana Sidorenko</h1>
                <AuthorDetail
                    name="Tatiana Sidorenko"
                    professionalAuthor
                    rating={4.9}
                    country="Japan"
                    languages={["English", "Japanese", "Russian"]}
                />
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
        </Layout>
    );
}