import cn from 'classnames';
import React, {forwardRef, ButtonHTMLAttributes, JSXElementConstructor} from 'react';
import {Loader} from '@components/ui';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    href?: string
    className?: string
    variant?: 'outlined' | 'filled'
    size?: 'medium' | 'large'
    type?: 'submit' | 'reset' | 'button'
    Component?: string | JSXElementConstructor<any>
    loading?: boolean
    disabled?: boolean
    isIcon?: boolean
    icon?
    isStartIcon?: boolean
    startIcon?
    isEndIcon?: boolean
    endIcon?
}

const Button: React.FC<ButtonProps> = ((props) => {
    const {
        className,
        variant,
        size,
        isIcon,
        icon,
        isStartIcon,
        startIcon,
        isEndIcon,
        endIcon,
        children,
        loading = false,
        disabled = false,
        Component = 'button',
        ...rest
    } = props;

    const rootClassName = cn(
        'btn',
        {
            ['btn--outlined']: variant === 'outlined',
            ['btn--filled']: variant === 'filled',
            ['btn--medium']: size === 'medium',
            ['btn--large']: size === 'large',
            ['btn--icon']: isIcon === true,
            ['loading']: loading === true
        },
        className
    );

    if (isIcon) {
        return (
            <Component
                className={rootClassName}
                disabled={disabled}
                {...rest}
            >
                <span className="icon">{icon}</span>
                {loading && (<Loader/>)}
            </Component>
        );
    }
    else {
        return (
            <Component
                className={rootClassName}
                disabled={disabled}
                {...rest}
            >
                {isStartIcon && (<span className="icon icon--start">{startIcon}</span>)}
                {children}
                {isEndIcon && (<span className="icon icon--end">{endIcon}</span>)}
                {loading && (<Loader/>)}
            </Component>
        );
    }
});

export default Button;