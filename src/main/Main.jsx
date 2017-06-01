import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Introduction from "../introduction/Introduction";
import Assignments from "../assignments/Assignments";
import Conclusion from "../conclusion/Conclusion";
import NotFound from "./NotFound";
import "../style/Main.css";

class Main extends Component {
    render() {
        return (
            <div className="wrapper">
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
        );
    }
}

export default Main;
