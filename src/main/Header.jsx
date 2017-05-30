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
            <sidebar>
                <div className={`hamburger-toggle ${openSidebar}`} onClick={this.handleSidebar}><span></span><span></span><span></span></div>
                <nav>
                    <ul>
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
