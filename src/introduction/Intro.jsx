import React, { Component } from "react";
import { Link } from "react-router-dom";

class Intro extends Component {
    render() {
        return (
            <div>
                <h1>Welcome,</h1>
                <p>This report has been written as part of my time as an intern at TRIMM. From February 6th until June 30 I have been working as a front-end developer primarily, and back-end developer when possible with the E-commerce team. During my time there I have worked on some terrific projects and met some great people. My team was more than happy to help me whenever I requested it, and I couldn’t have made my time there as rewarding as it was without their help.</p>
                <p>The report has been broken down into 3 logical parts:</p>
                <ol>
                    <li> The introduction where you, dear reader, are now. Apart from this short introduction, I will also explain in more detail who I am and why I chose TRIMM, and of course introduce TRIMM itself alongside my colleagues as well.</li>
                    <li> The assignments that I worked on during my 6 months at TRIMM. There are 3 assignments that I will dive into in detail there, explaining just what exactly I contributed to.</li>
                    <li> And finally, the conclusion, where I will reflect on my time at TRIMM, followed by additional information and what I plan to do for the future after completing my internship.</li>
                </ol>
                <p>Enjoy!</p>
                <div className="button"><p><Link to="/introduction/me">Go To About me &#10140;</Link></p></div>
            </div>
        );
    }
}

export default Intro;
