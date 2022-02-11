import React from 'react';

let xhr;

class IPAddress extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            ip_address: '...'
        };
        this.processRequest = this.processRequest.bind(this);
    }

    componentDidMount() {
        xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://ipinfo.io/json', true);
        xhr.send();
        xhr.addEventListener('readystatechange', this.processRequest, false);
    }

    processRequest() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            this.setState({
                ip_address: response.ip
            });
        }
    }

    render() {
        console.log('ip '+this.state.ip_address);
        return (
            <>

            </>
        );
    }
}

export default IPAddress;