import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div className="home-header">
                <div className="shrinkwrap">

                    <div className="start-button has-text-centered">
                        <div className="button is-primary is-outlined">
                            <Link to="/introduction">Start</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;