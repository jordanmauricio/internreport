import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Opinions from "./Opinions";
import Future from "./Future";
import Bye from "./Bye";
import NotFound from "../main/NotFound";

class Conclusion extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/conclusion" component={Opinions}/>
                    <Route path="/conclusion/future" component={Future}/>
                    <Route path="/conclusion/bye" component={Bye}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        );
    }
}

export default Conclusion;
