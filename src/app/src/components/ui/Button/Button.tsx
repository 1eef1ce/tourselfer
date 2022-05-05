import cn from 'classnames';
import React, {ButtonHTMLAttributes, JSXElementConstructor} from 'react';
import {Loader} from '@components/ui';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    href?: string
    className?: string
    variant?: 'outlined' | 'filled'
    size?: 'medium' | 'large'
    squared? : boolean
    colored?: boolean
    danger?: boolean
    type?: 'submit' | 'reset' | 'button'
    Component?: string | JSXElementConstructor<any>
    loading?: boolean
    disabled?: boolean
    isIcon?: boolean
    icon?: JSX.Element
    isStartIcon?: boolean
    startIcon?: JSX.Element
    isEndIcon?: boolean
    endIcon?: JSX.Element
}

const Button: React.FC<ButtonProps> = ({
    className,
    variant,
    size,
    squared,
    colored,
    danger,
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
}) => {

    const rootClassName = cn(
        'btn',
        {
            ['btn--colored']: colored === true,
            ['btn--outlined']: variant === 'outlined',
            ['btn--filled']: variant === 'filled',
            ['btn--medium']: size === 'medium',
            ['btn--large']: size === 'large',
            ['btn--squared']: squared === true,
            ['btn--danger']: danger === true,
            ['btn--icon']: isIcon === true,
            ['loading']: loading === true
        },
        className
    );

    return (
        <Component
            className={rootClassName}
            disabled={disabled}
            {...rest}
        >
            {isIcon
                ? (<span className="icon">{icon}</span>)
                : (
                    <>
                        {isStartIcon && (<span className="icon icon--start">{startIcon}</span>)}
                        {children}
                        {isEndIcon && (<span className="icon icon--end">{endIcon}</span>)}
                    </>
                )
            }
            {loading && (<Loader/>)}
        </Component>
    );
};

export default Button;