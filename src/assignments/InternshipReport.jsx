import React, { Component } from "react";
import Navigator from "../tools/Navigator";
import internshipSketch from "../videos/internship-sketch.jpg";
import VideoHeader from "../tools/VideoHeader";
import report from "../videos/report-header.webp";

class InternshipReport extends Component {
    render() {
        return (
            <div className="page--with-video-header">
                <VideoHeader image={report} altText="This" bgColor="#f5e7a1" text="This report itself"/>
                <div className="shrinkwrap">
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
                    Bulma is a CSS library, this library allows you to build beautiful apps really fast by including pre-designed text, colors, buttons, formatting etc. I have however overwritten some of their styling for my own in order to make my application unique; for example the fonts used are PT Serif for the headers, and Source Sans Pro for the text, the size of the reading area has been shrunk to 740px etc.</p>

                    <p>Zeit on the other hand is a easy-to-setup backend system. If done correctly, you are able to use their Now feature to deploy react application with all their dependencies and routing with one single command in the terminal. It’ll deploy it to a server for free and link it with their own domain system as you can see in the URL bar above. This tool makes it very simple to launch your applications to the world with minimal effort seeing as I don’t need any connection to a database or anything. Had I wanted to convert this into a CMS for easy management and editing, then I would’ve included Firebase, however that seemed to be overkill.</p>

                    <img src={internshipSketch} alt="Internship Sketch" />

                    <h3>How It Went</h3>

                    <p>The application’s structure was configured and then built, along with its routing within 2 days. I was very satisfied with how quickly this was done as previously explained, but also that I hadn’t need to ask for help (I did ask for advice however, on the optimal way to write a piece of code). </p>

                    <p>The only issue will be to know where I would like to stop with the development. Of course anyone would like to transform their report into the most cool, best looking, interaction experimentation play ground that they can imagine. Therefore, I will be focusing on the content primarily, the text, and only when this has been implemented properly will I continue with the more fun features.</p>

                    <p>In order to liven up the report (read: make it look not-boring) I had requested the help of Thijs Spit in producing some nice photos and videos. With his help we created some timelapse videos, and I had taken some photos from inside the office. To achieve a cohesive design, I’ve implemented a lot of these timelapse videos as header items at the beginning of several sections of my report. This ended up taking up more time than I had at first anticipated, and was therefore one of the main reasons why my report was slightly delayed, but I believe that it was worth it. In hindsight, it might’ve been a good idea to start working on the video themselves earlier as I had already had that idea planned for a while, however the weather wasn’t really allowing it. There were several cloudy days that made the sky look very grey, resulting in very boring photos. This of course is not possible, considering that photos are there to liven up the scene, not make it more boring.</p>

                    <h3>Murphy's Law</h3>

                    <p>Wrapping up projects is never a smooth process, and that was no different with this one. For my final 2 weeks of my internship I had decided to spend those back home to be present for some family events, which meant wrapping this report up while there as well. In order to prepare, I had taken a terrific camera from TRIMM and took several photos inside our building and timelapses outside. I had then transferred these to a USB stick for further processing from their original RAW format. Once I arrived back home, I installed Lightroom to develop all the photos, and came to the startling conclusion that more than half of the images I had taken were not present in the folder. For some unexplainable reason, none of the images were sent over, even though I had transferred them with a “Select All” command.</p>

                    <p>Moreover, my first two days trying to develop this report further came to a quick halt with a very weird error deep inside either React or Zeit. This error prevented the entire report to even open, and required several hours over the span of two days worth of debugging in order to trace the source of the problem down to a new update from Zeit.</p>

                    <p>To conclude, my footage and images were gone and my timeframe for finishing this report was cut in half; I had some damage control to do. I had decided instead of using videos (the timelapses), that I would instead use a combination of images and gifs from GIPHY. These didn’t come out too bad, albeit not as good as the videos would have been. Only one little bug still persists: a scaling issue of the images on smaller devices. This has to do with the ratio of the image, I wouldn’t want to distort the image, but at the same time I want it to constantly fill up the entire screen. I reached a compromise where the scaled down images are squeezed a bit together. All in all, I had to drop some of the features I had planned to implement, and the headers don’t look as good as I had hoped. But nevertheless, I’m still very happy with my decision to transform my report into an application. It was a true learning experience, especially in terms of debugging and pivoting on a very short time span.</p>

                    <div className="nav-buttons">
                        <Navigator type="backwards" link="/assignments/feedbacktool"/>
                        <Navigator type="forward" link="/assignments/extra"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default InternshipReport;