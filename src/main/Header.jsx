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
    }

    handleSidebar(){
        this.setState({ shouldShowSidebar: !this.state.shouldShowSidebar });
    }

    render() {
        let openSidebar = this.state.shouldShowSidebar ? "open" : "";
        return (
            <sidebar className={openSidebar}>
                <div className={`hamburger-toggle ${openSidebar}`} onClick={this.handleSidebar}><span></span><span></span><span></span></div>
                <nav>
                    <ul>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/introduction"><li>Introduction</li></Link>
                        <Link to="/assignments"><li>Assignments</li></Link>
                        <Link to="/conclusion"><li>Conclusion</li></Link>
                    </ul>
                </nav>
            </sidebar>
        );
    }
}

export default Header;
