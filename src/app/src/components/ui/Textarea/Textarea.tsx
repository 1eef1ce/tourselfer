//TODO: custom scrollbar in textarea

import React, {TextareaHTMLAttributes} from 'react';
import cn from 'classnames';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    id: string
    name: string
    label?: string
    required?: boolean
    maxLength?: number
}

interface TextareaState {
    currentHeight: number
    focus: boolean
    inputValue: string
    length: number
}

class Textarea extends React.Component<TextareaProps, TextareaState> {
    constructor(props) {
        super(props);
        this.state = {
            currentHeight: 104,
            focus: false,
            inputValue: '',
            length: 0
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
    }

    onChange(e) {
        this.setState({
            inputValue: (e.target as HTMLInputElement).value,
            length: (e.target as HTMLInputElement).value.length
        });
    }

    render() {
        const {
            id,
            name,
            label,
            required,
            maxLength,
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
                    <textarea
                        className="form__input form__textarea"
                        //style={{height: this.state.currentHeight}}
                        id={id}
                        name={name}
                        value={this.state.inputValue}
                        required={required}
                        maxLength={maxLength}
                        onBlur={this.onBlur}
                        onFocus={this.onFocus}
                        onChange={this.onChange}
                        {...props}
                    />
                    {maxLength != null && (
                        <span className="form__length">{this.state.length}/{maxLength}</span>
                    )}
                </div>
            </>
        );
    }
}

export default Textarea;
