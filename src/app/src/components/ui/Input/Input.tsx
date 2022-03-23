import React, {InputHTMLAttributes} from 'react';
import cn from 'classnames';
import {Close} from '@components/icons';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string
    name: string
    label?: string
    required?: boolean
    type?: 'text' | 'email' | 'password'
    classPrefix?: string
    pattern?: string,
    requiredMessage?: string
    patternMessage?: string
}

interface InputState {
    focus: boolean
    inputValue: string
    missingRequired: boolean
    patternMatch: boolean
}

class Input extends React.Component<InputProps, InputState> {
    constructor(props) {
        super(props);
        this.state = {
            focus: false,
            inputValue: '',
            missingRequired: false,
            patternMatch: true
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

        if ((this.props.required == true) && (this.state.inputValue == '')) {
            this.setState({missingRequired: true});
        }
        else {
            this.setState({missingRequired: false});
        }

        if (this.props.pattern && !RegExp(this.props.pattern).test(this.state.inputValue)) {
            this.setState({patternMatch: false});
        }
        else {
            this.setState({patternMatch: true});
        }
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
            pattern,
            requiredMessage,
            patternMessage,
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
        const errorClass = () => {
            return (this.state.missingRequired || !this.state.patternMatch) ? 'error' : '';
        };

        return (
            <>
                {label != null && label !== '' && (
                    <label className="form__label" htmlFor={id}>
                        {label}
                        {required && (<span> *</span>)}
                    </label>
                )}
                <div className={cn("form__field", inputClass(), errorClass())}>
                    <input
                        className={cn("form__input", errorClass())}
                        id={id}
                        name={name}
                        type={type}
                        value={this.state.inputValue}
                        required={required}
                        pattern={pattern}
                        onBlur={this.onBlur}
                        onFocus={this.onFocus}
                        onChange={this.onChange}
                        {...props}
                    />
                    {(((this.state.inputValue !== '') || (this.props.value !== '')) && (this.state.focus === true)) &&
                    (
                    <span className="form__icon" onMouseDown={this.clearValue}>
                        <Close/>
                    </span>
                    )}
                </div>
                {this.state.missingRequired && <div className="form__error">{requiredMessage}</div>}
                {(!this.state.missingRequired && !this.state.patternMatch) && <div className="form__error">{patternMessage}</div>}
            </>
        );
    }
}

export default Input;
