import React from 'react';

class Contact extends React.Component {
    render() {
        return <div>You can contact me by email at {this.props.email}</div>;
    }
}

export default Contact;