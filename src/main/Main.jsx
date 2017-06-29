import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Introduction from "../introduction/Introduction";
import Assignments from "../assignments/Assignments";
import Conclusion from "../conclusion/Conclusion";
import NotFound from "./NotFound";
import "../style/Main.css";
import ReactTouchEvents from "react-touch-events";

class Main extends Component {
    componentDidUpdate(){
        document.getElementsByTagName("body")[0].scrollTop = 0;
    }

    handleSidebar(direction){
        switch(direction) {
        case "left": 
            this.props.triggerSidebar("open");
            break;
        case "right": 
            this.props.triggerSidebar("close");
            break;
        default:
            this.props.triggerSidebar("default");
        }
    }

    render() {
        let name = location.pathname === "/" ? "wrapper boom" : "wrapper";

        return (
            <ReactTouchEvents onSwipe={this.handleSidebar.bind(this)}>
                <div className={name}>
                    <div className="wrapper--container content">
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/introduction" component={Introduction}/>
                            <Route path="/assignments" component={Assignments}/>
                            <Route path="/conclusion" component={Conclusion}/>
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </div>
            </ReactTouchEvents>
        );
    }
}

export default Main;
