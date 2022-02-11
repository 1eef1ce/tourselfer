import React from 'react';
import cn from 'classnames';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            focus: false,
            inputValue: ''
        };
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onChange = this.onChange.bind(this);
        this.getClass = this.getClass.bind(this);
    }
    onFocus() {
        this.setState({focus: true});
    }
    onBlur() {
        this.setState({focus: false});
    }
    onChange() {
        this.setState({inputValue: event.target.value});
    }
    getClass() {
        if(this.state.focus === true)
            return "focus";
        else
            return "";
    }

    render() {
        const inputClass = this.getClass();
        return (
            <>
                <label className="form__label">Адрес *</label>
                <div className={cn("gradient-border", inputClass)}>
                    <input className="form__field" type="text" value={this.state.inputValue}
                           onBlur={this.onBlur} onFocus={this.onFocus} onChange={this.onChange}
                    />
                    <div className="form__error">Helper Text</div>
                </div>
            </>
        );
    }
}

export default Input;
