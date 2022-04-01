import React, { createRef } from 'react';
import {Close, SearchIcon} from '@components/icons';
import {Button} from '@components/ui';
import {SearchbarItems} from '@components/common/SearchbarItems';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

class SearchbarClass extends React.Component<any, any, any> {
    
    wrapperRef = createRef();

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            visibleItems: false,
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

    onChange(event) {
        this.setState({inputValue: (event.target as HTMLInputElement).value});
        this.fetchData(event.target.value);
    }

    onClick() {
        if (this.state.items && this.state.items.length > 0 && !this.state.visibleItems) {
            this.setState({
                visibleItems: true
            });
        }
    }

    clearValue(e) {
        e.preventDefault();
        this.setState({inputValue: ''});
    }

    fetchData(phrase) {
        const { locale } = this.props.route;

        fetch(process.env.API_HOST + '/api/v1/search/suggestions?language=' + locale + '&q=' + encodeURIComponent(phrase))
            .then(response => response.json())
            .then(result => {
                this.setState({
                    items: result,
                    visibleItems: true
                });
            });
    }
    
    render() {
        const { t } = this.props.t;

        return (
            <div className="form search__form">
                <div className="search__wrapper">
                    <div className="icon search__icon">
                        <SearchIcon />
                    </div>
                    <input
                        className="form__input search__input"
                        type="text"
                        placeholder={t('searchbar.placeholder')}
                        onClick={this.onClick}
                        onChange={this.onChange}
                        value={this.state.inputValue}
                        onBlur={this.onBlur}
                        onFocus={this.onFocus}
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
                        colored={true}
                        type="submit"
                    >
                        {t('button.search')}
                    </Button>
                </div>
                
                <SearchbarItems
                    items={this.state.items}
                    visibleItems={this.state.visibleItems}
                    onOutsideClick={() => {
                        this.setState({
                            visibleItems: false
                        });
                    }}
                />
            </div>
            
        );
    }
}

const Searchbar = Component => props => {
    const t = useTranslation('components');
    const route = useRouter();

    return <Component {...props} t={t} route={route} />;
};

export default Searchbar(SearchbarClass);