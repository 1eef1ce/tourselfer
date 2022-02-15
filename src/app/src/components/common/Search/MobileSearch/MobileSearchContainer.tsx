import React from 'react';
import MobileSearchBtn from '@components/common/Search/MobileSearch/MobileSearchBtn';
import MobileSearch from '@components/common/Search/MobileSearch/MobileSearch';

class MobileSearchContainer extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
    }

    toggleMenu() {
        this.setState({
            visible: !this.state.visible
        });
    }

    handleMouseDown(e) {
        this.toggleMenu();
        e.stopPropagation();
    }

    render() {
        return (
            <>
                <MobileSearchBtn handleMouseDown={this.handleMouseDown}/>
                <MobileSearch menuVisibility={this.state.visible}/>
            </>
        );
    }
}

export default MobileSearchContainer;