import React, { Component } from "react";
import Header from "./main/Header";
import Main from "./main/Main";
import Footer from "./main/Footer";
import "./Bulma.css";
import "./style/App.css";

class App extends Component {
    constructor(){
        super();

        this.sidebarTrigger = this.sidebarTrigger.bind(this);

        this.state = {
            shouldSidebarOpen: false,
        };
    }

    sidebarTrigger(direction){
        switch(direction){
        case "open":
            this.setState({ shouldSidebarOpen: true });
            break;
        case "close":
            this.setState({ shouldSidebarOpen: false });
            break;
        default:
        }
    }

    render() {
        return (
            <div className="app--wrapper">
                <Header sidebarAction={this.state.shouldSidebarOpen}/>
                <Main triggerSidebar={this.sidebarTrigger}/>
                 <Footer />
            </div>
        );
    }
}

export default App;
