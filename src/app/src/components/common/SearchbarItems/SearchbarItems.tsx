import React, { createRef } from 'react';
import { MapPinBlack } from '@components/icons';


class SearchbarItems extends React.Component {
    wrapperRef = createRef();

    constructor(props) {
        super(props);
        this.state = {
            currentIndex: -1
        };
    }

    static defaultProps = {
        onOutsideClick: () => { /*return nothing*/ },
        items: [],
        visibleItems: false
    };

    componentDidMount() {
        document.addEventListener("mousedown", this.onClickOutside.bind(this));
        document.addEventListener("keydown", this.onKeyDown.bind(this));
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.onClickOutside.bind(this));
        document.removeEventListener("keydown", this.onKeyDown.bind(this));
    }

    onClickOutside(event) {
        if (
            this.wrapperRef.current &&
            !this.wrapperRef.current.contains(event.target)
        ) {
            this.props.onOutsideClick();
            this.setState({
                currentIndex: -1
            });
        }
    }

    onKeyDown(event) {

        switch (event.code) {

            case "ArrowDown":

                if (this.props.items[this.state.currentIndex + 1]) {
                    this.setState({
                        currentIndex: this.state.currentIndex + 1
                    });
                }

                break;

            case "ArrowUp":

                if (this.state.currentIndex - 1 >= 0) {
                    this.setState({
                        currentIndex: this.state.currentIndex - 1
                    });
                }

                break;

            case "Enter":
                if (this.state.currentIndex >= 0)
                {
                    console.log(this.props.items[this.state.currentIndex]);
                }
                break;

            case "Escape":
                this.setState({
                    currentIndex: -1
                });
                this.props.onOutsideClick();
                
                break;
        }
    }

    render() {

        if (this.props.visibleItems && this.props.items && this.props.items.length > 0) {
            return (
                <div className="search-suggestions" ref={this.wrapperRef}>
                    {this.props.items.map((item, key) => (
                        <div className={"search-suggestions__item" + (this.state.currentIndex == key ? ' active' : '')} key={item.label.general}>
                            <div className="icon search-suggestions__icon"><MapPinBlack /></div>
                            <div className="search-suggestions__title">
                                <div className="search-suggestions__label">{item.label.general}</div>
                                {Array.isArray(item.label.subs) && item.label.subs.length > 0 &&
                                    <div className="search-suggestions__subs">
                                        {item.label.subs.join(', ')}
                                    </div>
                                }
                            </div>
                        </div>
                    ))}
                </div>
            );
        } else {
            return (
                <></>
            );
        }
    }
}

export default SearchbarItems;