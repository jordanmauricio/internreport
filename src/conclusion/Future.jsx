import React, { Component } from "react";
import { Link } from "react-router-dom";

class Future extends Component {
    render() {
        return (
            <div>
                <h1>Future</h1>
                <p>Plans for the future, moving forward, things to learn, things to do</p>
                <Link to="/conclusion/bye">Buh-bye</Link>
            </div>
        );
    }
}

export default Future;