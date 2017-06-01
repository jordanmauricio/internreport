import React, { Component } from "react";
import Header from "./main/Header";
import Main from "./main/Main";
import Footer from "./main/Footer";
import "./Bulma.css";
import "./style/App.css";

class App extends Component {
    render() {
        return (
            <div className="app--wrapper">
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }
}

export default App;
