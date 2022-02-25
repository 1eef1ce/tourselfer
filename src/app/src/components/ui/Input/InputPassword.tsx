import React from 'react';
import cn from 'classnames';
import {EyeClosed, EyeOpened} from '@components/icons';

export interface InputProps {
    label: string
}

export interface InputState {
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
        this.setState({showPassword: !this.state.showPassword,});
    }

    render() {
        const inputClass = this.getClass();
        return (
            <>
                <label className="form__label">{this.props.label}</label>
                <div className={cn("gradient-border", inputClass)}>
                    <input className="form__field" type={this.state.showPassword ? 'text' : 'password'} value={this.state.inputValue}
                           required
                           onBlur={this.onBlur} onFocus={this.onFocus} onChange={this.onChange}
                    />
                    {(this.state.inputValue !== '') && (
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

export default InputPassword;
