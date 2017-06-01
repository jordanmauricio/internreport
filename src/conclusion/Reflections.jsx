import React, { Component } from "react";
import Navigator from "../tools/Navigator";

class Reflections extends Component {
    render() {
        return (
            <div>
                <h1>Reflections over coffee</h1>
                <p>TRIMM turned out to be a better internship place than I could have imagined. As I’ve told my team several times before, I haven’t had the opportunity before to learn as much as I did in just 5 months. In the past 5 months, I didn’t simply add new tools and libraries to my repertoire, but I’ve improved the very way I write my programs and how I think when writing. This is far more than I had expected to leave with. </p>
                <p>During my time at TRIMM, I had come to learn about all the bits and pieces that I did not yet know about web development. Things I wouldn’t have otherwise found out, such as how to properly work with Git, how deployment happens through Docker and Jelastic, that I don’t understand certain concepts as well as I thought I did etc. With these flaws and gaps in my understanding now laid bare, I can slowly work my way through them and correct them as necessary.</p>
                <h3>FAQ</h3>
                <br/><strong>What could've gone better? </strong>
                <p>I could be more vocal (Dutch is a bit of a barrier, although to be fair I was told to speak English if Dutch became a problem)</p>
                <br/><strong>What didn't I like? </strong>
                <p>Not exactly didn’t like, but it was a rude awakening to find out that even a company as well established and prominent as TRIMM still has some of the problems that even smaller companies suffer them. I can’t go into too-deep of detail here of course, but I had simply (incorrectly) assumed that the process of work and getting work is a lot smoother.</p>
                <br/><strong>What does TRIMM do better? </strong>
                <p>TRIMM brings you, as an intern, into their workflow and treats you as an employee from day one. All of my colleagues were always very open to help me with any question I may have had, and offered advice where they believed I could improve. This wasn’t just for my work, but also for my personal  development at a professional level. The HR representatives in my team have taken the time, regularly, to have a short one-to-one meeting with me to see if there’s anything wrong, if there’s anything I would like to get off my chest, any worries etc. It was a breath of fresh air to experience this type of care from a corporate environment.</p>
                <br/><strong>What would you tell students considering TRIMM? </strong>
                <p>To absolutely go for it, if you care for your work. While TRIMM is a terrific place to work, and you have a lot of fun while working [ as I was typing this the team and I went into a discussion based off of Neil DeGrasse Tyson’s Cosmos on whether or not we are the first planet that have had life on it ] you also need to be able to dedicate yourself to a project and self-improving full-time as TRIMM does expect your best self.</p>
                <br/><strong>What kind of music were you listening to there?</strong>
                <ol>
                    <li>Human by Rags’N’Bone Man</li>
                    <li>Tell Me I’m Pretty by Cage the Elephant</li>
                    <li>Corazón by Satana</li>
                    <li>Careless People by Charlotte OC</li>
                    <li>Melophobia by Cage the Elephant</li>
                    <li>Enter the Wu-Tang by Wu-Tang Clan</li>
                    <li>We Sell Drugs by Tribe Society</li>
                    <li>Minecraft Volume Alpha by C418</li>
                    <li>Watch the Throne by Jay-Z ft. Kanye West</li>
                    <li>Hamilton by Lin-Manuel Miranda, ft. Various Artists</li>
                    <li>Because the Internet by Childish Gambino</li>
                    <li>Already Out of Time by Stoop Kids</li>
                </ol>
                <br /><strong>Did you learn anything outside of your professional life?</strong>
                <ol>
                    <li>Adje: drink your full glass of beer in one go</li>
                    <li>BVO: bier voor onderweg: beer for the ride home</li>
                    <li>Cigars are great</li>
                    <li>There is such a thing as superior (toilet)paper</li>
                    <li>Nerf guns can hurt</li>
                    <li>You can play darts anywhere</li>
                </ol>

                <div className="nav-buttons">
                    <Navigator type="backwards" link="/assignments/extra"/>
                    <Navigator type="forward" link="/conclusion/future"/>
                </div>
            </div>
        );
    }
}

export default Reflections;