import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div>
                <h1 className="center">Home</h1>
                <p>Animation through transitions where the website goes from no-styling to looking nice.</p>

                <div className="start-button has-text-centered">
                    <div className="button is-primary is-outlined">
                        <Link to="/introduction">Start</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;