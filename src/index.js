import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';

class Layout extends React.Component {
  render() {
    return (
        <App></App>
    )
  }
}

const root = document.getElementById("root");

ReactDOM.render(<Layout/>, root);

serviceWorker.unregister();
