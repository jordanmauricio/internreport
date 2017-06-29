import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Navigator extends Component {
    render(){
        if(this.props.type === "forward"){
            return(
                <div className="button"><p><Link to={this.props.link}>Next &#8594;</Link></p></div>
            );
        }
        else if(this.props.type === "backwards"){
            return(
                <div className="button"><p><Link to={this.props.link}>&#8592; Back</Link></p></div>
            );
        } else {
            return(
                <div className="button"><p><Link to={this.props.link}>{this.props.text}</Link></p></div>
            );
        }
    }
}

Navigator.propTypes = {
    link: PropTypes.string.isRequired,
    type: PropTypes.string
};

export default Navigator;