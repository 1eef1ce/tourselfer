import React from 'react';
import {SearchIcon} from '@components/icons';

class MobileSearchBtn extends React.PureComponent<any, any> {
    render() {
        return (
            <button className="search-btn icon" onMouseDown={this.props.handleMouseDown}>
                <SearchIcon/>
            </button>
        );
    }
}

export default MobileSearchBtn;