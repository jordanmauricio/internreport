import React, { Component } from "react";
import Navigator from "../tools/Navigator";

class InternshipReport extends Component {
    render() {
        return (
            <div>
                <h1>This report itself</h1>
                <p>What you’re probably reading this on right now, is also one of my (albeit personal) assignments. I decided to use this application as the medium for my internship report because I feel that it ties into my work really well. Not to mention, it’s also a good opportunity to flex my creative muscle in terms of presentation and design. Building this made me realize how far I’ve gotten, due to how quickly I was able to set this up and deploy it to a server all on my own.</p>

                <strong>This tool is built using the following technologies:</strong>
                <ul>
                    <li>React</li>
                    <li>React-Router v4</li>
                    <li>JSX</li>
                    <li>SCSS</li>
                    <li>Bulma</li>
                    <li>Zeit Now</li>
                </ul>

                <p>The only additional skills, compared to the previous assignments, are Bulma and Zeit Now.<br />
                Bulma is a CSS library, this library allows you to build beautiful apps really fast by including pre-designed text, colors, buttons, formatting etc. I have however overwritten some of their styling for my own in order to make my application unique; for example the fonts used are Yeseva One for the headers, and Open Sans for the text, the size of the reading area has been shrunk to 740px etc.</p>

                <p>Zeit on the other hand is a easy-to-setup backend system. If done correctly, you are able to use their Now feature to deploy react application with all their dependencies and routing with one single command in the terminal. It’ll deploy it to a server for free and link it with their own domain system as you can see in the URL bar above. This tool makes it very simple to launch your applications to the world with minimal effort seeing as I don’t need any connection to a database or anything. Had I wanted to convert this into a CMS for easy management and editing, then I would’ve included Firebase, however that seemed to be overkill.</p>

                <h3>How It Went</h3>

                <p>The application’s structure was configured and then built, along with its routing within 2 days. I was very satisfied with how quickly this was done as previously explained, but also that I hadn’t need to ask for help (I did ask for advice however, on the optimal way to write a piece of code). </p>

                <p>The only issue will be to know where I would like to stop with the development. Of course anyone would like to transform their report into the most cool, best looking, interaction experimentation play ground that they can imagine. Therefore, I will be focusing on the content primarily, the text, and only when this has been implemented properly will I continue with the more fun features.</p>

                <div className="nav-buttons">
                    <Navigator type="backwards" link="/assignments/feedbacktool"/>
                    <Navigator type="forward" link="/assignments/extra"/>
                </div>
            </div>
        );
    }
}

export default InternshipReport;