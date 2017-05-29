import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Introduction from "./Introduction";
import Assignments from "./Assignments";
import Conclusion from "./Conclusion";

class Main extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/introduction" component={Introduction}/>
                    <Route path="/assignments" component={Assignments}/>
                    <Route path="/conclusion" component={Conclusion}/>
                </Switch>
            </div>
        );
    }
}

export default Main;
