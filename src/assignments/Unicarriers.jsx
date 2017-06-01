import React, { Component } from "react";
import Navigator from "../tools/Navigator";

class Unicarriers extends Component {
    render() {
        return (
            <div>
                <h1>Unicarriers Planning Tool</h1>
                <p>Unicarriers was the first project I had worked on when I started. 
                Unicarriers is a multi-billion dollar logistics vehicles company headquartered in Sweden, with other offices all over the continent. They had given TRIMM the task to build their internal planning tool. This planning tool was meant to facilitate and enhance their company synergy by efficiently giving out jobs to their workers, and letting their managers see exactly what each worker is tasked to do. This tool would also need to take into account the various offices, specifically in Sweden, the United Kingdom, the Netherlands and Belgium. Each of these offices had their own unique methods to get the job done, which created a challenging opportunity to build a tool that all these different offices wouldn’t just like, but would willingly choose to use over the existing model.</p>

                <strong>For this project I had to learn a lot before I could dive in:</strong>
                <ul>
                    <li>EcmaScript 2015 (ES6)</li>
                    <li>React</li>
                    <li>JSX</li>
                    <li>Meteor</li>
                </ul>
                <p>ES6, for those not yet familiar with it, is the “new” JavaScript. EcmaScript is what JavaScript is built on top of, and therefore when EcmaScript releases a new build, JavaScript slowly over the course of a few years add these natively into its codebase as well. However, as mentioned, this can take up to several years in order to guarantee security and usually backwards compatibility. But the features that ES6 introduced were simply too good to pass up, which is why Babel was created in order to transform ES6 syntax into JavaScript syntax. Since you can write ES6 with existing JavaScript code, but it just takes a very long time and can become quite complicated rather easily.</p>
                <p>React on the other hand, is a Facebook-created View library that handles how a web application “looks like” and also how the data flows between the backend and the frontend of a website. React is usually accompanied by JSX, this is also a Facebook-created version of JavaScript with the goal to simplify writing JavaScript inside your HTML to make building web components in React easier.</p>
                <p>Lastly, Meteor, which I had already built applications with before I started working at TRIMM. It’s one of the reasons the E-commerce’s development team agreed to take me in. But when I started working with Unicarriers, it had been several months since I had worked with Meteor. This led me to take a few more days in order to get up to speed with how Meteor worked again, especially in conjunction with React and JSX.</p>

                <h3>How It Went</h3>
                <p>Because of this, my first 2 weeks were spent learning these languages. But one cannot simply learn the tools, you need to build things with them. With that mentality, I jumped right into the project and started building where I could. In the beginning I did a lot of pair programming with Midas since there was an existing project already, but as time progressed, my understanding of the project greatly increased and I could finally start building my own components. </p>
                <p>My main contribution to the tool would have to be the Filters sidebar. I built just about everything for it, with help from Mark and Arnoud whenever I ran into problems, or after their code review concluded that I can optimize my code. Moreover, I also handled the translations by introducing a simple-to-use system that Arnoud, Mark and Midas could easily import into their builds and use at their discretion. This system also allowed Peter to easily edit the translations when possible by having the text in a separate file alongside the code. Alongside the Filters bar and translations, I did a lot of bits and pieces as well in regards to the complete tool. </p>

                <div className="nav-buttons">
                    <Navigator type="backwards" link="/introduction/trimm"/>
                    <Navigator type="forward" link="/assignments/feedbacktool"/>
                </div>
            </div>
        );
    }
}

export default Unicarriers;