import React from "react";
import cn from 'classnames';
import {InputPassword} from '@components/ui';

class PasswordsContainer extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            confirmValue: '',
            matchValue: '',
            match: true
        };

        this.onChange = this.onChange.bind(this);
        this.onConfirmChange = this.onConfirmChange.bind(this);
    }

    onChange(e) {
        if ((e.target as HTMLInputElement).value !== this.state.confirmValue) {
            this.setState({match: false});
        }
        else {
            this.setState({match: true});
        }
        this.setState({inputValue: (e.target as HTMLInputElement).value});
    }

    onConfirmChange(e) {
        if ((e.target as HTMLInputElement).value !== this.state.inputValue) {
            this.setState({match: false});
        }
        else {
            this.setState({match: true});
        }
        this.setState({confirmValue: (e.target as HTMLInputElement).value});
    }

    render() {
        const {
            id,
            confirmId,
            name,
            confirmName,
            label,
            confirmLabel,
            required,
            pattern,
            minLength,
            requiredMessage,
            patternMessage,
            minLengthMessage,
        } = this.props;
        return (
            <>
                <div className="form__row">
                    <InputPassword
                        id={id}
                        name={name}
                        label={label}
                        required={required}
                        pattern={pattern}
                        minLength={minLength}
                        requiredMessage={requiredMessage}
                        patternMessage={patternMessage}
                        minLengthMessage={minLengthMessage}
                        value={this.state.inputValue}
                        onChange={this.onChange}
                    />
                </div>
                <div className="form__row">
                    <InputPassword
                        className={cn("form__input", !this.state.match && "error")}
                        id={confirmId}
                        name={confirmName}
                        label={confirmLabel}
                        value={this.state.confirmValue}
                        onChange={this.onConfirmChange}
                    />
                    {!this.state.match && <div className="form__error">Пароли не совпадают</div>}
                </div>
            </>
        );
    }
}

export default PasswordsContainer;