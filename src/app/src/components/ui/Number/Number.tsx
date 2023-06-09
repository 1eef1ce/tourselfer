import React from 'react';
import cn from 'classnames';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

class PhNumber extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            activity: true,
            country: 'ru',
        };
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }
    onFocus() {
        this.setState({activity: true});
    }
    onBlur() {       
        this.setState({activity: false});
    }
    getClass() {
        if(this.state.activity === true) {
            return 'active';
        }
        else {
            return '';
        }
    }
        
    render() {
        const inputClass = this.getClass();
       
        return (
            <PhoneInput
                country={this.state.country}
                onFocus={this.onFocus}
                onChange={
                    //value => this.setState({value}),
                    country => this.setState({country})
                }
                onBlur={this.onBlur}
                containerClass={cn('PhNumber', inputClass)}
                specialLabel={'Label'}
                countryCodeEditable={false}
                defaultErrorMessage='Error'
                //onlyCountries={['ru', 'us', 'fr']}	
                isValid={(value) => {
                    if (!value.match(/[0-9]{11,15}/)) {
                        return 'Helper text';
                        this.setState({value: ''});
                    } else {
                        return true;
                    }
                }}
                inputProps={{
                    name: 'phoneInput',
                    required: true,
                }}
            />        
        );
    }
}

export default PhNumber;





