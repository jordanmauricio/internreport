import React, { Component } from "react";
import { Link } from "react-router-dom";

class Future extends Component {
    render() {
        return (
            <div>
                <h1>Future</h1>
                <p>What am I going to do next?</p>
                <ul>
                    <li>Learn Node by Wes Bos</li>
                    <li>Learn Redux by Wes Bos</li>
                    <li>Progressive Web Apps by Google Dev Team</li>
                    <li>Clean Code by Uncle Bob</li>
                    <li>Drupal 8</li>
                    <li>Isomorphic apps</li>
                </ul>
                <div className="button"><p><Link to="/conclusion/bye">Buh-bye</Link></p></div>
            </div>
        );
    }
}

export default Future;