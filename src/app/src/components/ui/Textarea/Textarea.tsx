//TODO: custom scrollbar in textarea

import React, {TextareaHTMLAttributes} from 'react';
import cn from 'classnames';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    id: string
    name: string
    label?: string
    required?: boolean
    requiredMessage?: string
}

interface TextareaState {
    currentHeight: number
    focus: boolean
    inputValue: string
    missingRequired: boolean
}

class Textarea extends React.Component<TextareaProps, TextareaState> {
    constructor(props) {
        super(props);
        this.state = {
            currentHeight: 104,
            focus: false,
            inputValue: '',
            missingRequired: false
        };
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onChange = this.onChange.bind(this);
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
    }

    onChange(e) {
        this.setState({inputValue: (e.target as HTMLInputElement).value});
    }

    render() {
        const {
            id,
            name,
            label,
            required,
            requiredMessage,
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
            return (this.state.missingRequired) ? 'error' : '';
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
                    <textarea
                        className={cn("form__input form__textarea", errorClass())}
                        style={{height: this.state.currentHeight}}
                        id={id}
                        name={name}
                        value={this.state.inputValue}
                        required={required}
                        onBlur={this.onBlur}
                        onFocus={this.onFocus}
                        onChange={this.onChange}
                        {...props}
                    />
                </div>
                {this.state.missingRequired && <div className="form__error">{requiredMessage}</div>}
            </>
        );
    }
}

export default Textarea;
