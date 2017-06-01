import React, { Component } from "react";
import Navigator from "../tools/Navigator";

class Bye extends Component {
    render() {
        return (
            <div>
                <h1>Fare-thee-well</h1>
                <p>This has been my report. I would like to thank all my colleagues for their terrific help and guidance, both personal and professional, over the past few months. I now feel very prepared to enter the workforce due to my experience at TRIMM. If you would like to keep track of my progress, I have provided some links below, and also some shameless advertisements for the great work my colleagues are doing outside of their regular jobs.</p>

                <strong>Social Media</strong>
                <ul>
                    <li>LinkedIn</li>
                    <li>Portfolio</li>
                    <li>Shortlink of the website</li>
                    <li>Email</li>
                </ul>
                <strong>Shameless Advertisements</strong>
                <ul>
                    <li>Check out Julian’s stories</li>
                    <li>Check out Michiel’s motion graphics</li>
                    <li>Check out Peter’s heerlijk zoeken</li>
                    <li>Check out Arnoud’s Trigonia</li>
                </ul>

                <div className="nav-buttons">
                    <Navigator type="backwards" link="/conclusion/future"/>
                    <Navigator link="/" text="Back to Start"/>
                </div>
            </div>
        );
    }
}

export default Bye;