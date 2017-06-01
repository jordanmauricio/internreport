import React, { Component } from "react";
import Navigator from "../tools/Navigator";

class Home extends Component {
    render() {
        return (
            <div>
                <h1 className="center">Home</h1>
                <p>Animation through transitions where the website goes from no-styling to looking nice.</p>
                <Navigator link="/introduction" text="Go To Introduction" />
            </div>
        );
    }
}

export default Home;