import React, { Component } from "react";
import { Link } from "react-router-dom";

class ListOfAssignments extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li key="1"><Link to={"/assignments/1"}>Assignment 1</Link></li>
                    <li key="2"><Link to={"/assignments/2"}>Assignment 2</Link></li>
                    <li key="3"><Link to={"/assignments/3"}>Assignment 3</Link></li>
                    <li key="4"><Link to={"/assignments/4"}>Assignment 4</Link></li>
                </ul>
            </div>
        );
    }
}

export default ListOfAssignments;
