import React, { Component } from "react";
import { Link } from "react-router-dom";

class AdditionalSkills extends Component {
    render() {
        return (
            <div>
                <h1>Additional Skills</h1>
                <p>Extra skills that I learned while at TRIMM: servers, git, pipelines, MINT, firebase, now, DevOps</p>
                <Link to="/conclusion">Conclusion</Link>
            </div>
        );
    }
}

export default AdditionalSkills;