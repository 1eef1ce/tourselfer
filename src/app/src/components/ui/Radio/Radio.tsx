import React, {InputHTMLAttributes} from 'react';

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string
    name: string
    value: string
    label?: string
}

interface RadioState {
    checked: boolean
}

class Radio extends React.Component<RadioProps, RadioState> {
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
            ...props
        } = this.props;

        return (
            <label className="radio" htmlFor={id}>
                <input
                    className="radio__input"
                    type="radio"
                    id={id}
                    name={name}
                    value={value}
                    onClick={this.onChange}
                    {...props}
                />
                <span className="radio__label">{label}</span>
            </label>
        );
    }
}

export default Radio;