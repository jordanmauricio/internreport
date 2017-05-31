import React, { Component } from "react";
import { Link } from "react-router-dom";

class Intro extends Component {
    render() {
        return (
            <div>
                <h1>Introduction text</h1>
                <p>Introduction text explaining schtuff</p>
                <Link to="/introduction/me">Go To About me</Link>
            </div>
        );
    }
}

export default Intro;
