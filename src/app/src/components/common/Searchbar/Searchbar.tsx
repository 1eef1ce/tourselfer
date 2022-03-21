import React, { useState, useRef, useEffect, createRef } from 'react';
import debounce from 'lodash.debounce';
import {SearchIcon, MapPinBlack, TourselferIcon} from '@components/icons';
import {Button} from '@components/ui';
import {SearchbarItems} from '@components/common/SearchbarItems';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router'


class SearchbarClass extends React.Component<any, any, any> {
    
    wrapperRef = createRef();

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            visibleItems: false
        };

        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);

        this.fetchData = debounce(this.fetchData, 500);        
    }


    onChange(event) {
        this.fetchData(event.target.value);
    }

    onClick(event) {
        if (this.state.items && this.state.items.length > 0 && !this.state.visibleItems) {
            this.setState({
                visibleItems: true
            });
        }
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
                    <input className="form__field search__field" type="search" placeholder={t('searchbar.placeholder')} onClick={this.onClick} onChange={this.onChange} />
                    <Button
                        className="search__btn"
                        variant="filled"
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