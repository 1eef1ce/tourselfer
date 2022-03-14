import React, {InputHTMLAttributes} from 'react';
import cn from 'classnames';
import {EyeClosed, EyeOpened} from '@components/icons';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string
    name: string
    value?: string
    label?: string
    required?: boolean
    pattern?: string
    minLength?: number
    requiredMessage?: string
    patternMessage?: string
    minLengthMessage?: string
}

interface InputState {
    type: string
    focus: boolean
    inputValue: string
    showPassword: boolean
    missingRequired: boolean
    patternMatch: boolean
    minLengthMatch: boolean
}

class InputPassword extends React.Component<InputProps, InputState> {
    constructor(props) {
        super(props);
        this.state = {
            type: 'password',
            focus: false,
            inputValue: '',
            showPassword: false,
            missingRequired: false,
            patternMatch: true,
            minLengthMatch: true
        };
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onChange = this.onChange.bind(this);
        this.showPassword = this.showPassword.bind(this);
    }

    onFocus() {
        this.setState({focus: true});
    }

    onBlur() {
        this.setState({focus: false});

        if ((this.props.required == true) &&
            ((this.state.inputValue == '') && (this.props.value == '')) ||
            ((this.state.inputValue == '') && (this.props.value == undefined))) {
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

        if ((this.state.inputValue).length < this.props.minLength) {
            this.setState({minLengthMatch: false});
        }
        else {
            this.setState({minLengthMatch: true});
        }
    }

    onChange(e) {
        this.setState({inputValue: (e.target as HTMLInputElement).value});
    }

    showPassword(e) {
        e.preventDefault();
        this.setState({showPassword: !this.state.showPassword});
    }

    render() {
        const {
            id,
            name,
            label,
            required,
            pattern,
            minLength,
            requiredMessage,
            patternMessage,
            minLengthMessage,
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
            return (this.state.missingRequired || !this.state.patternMatch || !this.state.minLengthMatch) ? 'error' : '';
        };

        return (
            <>
                {label != null && label !== '' && (
                    <label className="form__label" htmlFor={id}>{label}</label>
                )}
                <div className={cn("form__field", inputClass(), errorClass())}>
                    <input
                        className={cn("form__input", errorClass())}
                        id={id}
                        name={name}
                        type={this.state.showPassword ? 'text' : 'password'}
                        value={this.state.inputValue}
                        required={required}
                        pattern={pattern}
                        minLength={minLength}
                        onBlur={this.onBlur}
                        onFocus={this.onFocus}
                        onChange={this.onChange}
                        {...props}
                    />
                    {((this.state.inputValue !== '') || (this.props.value !== undefined) && (this.props.value !== '')) && (
                        <span className="form__icon" onMouseDown={this.showPassword}>
                            {this.state.showPassword ? <EyeOpened/> : <EyeClosed/>}
                        </span>
                    )}
                </div>
                {this.state.missingRequired && <div className="form__error">{requiredMessage}</div>}
                {(!this.state.missingRequired && !this.state.patternMatch) && <div className="form__error">{patternMessage}</div>}
                {(!this.state.missingRequired && !this.state.minLengthMatch) && <div className="form__error">{minLengthMessage}</div>}
            </>
        );
    }
}

export default InputPassword;
