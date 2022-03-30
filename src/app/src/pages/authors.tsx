import {Breadcrumbs, Layout, Pagination} from '@components/common';
import Head from 'next/head';
import {Button, SelectField} from '@components/ui';
import {AuthorsContainer} from "@components/Authors";

export default function AuthorsPage() {
    return (
        <Layout>
            <Head>
                <title>Authors</title>
            </Head>

            <div className="authors">
                <div className="container">
                    <Breadcrumbs/>
                    <h1 className="title-1">Route authors</h1>
                    <div className="filter">
                        <div className="filter__block">
                            <div className="filter__items">
                                <div className="filter__item">
                                    <div className="filter__select">
                                        <div className="filter__text">Country</div>
                                        <SelectField
                                            classPrefix="select"
                                            id="country"
                                            name="country"
                                            options = {
                                                [
                                                    {value: 'country1', label: 'country 1'},
                                                    {value: 'country2', label: 'country 2'},
                                                    {value: 'country3', label: 'country 3'}
                                                ]
                                            }
                                            defaultOption = {
                                                [
                                                    {value: 'Any', label: 'Any country'}
                                                ]
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="filter__item">
                                    <div className="filter__select">
                                        <div className="filter__text">Language</div>
                                        <SelectField
                                            classPrefix="select"
                                            id="language"
                                            name="language"
                                            options = {
                                                [
                                                    {value: 'language1', label: 'language 1'},
                                                    {value: 'language2', label: 'language 2'},
                                                    {value: 'language3', label: 'language 3'}
                                                ]
                                            }
                                            defaultOption = {
                                                [
                                                    {value: 'Any', label: 'Any language'}
                                                ]
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <AuthorsContainer/>
                    <div className="more">
                        <Button
                            variant='outlined'
                            size='medium'
                        >
                            Show more
                        </Button>
                    </div>
                    <Pagination/>
                </div>
            </div>
        </Layout>
    );
}