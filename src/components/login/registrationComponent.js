import React from 'react'
import './registrationComponent.css'

class RegistrationComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            validEmail: null,
            formValid: false
        }
    }

    validateEmail() {
        if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(document.getElementById('login-email').value)) {
            this.setState({
                validEmail: true,
            })
        } else {
            this.setState({
                validEmail: false,
            })
        }
    }

    validateForm() {
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


        return this.state.formValid;
    }

    render() {
        const validEmail = this.state.validEmail;
        const formValid = this.state.formValid;
        let emailError;
        if(validEmail === false) {
            emailError =  <p className="pt-1 text-danger">E-mail is not the right format</p>
        }
        return (
            <form>
                <h4 className="h4-heading text-center">Create Your Account On <br/> <em>Shwitter</em></h4>
                <div className="form-group">
                    <label htmlFor="login-username">Username</label>
                    <input className="form-control" type="text" name="username" onChange={() => this.validateForm()} id="login-username" required placeholder="Username"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="login-username">E-Mail</label>
                    <input className="form-control" type="text" name="email" onChange={() => this.validateEmail()} id="login-email" required placeholder="E-Mail"></input>
                    {emailError}
                </div>
                <div className="form-group">
                    <label htmlFor="login-password">Password</label>
                    <input className="form-control" type="password" name="password" onChange={() => this.validateForm()} minLength="8" required id="login-password" placeholder="Password"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="login-password">Repeat Password</label>
                    <input className="form-control" type="password" name="repeat-password" onChange={() => this.validateForm()} minLength="8" required id="login-repassword" placeholder="Repeat Password"></input>
                </div>
                <input type="submit" className="btn btn-success" value="Sign Up" disabled={!formValid}></input>
            </form>
        )
    }
};

export default RegistrationComponent;