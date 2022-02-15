import cn from 'classnames';
import {Searchbar} from '@components/common';

const MobileSearch = (props) =>  {
    let visibility;
    if (props.menuVisibility) {
        visibility = 'show';
    }

    return (
        <div className={cn("mobile-search", visibility)}>
            <Searchbar/>
        </div>
    );
};

export default MobileSearch;