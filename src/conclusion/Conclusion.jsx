import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Reflections from "./Reflections";
import Future from "./Future";
import Bye from "./Bye";
import NotFound from "../main/NotFound";

class Conclusion extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/conclusion" component={Reflections}/>
                    <Route path="/conclusion/future" component={Future}/>
                    <Route path="/conclusion/bye" component={Bye}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        );
    }
}

export default Conclusion;
