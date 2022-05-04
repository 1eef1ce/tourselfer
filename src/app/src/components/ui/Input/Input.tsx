import React, {InputHTMLAttributes} from 'react';
import cn from 'classnames';
import {Close} from '@components/icons';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string
    name: string
    label?: string
    required?: boolean
    type?: 'text' | 'email' | 'password'
    noClear?: boolean
}

interface InputState {
    focus: boolean
    inputValue: string
}

class Input extends React.Component<InputProps, InputState> {
    constructor(props) {
        super(props);
        this.state = {
            focus: false,
            inputValue: ''
        };
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onChange = this.onChange.bind(this);
        this.clearValue = this.clearValue.bind(this);
    }

    onFocus() {
        this.setState({focus: true});
    }

    onBlur() {
        this.setState({focus: false});
    }

    onChange(e) {
        this.setState({inputValue: (e.target as HTMLInputElement).value});
    }

    clearValue(e) {
        e.preventDefault();
        this.setState({inputValue: ''});
    }

    render() {
        const {
            id,
            name,
            label,
            required,
            type = 'text',
            noClear = false,
            ...props
        } = this.props;

        const inputClass = () => {
            if (this.state.focus === true) {
                return "focus";
            }
            else {
                return "";
            }
        };

        const noClearClass = () => {
            if (noClear) {
                return "form__input--noClear"
            }
            else {
                return "";
            }
        };

        return (
            <>
                {label != null && label !== '' && (
                    <label className="form__label" htmlFor={id}>
                        {label}
                        {required && (<span> *</span>)}
                    </label>
                )}
                <div className={cn("form__field", inputClass())}>
                    <input
                        className={cn("form__input", noClearClass())}
                        id={id}
                        name={name}
                        type={type}
                        value={this.state.inputValue}
                        required={required}
                        onBlur={this.onBlur}
                        onFocus={this.onFocus}
                        onChange={this.onChange}
                        {...props}
                    />
                    {(!noClear && ((this.state.inputValue !== '') || (this.props.value !== '')) && (this.state.focus === true)) &&
                    (
                    <span className="form__icon" onMouseDown={this.clearValue}>
                        <Close/>
                    </span>
                    )}
                </div>
            </>
        );
    }
}

export default Input;
