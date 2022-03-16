import React from 'react';
import {SearchIcon} from '@components/icons';
import {Button} from '@components/ui';
import { useTranslation } from 'next-i18next';

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
                    <input className="form__field search__field" type="search" placeholder={this.props.t('searchbar.placeholder')}
                           value={this.state.inputValue} onChange={this.onChange}
                    />
                    <Button
                        className="search__btn"
                        variant="filled"
                        type="submit"
                    >
                        {this.props.t('button.search')}
                    </Button>
                </div>
            </form>
        );
    }
}

/*const Searchbar = () => {
    
    const items = [];

    const { t } = useTranslation("components");

    const onKeyUp = (event) => {
        this.items[]
        console.log(event.target.value);
    };

    let onKeyUp = () => {
        items.push("ggg");
    }

    console.log(items);
    return (
        <form className="form search__form">
                <div className="search__wrapper">
                    <div className="icon search__icon">
                        <SearchIcon />
                    </div>
                    <input className="form__field search__field" type="search" placeholder={t('searchbar.placeholder')} onKeyUp={onKeyUp}/>
                    <Button
                        className="search__btn"
                        variant="filled"
                        type="submit"
                    >
                        {t('button.search')}
                    </Button>
                </div>
        </form>
    );

};*/

export default Searchbar;