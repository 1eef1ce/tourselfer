import React from 'react';

interface ProgressbarState {
    progressNum: number
}

class Progressbar extends React.Component<any,ProgressbarState> {
    constructor(props) {
        super(props);
        this.state = {
            progressNum: 20
        };
    }
    render() {
        return (
            <div className="progressbar">
                <div className="progressbar__line">
                    <div className="progressbar__thumb" style={{width: this.state.progressNum +'%'}}/>
                    <div className="progressbar__value">Progress {this.state.progressNum}%</div>
                </div>
            </div>
        );
    }
}

export default Progressbar;