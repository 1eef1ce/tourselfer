import React from 'react';
import cn from 'classnames';

class Textarea extends React.Component<any, any> {
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
        this.setState({inputValue: (event.target as HTMLInputElement).value});
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
                <label className="form__label">Комментарий</label>
                <div className={cn("gradient-border", inputClass)}>
                    <textarea className="form__field form__textarea" value={this.state.inputValue}
                              onBlur={this.onBlur} onFocus={this.onFocus} onChange={this.onChange}
                    />
                    <div className="form__error">Helper Text</div>
                </div>
            </>
        );
    }
}

export default Textarea;
