import React, { Component } from "react";
import Navigator from "../tools/Navigator";
import feedbacktool from "../videos/feedbacktool.png";
import VideoHeader from "../tools/VideoHeader";
import presentation from "../videos/presentation.jpg";

class FeedbackTool extends Component {
    render() {
        return (
            <div className="page--with-video-header">
                <VideoHeader image={feedbacktool} altText="Feedback Tool" text="The Feedback Tool"/>
                <div className="shrinkwrap">
                    <p>The feedback tool is a feedback collection tool for TRIMM’s clients. With this tool, anyone with a trimm.nl email can create an account, then create projects, and then add questionnaires to those projects. This also came with several extra features as well, such as standard questions throughout the entire application, these questions were determined to be “perfect” questions for a sprint retrospective. But there were also default questions per project, in case you as the Product Owner, wanted to ask a specific client a question every time that’s only pertinent to his business. Moreover, the user is also able to send the questionnaires to a number of people through email from within the application itself, and also have a dashboard view called the “Report” where he can see how a specific questionnaire is doing, or the entire project over a period of time.</p>
                    <p>The feedback tool came about during my very first day and meeting at TRIMM. During our Monday Morning Meeting with Marc Woesthuis, the director of TRIMM, he had asked us how we keep track of our clients’ satisfaction. There were several comments made, a lot of them came down to that it’s something you “know” or “feel”, while others suggested that they simply ask their clients how satisfied they are after each sprint. My team, including Michiel Bruggenwirth, Sarina Meester and Tiuri de Jong, went a step further and suggested a method to systematically keep track of this “satisfaction trend”.</p>
                    <p>We had researched to see if there were any existing tools that could meet our needs, but there were none. The ones we did find were either too complex (creating a questionnaire would take 20 minutes), or not enough (every questionnaire had the same style). And so, with  a goal in mind, the feedback tool was born. </p>
                    <p>A few weeks following the initial meeting, Michiel presented a rough version of the prototype to the company, and received several complimentary remarks, but also useful critique. However, since we were all busy with several projects, the feedback tool took a backseat for a while, until Michiel had given me the task to built it, and Sarina the task to design it.</p>

                    <strong>This tool is built by several interesting technologies:</strong>
                    <ul>
                        <li>React</li>
                        <li>React-Router v4</li>
                        <li>JSX</li>
                        <li>SCSS</li>
                        <li>Firebase</li>
                        <li>AWS SES</li>
                        <li>ES6</li>
                        <li>Node</li>
                        <li>Express</li>
                    </ul>
                    <p>As you, dear reader, might realize: the technology set here is very similar to that of Unicarriers (apart from Meteor), but then a backend system added on top of it (Firebase, Node, Express etc.) With Michiel’s initial prototype in hand, I had jumped in to build up this tool. I must add at this point, that by the end of it, the initial prototype was pretty much no where to be seen.</p>

                    <h3>How It Went</h3>
                    <p>Peter Bakker, the Product Owner for the project, had helped me alongside Michiel to create my User Stories and Scrum board, which streamlined the project’s flow. I had set out to build the foundation first, with no design at all on top. After approximately 3 weeks, I had the core of the application working, without having written any CSS or styling. It is around this time, that Sarina had joined to help me design and build the actual design of the tool. </p>
                    <p>This tool caused several headaches, but also several celebratory Pepsi’s. I have learned a lot building this project from scratch. Not just programming structures and design patterns, but at certain points I had to do a complete 180 on the way I was thinking, go back and restructure a significant portion of my code, before being able to continue.</p>
                    <p>The most important takeaway from this project must be planning ahead. As explained before, I’ve had to restructure and rebuild the application before I continued, this happened twice on a large scale, and a handful of times on a smaller scale. This came about because in the beginning (where of this happened) I was focusing on each individual component of the application, instead of focusing on the bigger picture, the application as a whole. In order to prevent this, I have decided that if an application’s scope seems to big to keep in your thoughts, it’s a very good idea to simply write out your logical structures and flow down on paper and analyzing that before continuing. Sometimes it might be better to calmly think through the problem for a day and save yourself a lot of time down the line, instead of jumping it and creating components immediately.</p>

                    <img src={presentation} alt="Presentation at TRIMM"/>

                    <h3>The Big Day</h3>
                    <p>On June 19th, during our weekly MAMO session I had been given the opportunity to present a functioning prototype of the Feedback Tool to TRIMM and its employees. I did the presentation with Arnoud, explained what exactly the goal of the feedback tool was, how it worked and what our plans are for the future regarding the tool. This presentation led to a lot of good, critical feedback regarding the tool such as having standard answers, an answer for when the question is not applicable etc. Moreover, I received compliments for my presentation itself and manner of speaking. Later in July, I hope to finalize the tool and deploy it for everyone in the office</p>

                    <div className="nav-buttons">
                        <Navigator type="backwards" link="/assignments/unicarriers"/>
                        <Navigator type="forward" link="/assignments/internshipreport"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default FeedbackTool;