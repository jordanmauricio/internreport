import React, { Component } from "react";
import { Link } from "react-router-dom";

class ListOfAssignments extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li key="1"><Link to={"/assignments/unicarriers"}>Unicarriers Planning Tool</Link></li>
                    <li key="2"><Link to={"/assignments/feedbacktool"}>Feedback Tool</Link></li>
                    <li key="3"><Link to={"/assignments/internshipreport"}>Internship Report</Link></li>
                    <li key="4"><Link to={"/assignments/extra"}>Additional Skills</Link></li>
                </ul>
            </div>
        );
    }
}

export default ListOfAssignments;
