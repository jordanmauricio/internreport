import React, { Component } from "react";
import { Link } from "react-router-dom";

class TRIMM extends Component {
    render() {
        return (
            <div>
                <h1>TRIMM</h1>
                <p>Explaining TRIMM as a company and the Ecommerce team</p>
                <Link to="/assignments/unicarriers">Go To First Assignment (Unicarriers)</Link>
            </div>
        );
    }
}

export default TRIMM;
