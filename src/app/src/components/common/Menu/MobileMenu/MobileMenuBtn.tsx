import React from 'react';

class MobileMenuBtn extends React.PureComponent<any, any> {
    render() {
        return (
            <button className="burger-btn" onMouseDown={this.props.handleMouseDown}>
                <span/>
                <span/>
                <span/>
            </button>
        );
    }
}

export default MobileMenuBtn;