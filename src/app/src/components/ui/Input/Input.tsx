import React, {InputHTMLAttributes} from 'react';
import cn from 'classnames';
import Select, {components, DropdownIndicatorProps} from 'react-select';
import {ChevronDown, Close} from '@components/icons';

const DropdownIndicator = props => {
    return (
        <components.DropdownIndicator {...props}>
            <div className="icon">
                <ChevronDown/>
            </div>
        </components.DropdownIndicator>
    );
};

const styleProxy = new Proxy({}, {
    get: (target, propKey) => () => {
        //clears select styles
    }
});

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string
    name: string
    label?: string
    required?: boolean
    type?: 'text' | 'email' | 'password'
    isSelect?: boolean
    isFilter?: boolean
    classPrefix?: string
    options?: object[]
    defaultOption?: object[]
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
            isSelect = false,
            isFilter,
            classPrefix,
            options,
            defaultOption,
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
                    !isFilter
                        ? (
                            <label className="form__label" htmlFor={id}>
                                {label}
                                {required && (<span> *</span>)}
                            </label>
                        )
                        : (
                            <label className="filter__text">{label}</label>
                        )
                )}
                <div className={cn("form__field", inputClass(), errorClass())}>
                    {isSelect
                        ? (
                            <Select
                                className={cn("select", errorClass())}
                                classNamePrefix={classPrefix}
                                instanceId={id}
                                name={name}
                                options={options}
                                components={{DropdownIndicator}}
                                isSearchable={false}
                                styles={styleProxy}
                                defaultValue={defaultOption}
                                onBlur={this.onBlur}
                                onFocus={this.onFocus}
                            />
                        )
                        : (
                            <>
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
                                {((this.state.inputValue !== '') && (this.state.focus === true)) &&
                                (
                                <span className="form__icon" onMouseDown={this.clearValue}>
                                    <Close/>
                                </span>
                                )}
                            </>
                        )
                    }
                </div>
                {this.state.missingRequired && <div className="form__error">{requiredMessage}</div>}
                {(!this.state.missingRequired && !this.state.patternMatch) && <div className="form__error">{patternMessage}</div>}
            </>
        );
    }
}

export default Input;
