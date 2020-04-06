import React from 'react';
import './App.css';
import LoginComponent from '../login/loginComponent'
import RegistrationComponent from '../login/registrationComponent'
import HomeComponent from '../user/homeComponent'
import { Route, Switch } from "react-router-dom";


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Switch>
            <div className="App">
              <div className="login-component" >
                <div className="login-form col-sm-4 shadow-sm bg-white rounded p-4">
                  <Route path="/login" component={LoginComponent} exact/>
                  <Route path="/register" component={RegistrationComponent} />
                  <Route path="/home" component={HomeComponent}></Route>
                </div>
              </div>
            </div> 
        </Switch>
    )
  }
}

export default App;
