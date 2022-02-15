import React from 'react';
import {Button} from '@components/ui';
import {SearchIcon} from '@components/icons';

class MobileSearchBtn extends React.PureComponent<any, any> {
    render() {
        return (
            <Button className="search-btn icon" onMouseDown={this.props.handleMouseDown}>
                <SearchIcon/>
            </Button>
        );
    }
}

export default MobileSearchBtn;