import React from "react";
import "../components/AboutMe.css"

function AboutMe(props) {
  return (
    <div id="intro">
     <h1 id="welcome">
         Welcome
     </h1>
     <img id="photo" src="assets/selfie.jpg" alt="pic-of-me" />
     <p>My name is Nicholas Jaquez and I'm a Web Developer.</p>
     <p>I received my Certificate in Full-Stack Coding from UCLA in June of 2020.</p>
     <p>Feel free to look at my projects in the Portfolio tab and contact me if you have any questions.</p>
     <p>Test</p>
    </div>
  );
}

export default AboutMe;
