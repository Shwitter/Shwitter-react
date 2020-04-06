import React from 'react'
import './loginComponent.css'
import { Link, Redirect } from 'react-router-dom';
import Axios from 'axios';
import SweetAlert from 'sweetalert2-react'

class LoginComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    handleLoginUsername(event) {
        this.setState({
            username: event.target.value
        });
    }

    handleLoginPassword(event) {
        this.setState({
            password: event.target.value
        })
    }

    logInUser() {
        Axios.post('login', {
            username: this.state.username,
            password: this.state.password
        }).then(result => {
            this.props.history.push("/home");
        }).catch(err => {
            console.log(err)
            this.setState({
                handleError: true
            })
        })
    }

    render() {
        const { handleError } = this.state;
        let alertError;
        if(handleError) {
            alertError = <SweetAlert
                            show={true}
                            title="Error"
                            text="An error has occured while processing your request"
                            onConfirm={() => this.setState({handleError: false})}
                        />
        }
        return (
            <div>
                <h4 className="h4-heading text-center">Welcome To <br/> <em>Shwitter</em></h4>
                <div className="form-group">
                    <label htmlFor="login-username">Username</label>
                    <input value={this.state.username} onChange={this.handleLoginUsername.bind(this)} className="form-control" type="text" name="username" id="login-username" required placeholder="Username"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="login-password">Password</label>
                    <input value={this.state.password} onChange={this.handleLoginPassword.bind(this)} className="form-control" type="password" name="password" id="login-password" required placeholder="Password"></input>
                </div>
                <button className="btn btn-success" onClick={() => this.logInUser()}>Log In</button>
                <div className="pt-3"><span>Don't have an account? <span className="sign-in-up-link"><Link to='/register'>Sign Up</Link></span></span></div>
                {alertError}
            </div>
        )
    }
};

export default LoginComponent;