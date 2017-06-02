import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style/ListOfAssignments.css";

class ListOfAssignments extends Component {
    render() {
        return (
            <div>
                <Link to={"/assignments/unicarriers"}><div className="box"><article className="media"><div className="media-content"><p className="has-text-centered">Unicarriers Planning Tool</p></div></article></div></Link>
                <br/>
                <Link to={"/assignments/feedbacktool"}><div className="box"><article className="media"><div className="media-content"><p className="has-text-centered">Feedback Tool</p></div></article></div></Link>
                <br />
                <Link to={"/assignments/internshipreport"}><div className="box"><article className="media"><div className="media-content"><p className="has-text-centered">Internship Report</p></div></article></div></Link>
                <br />
                <Link to={"/assignments/extra"}><div className="box"><article className="media"><div className="media-content"><p className="has-text-centered">Additional Skills</p></div></article></div></Link>
            </div>
        );
    }
}

export default ListOfAssignments;
