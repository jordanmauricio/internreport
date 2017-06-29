import React, { Component } from "react";

export default class VideoHeader extends Component {
    render(){
        if(this.props.video){
            return (
                <div className="video-header" style={{backgroundColor: this.props.bgColor}}>
                            <video playsInline autoPlay muted loop id="home-video">
                                <source src={this.props.video} type="video/mp4" />
                            </video>
                    <div className="video-header__content">
                        <h1>{this.props.text}</h1>
                    </div>
                    <span></span><span></span>
                </div>
            );
        }
        if(this.props.image){
            return (
                <div className="video-header" style={{backgroundColor: this.props.bgColor}}>
                            <img src={this.props.image} alt={this.props.altText}/>
                    <div className="video-header__content">
                        <h1>{this.props.text}</h1>
                    </div>
                    <span></span><span></span>
                </div>
            );
        }
    }
}