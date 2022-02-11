import React from 'react';
import MobileMenuBtn from "@components/common/Menu/MobileMenu/MobileMenuBtn";
import MobileMenu from "@components/common/Menu/MobileMenu/MobileMenu";

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

        const links = [
            {
                label: "How the site works?",
                href: "/how-the-site-works",
            },
            {
                label: "Become an author",
                href: "/become-an-author"
            },
            {
                label: "Support",
                href: "/support"
            }
        ];

        return (
            <>
                <MobileMenuBtn handleMouseDown={this.handleMouseDown}/>
                <MobileMenu handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible} links={links}/>
            </>
        );
    }
}

export default MobileMenuContainer;