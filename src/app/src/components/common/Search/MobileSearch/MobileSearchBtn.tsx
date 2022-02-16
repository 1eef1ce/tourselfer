import React from 'react';
import {SearchIcon} from '@components/icons';

class MobileSearchBtn extends React.PureComponent<any, any> {
    render() {
        return (
            <div className="search-btn icon" onMouseDown={this.props.handleMouseDown}>
                <SearchIcon/>
            </div>
        );
    }
}

export default MobileSearchBtn;