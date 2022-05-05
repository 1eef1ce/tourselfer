import React, { useState } from 'react';
import {ChevronDown} from '@components/icons';
import cn from 'classnames';

const Accordion = ({title, content}) => {
    const [isActive, setIsActive] = useState(false);
    const toggleActive = () => {
        setIsActive(!isActive)
    };

    return (
        <div className={cn("accordion__item", {active: isActive})}>
            <div className="accordion__head" onClick={toggleActive}>
                <div className="accordion__title">{title}</div>
                <div className="accordion__icon icon"><ChevronDown/></div>
            </div>
            <div className="accordion__body">{content}</div>
        </div>
    );
};

export default Accordion;