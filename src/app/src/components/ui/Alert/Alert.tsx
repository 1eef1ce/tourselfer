import React from 'react';

interface AlertProps {
    type?: 'success' | 'error' | 'info';
    icon?: boolean;
    onClick?: () => void;
}

const Alert: React.FC<AlertProps> = ((props) => {
    const {
        type = 'info',
        icon = false,
        children,
        ...rest
    } = props;

    const mode = icon ? 'with-icon' : 'no-icon';
    const handleClick = (event) => {
        const target = event.target;
        const parent = target.parentElement;
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
                {children}
            </div>
            <button className={'close-btn'} onClick={handleClick}/>
        </div>
    );
});

export default Alert;