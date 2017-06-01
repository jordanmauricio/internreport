import React, { PropTypes, Component } from "react";
import { Link } from "react-router-dom";

class Navigator extends Component {
    render(){
        return(
            <div className="button"><p><Link to={this.props.link}>{this.props.text} &#10140;</Link></p></div>
        );
    }
}

Navigator.propTypes = {
    link: PropTypes.string,
    text: PropTypes.string,
};

export default Navigator;