// import logo from './logo.svg';
import React from "react";
import "./App.css";
import Portfolio from "./components/Portfolio";
import Header from "./components/Header";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";

function App() {
  // const date = new Date();
  // const currentTime = date.getHours();

  // let greeting;

  // if (currentTime < 12) {
  //   greeting = "Good Morning";
  // } else if (currentTime < 18) {
  //   greeting = "Good Afternoon";
  // } else {
  //   greeting = "Good Evening";
  // }

  return (
    <Router>
      <div>
      
        <Header />
        <div className="content-container">
        <Switch>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Contact />

          </Route>

          <Route exact path="/aboutme">
            <AboutMe />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
