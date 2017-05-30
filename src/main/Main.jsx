import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Introduction from "../introduction/Introduction";
import Assignments from "../assignments/Assignments";
import Conclusion from "../conclusion/Conclusion";
import NotFound from "./NotFound";

class Main extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/introduction" component={Introduction}/>
                    <Route path="/assignments" component={Assignments}/>
                    <Route path="/conclusion" component={Conclusion}/>
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}

export default Main;