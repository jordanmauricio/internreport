import React, { Component } from "react";
import { Link } from "react-router-dom";

class Me extends Component {
    render() {
        return (
            <div>
                <h1>Me</h1>
                <p>Short little introduction about me, what I wanted to do with my internship and what my goals were/are.</p>
                <Link to="/introduction/trimm">Go To TRIMM brief</Link>
            </div>
        );
    }
}

export default Me;
