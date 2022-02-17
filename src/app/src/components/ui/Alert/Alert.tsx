import React from 'react';
import cn from 'classnames';

interface AlertProps {
    type?: 'success' | 'error' | 'info';
    icon?: boolean;
    title?: string;
    message: string;
    onClick?: () => void;
}

const Alert = ({
    type = 'info',
    icon = false,
    title,
    message,
    ...props
}: AlertProps) => {
    const mode = icon ? 'with-icon' : 'no-icon';
    const handleClick = (event) => {
        var target = event.target;
        var parent = target.parentElement;
        parent.remove();
    };
    return (
        <div
            className={['alert', `alert-${type}`, mode].join(' ')}
            {...props}
        >
            {icon && (
                <div className={'icon'}/>
            )}
            <div className={'alert-content'}>
            {title && (
                <span className={'alert-title'}>{title}</span>
            )}
                <span className={'alert-msg'}>{message}</span>
            </div>
            <button className={'close-btn'} onClick={handleClick}/>
        </div>
    );
};

export default Alert;