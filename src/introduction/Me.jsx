import React, { Component } from "react";
import { Link } from "react-router-dom";

class Me extends Component {
    render() {
        return (
            <div>
                <h1>Me</h1>
                <p>My name is Jordan Mauricio, and I am a 22-year-old student of Creative Media and Game Technologies at the Saxion University of Applied Sciences in Enschede, the Netherlands. This report is my chosen method to express how my months working for TRIMM has been.</p> 
 
                <p>Since the beginning of my study, I had already decided that I would like to specialize in web programming, and this still holds true. Therefore, my main goal for my internship has been to dive deeper into web programming, build more projects and learn new technologies for the future. TRIMM has helped me achieve these goals, and then some. I have grown in both my professional skills as well as my personal skills, such my proficiency in Dutch and understanding of the Scrum process.</p>
                <div className="button"><p><Link to="/introduction/trimm">Go To TRIMM brief  &#10140;</Link></p></div>
            </div>
        );
    }
}

export default Me;
