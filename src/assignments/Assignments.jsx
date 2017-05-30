import React from "react";
import { Switch, Route } from "react-router-dom";
import ListOfAssignments from "./ListOfAssignments";
import Unicarriers from "./Unicarriers";
import FeedbackTool from "./FeedbackTool";
import InternshipReport from "./InternshipReport";
import AdditionalSkills from "./AdditionalSkills";
import NotFound from "../main/NotFound";

const Assignments = () => (
    <div>
        <Switch>
            <Route exact path="/assignments" component={ListOfAssignments}/>
            <Route path="/assignments/unicarriers" component={Unicarriers}/>
            <Route path="/assignments/feedbacktool" component={FeedbackTool}/>
            <Route path="/assignments/internshipreport" component={InternshipReport}/>
            <Route path="/assignments/extra" component={AdditionalSkills}/>
            <Route component={NotFound}/>
        </Switch>
    </div>
);

export default Assignments;