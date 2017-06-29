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

    componentWillReceiveProps(nextProps){
        this.setState({ shouldShowSidebar: nextProps.sidebarAction });
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
