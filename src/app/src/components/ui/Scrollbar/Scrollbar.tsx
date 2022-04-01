import React, {Component} from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';

class Scrollbar extends Component {
    render() {
        return (
            <Scrollbars   
                autoHeight
                autoHeightMin={0}
                autoHeightMax={1000}                  
                renderView={(props) => <div {...props} className="view" />}
                renderTrackVertical={(props) => <div {...props} className="vtrack" />}
                renderThumbVertical={(props) => <div {...props} className="vthumb" />}
                renderTrackHorizontal={(props) => <div {...props} className="htrack" />}
                renderThumbHorizontal={(props) => <div {...props} className="hthumb" />}
                universal={true}
            >
                <div className={'scroll-inner'}>
                    {this.props.children}  
                </div>      
            </Scrollbars>
        );
    }
}

export default Scrollbar;