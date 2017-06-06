import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Introduction from "../introduction/Introduction";
import Assignments from "../assignments/Assignments";
import Conclusion from "../conclusion/Conclusion";
import NotFound from "./NotFound";
import "../style/Main.css";
import ReactTouchEvents from "react-touch-events";
import { RouteTransition } from "react-router-transition";

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
                        <RouteTransition
                            pathname={location.pathname}
                            atEnter={{ translateX: 100}}
                            atLeave={{ translateX: -100}}
                            atActive={{ translateX: 0}}
                            className="page-change"
                            mapStyles={ styles => ({
                                transform: `translateX(${styles.translateX}vw)`,
                            })}
                        >
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route path="/introduction" component={Introduction}/>
                                <Route path="/assignments" component={Assignments}/>
                                <Route path="/conclusion" component={Conclusion}/>
                                <Route component={NotFound} />
                            </Switch>
                        </RouteTransition>
                    </div>
                </div>
            </ReactTouchEvents>
        );
    }
}

export default Main;
