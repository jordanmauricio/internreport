import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <sidebar>
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
