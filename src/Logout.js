import React from 'react';
import { withRouter } from "react-router-dom";

class Logout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        localStorage.clear();
        //this.props.history.push(`/`);
        window.location.href = "/login";
    }

    render() {
        return <div></div>
    }
}

export default withRouter(Logout)