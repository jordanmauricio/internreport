import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div>
                <h1 className="center">Home</h1>
                <p>This page will display a short 10sec intro where the page will go from a plain HTML with no styling, to various iterations and ends up looking very similiar to how the page looks like now.</p>

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