import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Intro from "./Intro";
import TRIMM from "./TRIMM";
import Me from "./Me";
import NotFound from "../main/NotFound";

class Introduction extends Component {
    render() {
        return (
            <div className="page">
                <Switch>
                    <Route exact path="/introduction" component={Intro}/>
                    <Route exact path="/introduction/me" component={Me}/>
                    <Route path="/introduction/trimm" component={TRIMM}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        );
    }
}

export default Introduction;