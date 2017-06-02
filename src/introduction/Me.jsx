import React, { Component } from "react";
import Navigator from "../tools/Navigator"; 

class Me extends Component {
    render() {
        return (
            <div>
                <h1>Straight Outta Cura&#231;ao</h1>
                <p>My name is Jordan Mauricio, and I am a 22-year-old student from Cura&#231;ao. On this gorgeous island I had found a fondness for web development and programming. With this passion, I had to sign up for the of Creative Media and Game Technologies at the Saxion University of Applied Sciences in Enschede, the Netherlands. This report is my chosen method to express how my months working for TRIMM has been as it combines just about all the different aspects that I wanted to achieve.</p> 
 
                <p>Since my teenage years, I had already decided that I would like to specialize in web programming, and this still holds true. Therefore, my main goal for my internship has been to dive deeper into web programming, build more projects and learn new technologies for the future. TRIMM has helped me achieve these goals, and then some. I have grown in both my professional skills as well as my personal skills, such as my proficiency in Dutch and understanding of the Scrum process.</p>
                <div className="nav-buttons">
                    <Navigator type="backwards" link="/introduction"/>
                    <Navigator type="forward" link="/introduction/trimm"/>
                </div>
            </div>
        );
    }
}

export default Me;
