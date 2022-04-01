import React from 'react';
import cn from 'classnames';
import Select, {components, DropdownIndicatorProps} from 'react-select';
import {ChevronDown} from '@components/icons';

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

class SelectField extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            focus: false
        };
        this.state = {focus: false};
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    onFocus() {
        this.setState({focus: true});
    }

    onBlur() {
        this.setState({focus: false});
    }

    render() {
        const {
            id,
            name,
            label,
            required,
            classPrefix,
            options,
            defaultOption
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
                    <Select
                        className="select"
                        classNamePrefix={classPrefix}
                        name={name}
                        instanceId={id}
                        options={options}
                        components={{DropdownIndicator}}
                        isSearchable={false}
                        styles={styleProxy}
                        defaultValue={defaultOption}
                        onBlur={this.onBlur}
                        onFocus={this.onFocus}
                    />
                </div>
            </>
        );
    }
}

export default SelectField;
