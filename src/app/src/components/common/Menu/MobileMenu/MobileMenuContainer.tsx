import React from 'react';
import MobileMenuBtn from './MobileMenuBtn';
import MobileMenu from './MobileMenu';

class MobileMenuContainer extends React.Component<any, any> {
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
                <MobileMenuBtn handleMouseDown={this.handleMouseDown}/>
                <MobileMenu handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible}/>
            </>
        );
    }
}

export default MobileMenuContainer;