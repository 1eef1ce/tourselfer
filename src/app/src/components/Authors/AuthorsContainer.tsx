import {Author} from "@components/Authors";

const AuthorsContainer = () => {
    return (
        <div className="authors__container">
            <div className="authors__items">
                <div className="authors__item">
                    <Author/>
                </div>
                <div className="authors__item">
                    <Author/>
                </div>
                <div className="authors__item">
                    <Author/>
                </div>
                <div className="authors__item">
                    <Author/>
                </div>
            </div>
        </div>
    );
};

export default AuthorsContainer;