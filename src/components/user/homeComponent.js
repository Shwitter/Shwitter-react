import React from 'react'
// import './registrationComponent.css'
import Axios from 'axios'
import { Link } from "react-router-dom";

class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    getUserInfo() {
        // need to get data from get request after login
    }


    render() {
        return (
            <div>
                <h1>Hello</h1>
            </div>
        )
    }
}

export default HomeComponent