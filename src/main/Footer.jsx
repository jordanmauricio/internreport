import React, { Component } from "react";
import "../style/Footer.css";

class Footer extends Component {
    render(){
        return(
            <div className="foofie">
                <div className="container">
                    <p>Made with <span className="love">&#10084;</span> by Jordan Mauricio</p>
                </div>
            </div>
        );
    }
}

export default Footer;