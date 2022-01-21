import React from "react";
import "../components/Project.css";
import Project from "./Project";
import projects from "../projectData";
import { Row, Col } from "react-bootstrap";


function Portfolio(props) {
  return (
    <div className="portfolio">
    <Row>
      {projects.map((proj) => {
        return <Project project={proj} />;
      })}
      </Row>
    </div>

  );
}

export default Portfolio;
