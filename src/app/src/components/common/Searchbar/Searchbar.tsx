import React from 'react';
import {Close, SearchIcon} from '@components/icons';
import {Button} from '@components/ui';

class Searchbar extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            focus: false,
            inputValue: ''
        };
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onChange = this.onChange.bind(this);
        this.clearValue = this.clearValue.bind(this);
    }

    onFocus() {
        this.setState({focus: true});
    }

    onBlur() {
        this.setState({focus: false});
    }

    onChange() {
        this.setState({inputValue: (event.target as HTMLInputElement).value});
    }

    clearValue(e) {
        e.preventDefault();
        this.setState({inputValue: ''});
    }

    render() {
        return (
            <form className="form search__form">
                <div className="search__wrapper">
                    <div className="icon search__icon">
                        <SearchIcon />
                    </div>
                    <input
                        className="form__input search__input"
                        type="text"
                        placeholder="for example: Berlin"
                        value={this.state.inputValue}
                        onBlur={this.onBlur}
                        onFocus={this.onFocus}
                        onChange={this.onChange}
                    />
                    {((this.state.inputValue !== '') && (this.state.focus === true)) &&
                    (
                        <span className="form__icon" onMouseDown={this.clearValue}>
                            <Close/>
                        </span>
                    )}
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
