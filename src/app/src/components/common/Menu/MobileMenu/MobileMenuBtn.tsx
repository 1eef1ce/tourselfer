import React from 'react';

class MobileMenuBtn extends React.PureComponent<any, any> {
    render() {
        return (
            <div className="burger-btn" onMouseDown={this.props.handleMouseDown}>
                <span/>
                <span/>
                <span/>
            </div>
        );
    }
}

export default MobileMenuBtn;