import {Author} from '@components/Authors';

const AuthorsContainer = () => {
    return (
        <div className="authors__container">
            <div className="authors__items">
                <div className="authors__item">
                    <Author
                        name="Tamar Golan"
                        professionalAuthor
                        rating={4.9}
                        country="Japan"
                        routesNumber={6}
                    />
                </div>
                <div className="authors__item">
                    <Author
                        name="Natalya Kuznetsova"
                        professionalAuthor
                        rating={4.9}
                        country="Japan"
                        routesNumber={6}
                    />
                </div>
                <div className="authors__item">
                    <Author
                        name="Cai Hong-yan"
                        rating={4.9}
                        country="Japan"
                        routesNumber={6}
                    />
                </div>
                <div className="authors__item">
                    <Author
                        name="Rayford Chenail"
                        rating={4.9}
                        country="Japan"
                        routesNumber={6}
                    />
                </div>
            </div>
        </div>
    );
};

export default AuthorsContainer;