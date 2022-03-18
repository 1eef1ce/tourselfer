import React, {InputHTMLAttributes} from 'react';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string
    name: string
    value: string
    label?: string
    required?: boolean
}

interface CheckboxState {
    checked: boolean
}

class Checkbox extends React.Component<CheckboxProps, CheckboxState> {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({checked: (e.target as HTMLInputElement).checked});
    }

    render() {
        const {
            id,
            name,
            value,
            label,
            required,
            ...props
        } = this.props;

        return (
            <label className="checkbox" htmlFor={id}>
                <input
                    className="checkbox__input"
                    type="checkbox"
                    id={id}
                    name={name}
                    value={value}
                    required={required}
                    onClick={this.onChange}
                    {...props}
                />
                <span className="checkbox__label">{label}</span>
            </label>
        );
    }
}

export default Checkbox;