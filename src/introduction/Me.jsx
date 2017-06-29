import React, { Component } from "react";
import Navigator from "../tools/Navigator";
import VideoHeader from "../tools/VideoHeader";
import curacao from "../videos/curacao.jpg";

class Me extends Component {
    render() {
        return (
            <div className="page--with-video-header">
                <VideoHeader image={curacao} altText="Curacao Harbor" text="Straight Outta Cura&#231;ao"/>
                <div className="shrinkwrap">
                    <p>My name is Jordan Mauricio, and I am a 22-year-old student from Cura&#231;ao. While growing up on this gorgeous island I had found a fondness for web development and programming. With this passion, I had signed up for the Creative Media and Game Technologies major (formerly Art and Technology) at the Saxion University of Applied Sciences in Enschede, the Netherlands. This report is my chosen method to express how my months working for TRIMM has been as it combines just about all the different aspects that I wanted to achieve.</p>

                    <p>Since my teenage years, I had already decided that I would like to specialize in web programming, and this still holds true today. Therefore, my main goal for my internship has been to dive deeper into web programming, build more projects and learn new technologies for the future. TRIMM has helped me achieve these goals, and also created new ones. I have grown in both my professional skills as well as my personal skills, such as my proficiency in Dutch and understanding of the Scrum process.</p>
                    <div className="nav-buttons">
                        <Navigator type="backwards" link="/introduction"/>
                        <Navigator type="forward" link="/introduction/trimm"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Me;
