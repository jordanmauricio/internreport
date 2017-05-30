import React, { Component } from "react";
import { Link } from "react-router-dom";

class FeedbackTool extends Component {
    render() {
        return (
            <div>
                <h1>Feedback Tool</h1>
                <p>Explain what led to the tool being built, how it was built and all the extra stuff</p>
                <Link to="/assignments/internshipreport">Internship Report</Link>
            </div>
        );
    }
}

export default FeedbackTool;