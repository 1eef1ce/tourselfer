import React, {InputHTMLAttributes} from 'react';
import cn from 'classnames';
import {EyeClosed, EyeOpened} from '@components/icons';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string
    name: string
    value?: string
    label?: string
    required?: boolean
}

interface InputState {
    type: string
    focus: boolean
    inputValue: string
    showPassword: boolean
}

class InputPassword extends React.Component<InputProps, InputState> {
    constructor(props) {
        super(props);
        this.state = {
            type: 'password',
            focus: false,
            inputValue: '',
            showPassword: false
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
                        className="form__input"
                        id={id}
                        name={name}
                        type={this.state.showPassword ? 'text' : 'password'}
                        value={this.state.inputValue}
                        required={required}
                        onBlur={this.onBlur}
                        onFocus={this.onFocus}
                        onChange={this.onChange}
                        {...props}
                    />
                    {((this.state.inputValue !== '') || (this.props.value !== '')) && (
                        <span className="form__icon" onMouseDown={this.showPassword}>
                            {this.state.showPassword ? <EyeOpened/> : <EyeClosed/>}
                        </span>
                    )}
                </div>
            </>
        );
    }
}

export default InputPassword;
