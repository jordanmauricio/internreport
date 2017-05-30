import React, { Component } from "react";
import { Link } from "react-router-dom";

class InternshipReport extends Component {
    render() {
        return (
            <div>
                <h1>Internship Report</h1>
                <p>Explain how I built the internship report</p>
                <Link to="/assignments/extra">Additional Knowledge</Link>
            </div>
        );
    }
}

export default InternshipReport;