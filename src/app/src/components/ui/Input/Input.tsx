import React from 'react';
import cn from 'classnames';
import {EyeClosed, EyeOpened} from '@components/icons';

export interface InputProps {
    label: string
    required: boolean
    type: 'text' | 'email' | 'password'
}

export interface InputState {
    focus: boolean
    inputValue: string
    showPassword: boolean
}

class Input extends React.Component<InputProps, InputState> {
    constructor(props) {
        super(props);
        this.state = {
            focus: false,
            inputValue: '',
            showPassword: false
        };
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onChange = this.onChange.bind(this);
        this.getClass = this.getClass.bind(this);
        this.showPassword = this.showPassword.bind(this);
    }
    onFocus() {
        this.setState({focus: true});
    }
    onBlur() {
        this.setState({focus: false});
    }
    onChange() {
        this.setState({inputValue: (event.target as HTMLInputElement).value});
    }
    getClass() {
        if(this.state.focus === true)
            return "focus";
        else
            return "";
    }
    showPassword() {
        this.setState({showPassword: !this.state.showPassword});

    }

    render() {
        const inputClass = this.getClass();
        return (
            <>
                <label className="form__label">
                    {this.props.label}
                    {this.props.required && (<span> *</span>)}
                </label>
                <div className={cn("gradient-border", inputClass)}>
                    <input className="form__field" type={this.props.type} value={this.state.inputValue}
                           required={this.props.required}
                           onBlur={this.onBlur} onFocus={this.onFocus} onChange={this.onChange}
                    />
                    {(this.props.type == 'password' && this.state.inputValue !== '') && (
                        <span className="form__icon" onClick={this.showPassword}>
                            {this.state.showPassword ? <EyeOpened/> : <EyeClosed/>}
                        </span>
                    )}
                    <div className="form__error">Helper Text</div>
                </div>
            </>
        );
    }
}

export default Input;
