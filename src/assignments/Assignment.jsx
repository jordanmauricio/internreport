import React, { Component } from "react";

class Assignment extends Component {
    render() {
        const assignment = this.props.match.params.assignment;
        return (
            <div>
                Assignment #{assignment}
            </div>
        );
    }
}

export default Assignment;
