import React, { Component } from "react";
import { Link } from "react-router-dom";

class Opinions extends Component {
    render() {
        return (
            <div>
                <h1>Opinions</h1>
                <p>RANTS, FEELINGS, OPINIONS, THOUGHTS, CLOSERS, ZINGERS</p>
                <Link to="/conclusion/future">Future</Link>
            </div>
        );
    }
}

export default Opinions;