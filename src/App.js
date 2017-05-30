import React, { Component } from "react";
import Header from "./main/Header";
import Main from "./main/Main";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="content">
                <Header />
                <Main />
            </div>
        );
    }
}

export default App;
