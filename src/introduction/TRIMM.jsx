import React, { Component } from "react";
import Navigator from "../tools/Navigator";
import VideoHeader from "../tools/VideoHeader";
import trimm from "../videos/trimm.jpg";
import team from "../videos/teammems.jpg";

class TRIMM extends Component {
    render() {
        return (
            <div className="page--with-video-header">
                <VideoHeader image={trimm} alText="TRIMM building" bgColor="#4590ca" text="This is TRIMM"/>
                <div className="shrinkwrap">
                    <p>TRIMM has been a B2B digital agency for over 20 years. Throughout these years, it has catapulted itself from a young company to the best digital agency in the East of the Netherlands. TRIMM has won several awards for their work: 3 AVA Awards, 2 Dutch Interactive Awards and 1 Marcom Award. In 2017 they also won EMERCE’s Best Digital Agency of the Netherlands, with 5 stars. This is not surprising considering that TRIMM’s clientele includes companies such as KPN, Philips, Ziggo, Uncarriers and KLM.</p>

                    <h3>The Ecommerce team</h3>
                    <p>There are various teams that make up the entirety of TRIMM, of which I belonged to the Ecommerce team. Our team doesn’t focus solely on Ecommerce websites such as Amazon or Bol, but websites where any sort of transaction takes place. This could be sites that instead of money use tokens, or even internal applications for companies.</p>

                    <img src={team} alt="Team members"/>

                    <p>The team consists of the following people:</p>
                    <ul>
                        <li>Arnoud Steenwijk (back-end developer)</li>
                        <li>Ellen Wielaard (UX designer)</li>
                        <li>Julian De Graaf (designer)</li>
                        <li>Peter Bakker (product owner)</li>
                        <li>Mark Wienk (full-stack developer)</li>
                        <li>Michiel Bruggenwirth (scrum master, front-end developer, my supervisor)</li>
                        <li>Midas Minnegal (front-end developer, work-student, former intern)</li>
                        <li>Sarina Meester (designer)</li>
                    </ul>
                    <p>Michiel was my internship supervisor at TRIMM, but I had also received a lot of help from Arnoud and Mark when I got stuck on a problem. Peter helped me with the planning and organization of my Feedback Tool, and taught me a lot about Scrum that I didn’t know about. Sarina also helped me with the Feedback Tool by creating its design for me. Moreover, Midas and I did a lot of pair programming while we worked on the Unicarriers projects as well. Finally, Ellen and Julian helped me with a lot of personal development, always trying to get me to push myself further to better myself. I am very thankful to everyone in my team.</p>
                    <p>Our team is very friendly with each other, and doing events with the team when possible. For example, as a congratulations to Midas for finishing his internship, and a farewell party for Judith Damveld, a former Product Owner, we went to an Escape Room in Nijverdal followed by dinner. </p>

                    <h3>The organization</h3>
                    <p>TRIMM is a company, and that means that there are of course directors: Marc Woesthuis, Jorens Thomassen en Rogier Florijn. Under them there are several teams inside TRIMM, of which Ecommerce is only one of them. There are several teams dedicated to building websites, portals, applications etc, some of these are: Delta Force, Team 28, Fronteers, and Splintercell. Alongside them there’s also System Administrators who handles all of our server and networking needs, Server and Maintenance which deals with keeping the application of all of our clients up to date and functioning properly. And lastly the Marketing team, that do both marketing but also content for both TRIMM internally, and for our clients when needed.</p>
                    <p>Moreover, there’s the Backbone that, as the name implies, are the “backbone” of TRIMM and handle things such as finances, visitors, project maintenance, HR etc. Additionally, there’s our Sales team where they attempt cold calling and following leads in order to acquire either new clients or new projects for TRIMM.</p>
                    <p>As you can see, there are several teams inside TRIMM, each with their own scrum master, representatives and team leads. Each team is independant and is expected to be self-sufficient whenever possible, but that does not mean that there aren’t certain projects where two different teams will collaborate on together when necessary. Overall TRIMM’s structure relies on trust, a trust that each team will work their hardest for their clients, which is rewarded with independence and creative control.</p>

                    <div className="nav-buttons">
                        <Navigator type="backwards" link="/introduction/me"/>
                        <Navigator type="forward" link="/assignments/unicarriers"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default TRIMM;
