import React from 'react';
import {SearchIcon} from '@components/icons';
import {Button} from '@components/ui';

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
                    <Button
                        className="search__btn"
                        variant="filled"
                        type="submit"
                    >
                        Find
                    </Button>
                </div>
            </form>
        );
    }
}

export default Searchbar;
