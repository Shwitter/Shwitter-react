import React from 'react'
import './loginComponent.css'

class LoginComponent extends React.Component {

    render() {
        return (
            <form>
                <h4 className="h4-heading text-center">Welcome To <br/> <em>Shwitter</em></h4>
                <div className="form-group">
                    <label htmlFor="login-username">Username</label>
                    <input className="form-control" type="text" name="username" id="login-username" required placeholder="Username"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="login-password">Password</label>
                    <input className="form-control" type="password" name="password" id="login-password" required placeholder="Password"></input>
                </div>
                <input type="submit" className="btn btn-success" value="Log In"></input>
            </form>
        )
    }
};

export default LoginComponent;