import React from 'react';
import {SearchIcon} from '@components/icons';

class Searchbar extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
        this.onChange = this.onChange.bind(this);
    }
    onChange() {
        this.setState({inputValue: (event.target as HTMLInputElement).value});
    }
    render() {
        return (
            <form className="form search__form">
                <div className="search__wrapper">
                    <div className="icon search__icon">
                        <SearchIcon />
                    </div>
                    <input className="form__field search__field" type="search" placeholder="for example: Berlin"
                           value={this.state.inputValue} onChange={this.onChange}
                    />
                    <button className="btn btn--filled search__btn" type="submit">Find</button>
                </div>
            </form>
        );
    }
}

export default Searchbar;
