import React from 'react'
import './registrationComponent.css'
import Axios from 'axios'
import { Link } from "react-router-dom";

class RegistrationComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            validEmail: null,
            formValid: false,
            newUser: {}
        }
    }

    validateEmail() {
        if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email)) {
            this.setState({
                validEmail: true,
            })
        } else {
            this.setState({
                validEmail: false,
            })
        }
    }

    validateForm(event) {
        let usernameValid,
            passwordValid,
            repasswordValid,
            emailValidForm

        if(document.getElementById('login-username').value === '') {
            usernameValid = false;
        } else {
            usernameValid = true
        }

        if(document.getElementById('login-password').value === '') {
            passwordValid = false;
        } else {
            passwordValid = true;
        }

        if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(document.getElementById('login-email').value) === false && document.getElementById('login-email').value === '') {
            emailValidForm = false;

        } else {
            emailValidForm = true
        }

        if(document.getElementById('login-repassword').value !== document.getElementById('login-password').value || document.getElementById('login-repassword').value === '') {
            repasswordValid = false;
        } else {
            repasswordValid = true
        }

        if(usernameValid && passwordValid && repasswordValid && emailValidForm) {
            this.setState({
                formValid: true
            })
        } else {
            this.setState({
                formValid: false
            })
        }

    }
    
    createNewUser() {
        Axios.post('/register', {
            new_user:  {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
            }
        }).then(result => {
            console.log(result);
        })
    }

    handleUsername(event) {
        this.validateForm();
    
        this.setState({
            username: event.target.value
        })
    }

    handleEmail(event) {
        this.validateEmail();
        this.validateForm();

        this.setState({
            email: event.target.value
        })
    }

    handlePassword(event) {
        this.validateForm();

        this.setState({
            password: event.target.value
        })
    }

    handleRepasswor(event) {
        this.validateForm();

        this.setState({
            repassword: event.target.value
        })
    }

    render() {
        const validEmail = this.state.validEmail;
        const formValid = this.state.formValid;
        let emailError;
        if(validEmail === false) {
            emailError =  <p className="pt-1 text-danger">E-mail is not the right format</p>
        }
        return (
            // <Route path="/register">
                <div>
                    <h4 className="h4-heading text-center">Create Your Account On <br/> <em>Shwitter</em></h4>
                    <div className="form-group">
                        <label htmlFor="login-username">Username</label>
                        <input className="form-control" type="text" name="username" onChange={this.handleUsername.bind(this)} id="login-username" value={this.state.newUser.username} required placeholder="Username"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="login-username">E-Mail</label>
                        <input className="form-control" type="text" name="email" onChange={this.handleEmail.bind(this)} id="login-email" value={this.state.newUser.email} required placeholder="E-Mail"></input>
                        {emailError}
                    </div>
                    <div className="form-group">
                        <label htmlFor="login-password">Password</label>
                        <input className="form-control" type="password" name="password" onChange={this.handlePassword.bind(this)} minLength="8" value={this.state.newUser.password} required id="login-password" placeholder="Password"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="login-password">Repeat Password</label>
                        <input className="form-control" type="password" name="repeat-password" onChange={this.handleRepasswor.bind(this)} minLength="8" value={this.state.newUser.repassword} required id="login-repassword" placeholder="Repeat Password"></input>
                    </div>
                    <button onClick={() => this.createNewUser()} className="btn btn-success" value="Sign Up" disabled={!formValid}>dsadsads</button>

                    <div className="pt-3"><span>Have an account? <span className="sign-in-up-link"><Link to='/login'>Sign In</Link></span></span></div>
                </div>
            // </Route>
        )
    }
};

export default RegistrationComponent;