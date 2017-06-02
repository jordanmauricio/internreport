import React, { Component } from "react";
import Navigator from "../tools/Navigator";

class Future extends Component {
    render() {
        return (
            <div>
                <h1>Plans for the future</h1>
                <p>A few weeks ago, Joeri had approached me to see if I would be willing to stay on as a developer workstudent for TRIMM, still as part of the Ecommerce team. I was more than happy to oblige, therefore for the upcoming few months I’ll be working part-time at TRIMM!</p>

                <p>Alongside this, starting September, I will be beginning my senior year of CMGT. I’ll be working on several research assignments and trying to get myself ready for the workfield. The idea is to basically enter the workfield as a regular developer instead of a junior, in terms of knowledge.</p>

                <p>In order to achieve this goal, I would like to level up my skills even more and have decided to follow certain tutorials to let that happen in conjunction with working part-time at TRIMM. The list was compiled from advice from my colleagues, but also certain things that I myself found. They are not entirely in a specific order.</p>

                <br/><strong>Introduction to DevOps</strong>
                <p>Currently I’m trying to dive into DevOps whenever I have the time, DevOps has to do with the connection between developers and operation managers (IT). DevOps tries to make the flow from a developer writing a program, to an operator putting it online, seamless and as automatic as possible. I’ve already started by following the DevOps Foundations on Lynda.</p>

                <br/><strong>Learn Redux & Learn Node by Wes Bos</strong>
                <p>These two courses are self-explanatory if you know those tools, but for those who don’t, Redux is a library built for React and helps make the data flow inside your application even easier, whereas Node is a JavaScript library for writing code on the server. I’m very excited to be starting this as soon as possible!</p>

                <br/><strong>Progressive Web Apps by Google Dev Team</strong>
                <p>This is a free course on YouTube where the two developers from Google’s Dev Team teaches you how to make modern progressive apps, with several new features such as Service Workers and Local Storage.</p>

                <br/><strong>Clean Code by Uncle Bob</strong>
                <p>This series was recommended to me by Arnoud. The series follows Uncle Bob, a very experienced programmer, who teaches you how to write proper code that is both readable and understandable at a glance. It’s usually a series about the best practices that every developer should implement. The content of the series is excellent, in stark contrast to the amusing yet cringe inducing themes and transitions.</p>

                <br/><strong>Drupal</strong>
                <p>Entertainia is a big project that the Ecommerce team is working on at the moment. This project is running Drupal as its CMS, and therefore if I would like to join the team in developing for this project, I would need to learn Drupal. This will most likely happen over the summer.</p>

                <br/><strong>Isomorphic Applications</strong>
                <p>These are JavaScript applications that can run on both the Frontend and the Backend. It’s more a methodology and way of writing code than anything else. It’s a very nice next step after learning Node, in order to combine React and Node and be able to create universal applications that can run on just about any device, written entirely with JavaScript.</p>
                
                <div className="nav-buttons">
                    <Navigator type="backwards" link="/conclusion"/>
                    <Navigator type="forward" link="/conclusion/bye"/>
                </div>
            </div>
        );
    }
}

export default Future;