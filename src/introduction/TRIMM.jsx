import React, { Component } from "react";
import Navigator from "../tools/Navigator";

class TRIMM extends Component {
    render() {
        return (
            <div>
                <h1>This is TRIMM</h1>
                <p>TRIMM has been a B2B digital agency for over 20 years. Throughout these years, it has catapulted itself from a young company to the best digital agency in the East of the Netherlands. TRIMM has won several awards for their work: 3 AVA Awards, 2 Dutch Interactive Awards and 1 Marcom Award. In 2017 they also won EMERCE’s Best Digital Agency of the Netherlands, with 5 stars. This is not surprising considering that TRIMM’s clientele includes companies such as KPN, Philips, Ziggo, Uncarriers and KLM.</p>

                <h3>The ecommerce team</h3>
                <p>There are various teams that make up the entirety of TRIMM, of which I belonged to the E-commerce team. The team, ourselves, doesn’t focus solely on E-commerce websites such as Amazon or Bol, but websites where any sort of transaction takes place. This could be sites that instead of money use tokens, or even internal applications for companies.</p>
                <p>The team consists of the following people:</p>
                <ul>
                    <li>Arnoud Steenwijk (Back-end developer)</li>
                    <li>Ellen Wielaard (UX Designer)</li>
                    <li>Julian De Graaf (Designer)</li>
                    <li>Peter Bakker (Product owner)</li>
                    <li>Mark Wienk (Full-stack developer)</li>
                    <li>Michiel Bruggenwirth (Scrum master, front-end developer, my supervisor)</li>
                    <li>Midas Minnegal (Front-end developer, work-student, former intern)</li>
                    <li>Sarina Meester (Designer)</li>
                </ul>
                <p>Michiel was my internship supervisor at TRIMM, but I had also received a lot of help from Arnoud and Mark when I got stuck on a problem. Peter helped me with the planning and organization of my Feedback Tool, and taught me a lot about Scrum that I didn’t know about. Sarina also helped me with the Feedback Tool by creating its design for me, and even going so far as to help me develop the CSS. Moreover, Midas and I did a lot of pair programming while we worked on the Unicarriers projects as well. Finally, Ellen and Julian helped me with a lot of personal development, always trying to get me to push myself further to better myself. I am very thankful to everyone in my team.</p>
                <p>Our team is very friendly with each other, and doing events with the team when possible. For example, as a congratulations to Midas for finishing his internship, and a farewell party for Judith Damveld, a former Product Owner, we went to an Escape Room in Nijverdal followed by dinner. </p>
                
                <div className="nav-buttons">
                    <Navigator type="backwards" link="/introduction/me"/>
                    <Navigator type="forward" link="/assignments/unicarriers"/>
                </div>
            </div>
        );
    }
}

export default TRIMM;
