import React, { Component } from "react";
import "./App.css";
import Header from "./main/Header";
import Main from "./main/Main";

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Main />
            </div>
        );
    }
}

export default App;
