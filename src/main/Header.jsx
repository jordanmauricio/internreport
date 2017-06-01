import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style/Header.css";

class Header extends Component {
    constructor(){
        super();

        this.handleSidebar = this.handleSidebar.bind(this);
        
        this.state = {
            shouldShowSidebar: false,
        };

        document.addEventListener("touchstart", this.handleTouchStart, false);        
        document.addEventListener("touchmove", this.handleTouchMove, false);

        this.xDown = null;
        this.yDown = null;
    }

    handleTouchStart(evt){
        this.xDown = evt.touches[0].clientX;
        this.yDown = evt.touches[0].clientY;
    }

    handleTouchMove(evt){
        if( !this.xDown || !this.yDown){
            return;
        }

        let xUp = evt.touches[0].clientX;
        let yUp = evt.touches[0].clientY;

        let xDiff = this.xDown - xUp;
        let yDiff = this.yDown - yUp;

        if( Math.abs( xDiff ) > Math.abs( yDiff ) ){
            if( xDiff > 0 ){
                //left swipe
                console.log("left");
            } else {
                //right swipe
                console.log("right");
            }
        } else {
            if( yDiff > 0 ) {
                //swipe up 
                console.log("up");
            } else {
                //swipe down
                console.log("down");
            }
        }

        this.xDown = null;
        this.yDown = null;

    }

    handleSidebar(){
        this.setState({ shouldShowSidebar: !this.state.shouldShowSidebar });
    }

    render() {
        let openSidebar = this.state.shouldShowSidebar ? "open" : "";
        return (
            <sidebar className={openSidebar}>
                <div className={`hamburger-toggle ${openSidebar}`} onClick={this.handleSidebar}><span></span><span></span><span></span></div>
                <nav className="content">
                    <ul onClick={this.handleSidebar}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/introduction">Introduction</Link></li>
                        <li><Link to="/assignments">Assignments</Link></li>
                        <li><Link to="/conclusion">Conclusion</Link></li>
                    </ul>
                </nav>
            </sidebar>
        );
    }
}

export default Header;
