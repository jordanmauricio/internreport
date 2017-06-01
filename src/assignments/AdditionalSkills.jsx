import React, { Component } from "react";
import Navigator from "../tools/Navigator";

class AdditionalSkills extends Component {
    render() {
        return (
            <div>
                <h1>But wait, there’s more!</h1>
                <p>Alongside regular development tools, such as the ones I’ve used for the past few assignments, there are also tools for the process of web development. These tools help you with, for example, testing, version control, deployment, server management etc. In this section, I will talk about all of the different tools and techniques I’ve used and got familiar with. For the vast majority of these, I will continue to use them when possible even in my personal projects.</p>

                <h3>Development</h3>

                <br/><strong>Visual Studio Code</strong>
                <p>Right before I had started at TRIMM, my IDE of choice had been Sublime Text 3, the de-facto leader of Web Development IDE’s that were free. But I had grown to dislike certain behavioral characteristics of Sublime, and therefore I went looking for a new editor. VS Code came to the rescue with it’s built-in Git version control system, debugger and slick design. Naturally, as I started working at TRIMM, I continued using VS Code. I’ve used it extensively as my primary IDE for the past few months and I cannot be happier. It’s lightweight, fast, and just gets the job done, better than Sublime Text 3 had in the past. I would highly recommend VS Code to any web developer who hasn’t already.</p>

                <br/><strong>WebStorm</strong>
                <p>WebStorm was introduced to me a few years ago as the end-all IDE for web development. I acquired it through a student license and experimented with it for a while before I determined it to be overkill for my purposes. However, when I got to TRIMM, the IDE of choice was PHPStorm, the PHP variant of WebStorm. But as explained before, I was experimenting and testing out VS Code at this time, and was given permission to continue to do so. However, I grew to like VS Code and stuck with it, to the disgust of my colleagues who were PHPStorm hardliners.</p>
                <p>Several IDE battles later, Michiel had turned to the dark side and went from Atom to PHPStorm, making me the last developer who isn’t using a *Storm variant. This furious war had concluded when we had established that I can continue to use VS Code, as long as I’m working on smaller projects. But if I were to join the team on the Entertainia project, I would be highly encouraged to make the switch to PHPStorm, or at least WebStorm, in order to keep everyone working on the same line. And thus, just like that, the Treaty of Code had been established and work could resume.</p>

                <br/><strong>Mint</strong>
                <p>The Unicarriers Planning Tool was built using Meteor, which a framework to help you with your data flow, the first Meteor project for the Ecommerce team. In order to make application launch after edits, you need to build the application (this simply means converting your code to a way more condensed version to save space and time, this condensed version is then read by the server), and this was executed differently on every operating system. Unlike the IDEs, the OS’s used within the team differed widely. There was MacOS, OSX, Windows 7, Windows 10 and Mint, a Linux distro. And Mint won out, by far, in terms of how quickly it could build the Meteor files.</p>

                <p>With Mint, it could take you a few seconds to build the files, whereas with Windows 10 it could take up to a full minute, with every day or so it would break at least once, refuse to build, making you have to spend 30 minutes trying to get it up and running again. I was the lucky person with the Windows 10 computer. After several frustrating moments, Mark, asked if I would like to try it. And with that, he installed Mint on my computer alongside my Windows 10 (we left Windows 10 just in case I need to do any design work etc.) and the rest is history. I’ve been working and developing on my Linux distro since, even after we had finished the Unicarriers project. Mint just works, it’s fast and reliable. This report was written and developed on Mint even. </p>

                <h3>Maintenance</h3>

                <br/><strong>Git</strong>
                <p>Git for those unfamiliar is absolutely essentially for any programmer. It’s a version control system designed to keep track of any changes in your code. This makes very easy for when something breaks, for you to know just what exactly you had changed. But its genius really shines when you’re working with several developers on a single project.</p>
                <p>We keep our code on a central point so that every developer can access it, and the tool chosen to do this is GitLab. With GitLab you could send all your code and the changes you’ve made to it, it’ll check with what’s on the server already to see if your code will come in conflict with that of another developer, if so it’ll alert you, if not, it’ll alter your changes and put them online on the central point, for the other developers to access. </p>

                <br/><strong>ESLint</strong>
                <p>As you can imagine, every developer has a “way” to write their applications: tabs vs spaces, how much do you indent a line, single vs double quotes etc. This becomes a problem if you want your code to remain readable and comprehensive, but especially when you’re working several developers on a single application. It becomes unreadable when you start to mix and match different types of spacing and quotation marks. For this purpose, ESLint was created.</p>
                <p>ESLint creates a set of rules that determine what you should use, and if you don’t, it’ll throw errors preventing you to be able to build your application on the server. This resolves a lot of the problem with developer preferences.</p>

                <br/><strong>Configurations</strong>
                <p>This is a broad term for a concept in web development where you write out in a separate file what environment you would to develop in. What this means is that you can say, for example, that you’ll be writing ES6 in this application, so when the application is being build, it should convert your ES6 syntax to typical JavaScript. There are dozens of tools for this, most popular at the moment being Webpack. I will continue on this topic in the Pipelines section.</p>

                <h3>Deployment</h3>

                <br/><strong>GitLab Flow</strong>
                <p>Continuing on from the Git section, GitLab Flow goes deeper into how you should send your code to the server, with as goal to optimize how much code a developer can send with as little conflicts as possible, as smoothly as possible. There are various ideas and philosophy behind this, but as team we had chosen GitLab’s own recommendation for a flow. This flow breaks your application down into a “Master” tree where the main code is and what is usually running on the server, and various branches from this tree. These branches are called “Features”: the idea being that each branch is a copy of the Master, you develop on that branch a specific feature e.g. a comment system, and then you merge that back into the Master. This is the core of it, but barely scratches the surface of the overall idea of the flow, which is beyond the scope of this section. But simply put, knowing and understanding this flow really helps you get more work done with less hassle. </p>

                <br/><strong>Pipelines</strong>
                <p>Servers are essentially powerful computers connected to the internet, that serves your files to users all over the world. The server receives files from GitLab, but instead of going directly into the server, the files go through something called Pipelines. </p>
                <p>These are steps and processes that your application has to go through before it reaches the server. Usually these Pipelines includes things such as installing, building and testing. If a Pipeline doesn’t pass the testing phase, it’ll throw an error, and your application will not get pushed until these errors are resolved. These steps are typically written in easy-to-read configuration files that I had talked about in the Configuration section. This is a fantastic setup to make sure that no simple bug or typo makes it into the server.</p>

                <br/><strong>Virtual Machines + PM2</strong>
                <p>Speaking of servers, there are several types. One of the ones I had worked with were Cloud servers and Virtual Machines. These are lightweight servers that, when properly configured, can run just about any application. PM2 on the other hand, is a process management system, specifically for Node-based applications. PM2 makes it surprisingly easy to deploy and run Node applications, whereas regular servers can be quite a hassle. Seeing as I’m a JavaScript developer (and therefore Node, eventually) this will be very useful to me moving forward.</p>

                <div className="nav-buttons">
                    <Navigator type="backwards" link="/assignments/internshipreport"/>
                    <Navigator type="forward" link="/conclusion"/>
                </div>
            </div>
        );
    }
}

export default AdditionalSkills;