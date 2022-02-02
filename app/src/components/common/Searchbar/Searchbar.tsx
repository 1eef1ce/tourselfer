import {FC, memo} from 'react';
import {SearchIcon} from '@components/icons';

interface Props {
    id?: string
}

const Searchbar: FC<Props> = ({id = 'search'}) => {
    return (
        <form className="form search__form">
            <div className="search__wrapper">
                <div className="icon search__icon">
                    <SearchIcon />
                </div>
                <input id={id} className="form__field search__field" type="search"
                       placeholder="for example: Berlin"/>
                <button className="btn btn--fill search__btn" type="submit">Find</button>
            </div>
        </form>
    );
};

export default memo(Searchbar);
