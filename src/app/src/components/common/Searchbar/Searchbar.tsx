import React, { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';
import {SearchIcon} from '@components/icons';
import {Button} from '@components/ui';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router'


class SearchbarClass extends React.Component<any, any, any> {
    
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };

        this.onChange = this.onChange.bind(this);
        this.fetchData = debounce(this.fetchData, 500);
    }

    onChange(event) {
        this.fetchData(event.target.value);
    }

    fetchData(phrase) {
        const { locale } = this.props.route;

        fetch(process.env.API_HOST + '/api/v1/search/suggestions?language=' + locale + '&q=' + encodeURIComponent(phrase))
            .then(response => response.json())
            .then(result => {
                this.setState({
                    items: result
                });
            });
    }
    
    render() {
        const { t } = this.props.t;

        return (
            <form className="form search__form">
                <div className="search__wrapper">
                    <div className="icon search__icon">
                        <SearchIcon />
                    </div>
                    <input className="form__field search__field" type="search" placeholder={t('searchbar.placeholder')} onChange={this.onChange} />
                    <Button
                        className="search__btn"
                        variant="filled"
                        type="submit"
                    >
                        {t('button.search')}
                    </Button>
                </div>
                {this.state.items && this.state.items.length > 0 &&
                    <div className="search__suggestions__wrapper">
                    {this.state.items.map(item => (
                        <div className="item">
                            <div className="label">{item.label.general}</div>
                            {Array.isArray(item.label.subs) && item.label.subs.length > 0 &&
                                <div className="subs">
                                    {item.label.subs.join(', ')}
                                </div>
                            }
                        </div>
                    ))}
                    </div>
                }
            </form>
            
        );
    }

}

const Searchbar = Component => props => {
    const t = useTranslation('components');
    const route = useRouter();

    return <Component {...props} t={t} route={route} />;
};

export default Searchbar(SearchbarClass);