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
        this.state = {focus: false};
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.getClass = this.getClass.bind(this);
    }

    onFocus() {
        this.setState({focus: true});
    }

    onBlur() {
        this.setState({focus: false});
    }

    getClass() {
        if (this.state.focus === true)
            return "focus";
        else
            return "";
    }

    render() {
        const inputClass = this.getClass();
        return (
            <>
                {(this.props.isFilter)
                    ? <div className="filter__text">{this.props.label}</div>
                    : <label className="form__label">{this.props.label}</label>}
                <div className={cn("gradient-border", inputClass)}>
                    <Select className="select" classNamePrefix={this.props.classPrefix} instanceId={this.props.id}
                            options={this.props.options} components={{DropdownIndicator}} isSearchable={false}
                            styles={styleProxy} defaultValue={this.props.defaultOption}
                            onBlur={this.onBlur} onFocus={this.onFocus}
                    />
                    <div className="form__error">Helper Text</div>
                </div>
            </>
        );
    }
}

export default SelectField;
