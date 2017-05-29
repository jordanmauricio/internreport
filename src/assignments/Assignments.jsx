import React from "react";
import { Switch, Route } from "react-router-dom";
import ListOfAssignments from "./ListOfAssignments";
import Assignment from "./Assignment";

const Assignments = () => (
    <div>
        <h2>Assignments</h2>
        <Switch>
            <Route exact path="/assignments" component={ListOfAssignments}/>
            <Route path="/assignments/:assignment" component={Assignment}/>
        </Switch>
    </div>
);

export default Assignments;