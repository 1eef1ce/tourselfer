import React from 'react';
import MobileSearch from '@components/common/Search/MobileSearch/MobileSearch';

class MobileSearchContainer extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <MobileSearch/>
            </>
        );
    }
}

export default MobileSearchContainer;