import { Button } from 'reactstrap';
import React from 'react';
import instance from './api/AxiosInstance';
import jwt_decode from "jwt-decode";
import { withRouter } from "react-router-dom";

export const axios = instance.apiInstance();

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ""
        }
    }

    getTimeIn = () => {
        const timeNow = new Date().getTime();
        return parseFloat((timeNow + 1) / 1000).toFixed(0);
    };

    isAuthenticated = () => {
        const expiresIn = localStorage.getItem("expiresIn");
        if (expiresIn) {
            if (expiresIn < this.getTimeIn()) {
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
    }

    componentDidMount() {
        if (this.isAuthenticated()) {
            this.props.history.push("/");            
        }
    }

    updateValue = (e) => {
        const { name, value } = e.target;
        this.setState({ email: value });
    }

    submit = () => {
        axios.post(`authentication/signin`, { email: this.state.email })
            .then(res => {
                const response = res.data;
                console.log('response', response);
                const tokenData = jwt_decode(response);
                localStorage.setItem("expiresIn", tokenData.exp * 1000);
                localStorage.setItem("token", response);
                //this.props.history.push(`/`);
                window.location.href = "/";
            }).catch(function (error) {
                console.log('error', error.response);
                if (error.response.status == 400) {
                    alert(error.response.data.Message);
                }
            });
    }

    render() {
        return <div>
            <h1>Login Page</h1><br />
            <table>
                <tr>
                    <td>
                        Email
                    </td>
                    <td>
                        <input type="text" name="email" value={this.state.email} onChange={this.updateValue}></input><br />
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <Button onClick={this.submit}>Submit</Button>
                    </td>
                </tr>
            </table>
        </div>
    }
}

export default withRouter(Login)