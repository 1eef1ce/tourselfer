import React from 'react';
import {Button} from '@components/ui';

class MobileMenuBtn extends React.PureComponent {
    render() {
        return (
            <Button className="burger-btn" onMouseDown={this.props.handleMouseDown}>
                <span/>
                <span/>
                <span/>
            </Button>
        );
    }
}

export default MobileMenuBtn;