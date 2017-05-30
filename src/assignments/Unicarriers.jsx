import React, { Component } from "react";
import { Link } from "react-router-dom";

class Unicarriers extends Component {
    render() {
        return (
            <div>
                <h1>Unicarriers Assignment</h1>
                <p>Explain how Unicarriers went</p>
                <Link to="/assignments/feedbacktool">Feedback Tool</Link>
            </div>
        );
    }
}

export default Unicarriers;