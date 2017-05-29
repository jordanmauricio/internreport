import React, { Component } from "react";
import { Link } from "react-router-dom";

class ListOfAssignments extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li key="1"><Link to={"/assignments/1"}>Player 1</Link></li>
                    <li key="2"><Link to={"/assignments/2"}>Player 2</Link></li>
                    <li key="3"><Link to={"/assignments/3"}>Player 3</Link></li>
                    <li key="4"><Link to={"/assignments/4"}>Player 4</Link></li>
                </ul>
            </div>
        );
    }
}

export default ListOfAssignments;
