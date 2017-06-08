import React, { Component } from "react";
import { Link } from "react-router-dom";
import video from "../videos/home.mp4";

class Home extends Component {
    render() {
        return (
            <div className="home-header">
                <div className="video-bg">
                    <video playsInline autoPlay muted loop id="home-video">
                        <source src={video} type="video/mp4" />
                    </video>
                </div>

                <div className="shrinkwrap">
                    <h1 className="center">Home</h1>
                    <p>This page will display a short 10 second intro where the page will go from a plain HTML with no styling, to various iterations and ends up looking very similiar to how the page looks like now.</p>

                    <div className="start-button has-text-centered">
                        <div className="button is-primary is-outlined">
                            <Link to="/introduction">Start</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;