import React from 'react';
import './App.css';
import LoginComponent from '../login/loginComponent'
import RegistrationComponent from '../login/registrationComponent'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginActive: true
    }
  }


  changeState() {
    this.setState({
      isLoginActive: !this.state.isLoginActive
    });
  }

  render() {
    const isLoginActive = this.state.isLoginActive;
    const current = isLoginActive ? "Register" : "Login";
    let changeInterfaceSpan;
    if(isLoginActive) {
      changeInterfaceSpan = <div className="pt-3"><span>Don't have an account? <span onClick={() => this.changeState()} className="sign-in-up-link">Sign Up</span></span></div>
    } else {
      changeInterfaceSpan = <div className="pt-3"><span>Have an account? <span onClick={() => this.changeState()} className="sign-in-up-link">Sign In</span></span></div>
    }
    return (
      <div className="App">
        <div className="login-component" >
          <div className="login-form col-sm-4 shadow-sm bg-white rounded p-4">
            {isLoginActive && <LoginComponent containerRef={(ref) => this.current = ref}/>}
            {!isLoginActive && <RegistrationComponent containerRef={(ref) => this.current = ref}/>}
            {changeInterfaceSpan}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
