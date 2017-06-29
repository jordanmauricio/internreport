import React, { Component } from "react";
import Navigator from "../tools/Navigator";
import buhbye from "../videos/bye.gif";
import VideoHeader from "../tools/VideoHeader";

class Bye extends Component {
    render() {
        return (
            <div className="page--with-video-header">
                <VideoHeader image={buhbye} bgColor="#452139" text="Fare-thee-well"/>
                <div className="shrinkwrap">
                    <p>This has been my report. I would like to thank all my colleagues for their terrific help and guidance, both personal and professional, over the past few months. I now feel very prepared to enter the workforce due to my experience at TRIMM. If you would like to keep track of my progress, you can find me on <a href="https://www.linkedin.com/in/jordan-mauricio-585371a8">LinkedIn</a>, and also some shameless advertisements for the great work my colleagues are doing outside of their regular jobs.</p>

                    <strong>Shameless Advertisements</strong>
                    <ul>
                        <li><a href="http://juliansverhalen.nl/">Check out Julian’s stories</a></li>
                        <li><a href="https://motiongraphicscollective.com/">Check out Michiel’s Motion Graphics Collective</a></li>
                        <li><a href="https://heerlijkzoeken.nl/">Check out Peter’s Heerlijk Zoeken</a></li>
                        <li><a href="http://trigoniagame.com/">Check out Arnoud’s Trigonia</a></li>
                    </ul>

                    <div className="nav-buttons">
                        <Navigator type="backwards" link="/conclusion/future"/>
                        <Navigator link="/" text="Back to Start"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Bye;