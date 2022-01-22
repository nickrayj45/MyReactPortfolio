import React from "react";
import "../components/Home.css";



function Home(props) {
  return (
    <div className="welcome-box">
     <h1>Welcome Everyone!</h1>
     <p>My name is Nicholas and I am a Web Developer. Feel free to look through my portfolio and contact me for any questions.</p>
     <img src="../assets/monitor-img.jpeg" alt="image_of_monitor" />
    </div>
  );
}

export default Home;
