import React from "react";
import "../components/Project.css";
import { Card, Button, Col } from "react-bootstrap";

function Project(props) {
  return (
    <Col sm={12} md={6} xl={3} className="project-col">
      <Card style={{ width: "18rem" }} className="card-img">
        <Card.Img variant="top" src={props.project.img} />
        <Card.Body className="project-card-body">
          <div>
            <Card.Title>{props.project.title}</Card.Title>
            <Card.Text>{props.project.text}</Card.Text>
          </div>
          <div className="project-buttons">
            {props.project.liveSite && (
              <Button
                variant="primary"
                className="mr-4"
                target="_blank"
                href={props.project.liveSite}
              >
                Live Site
              </Button>
            )}

            <Button
              variant="primary"
              target="_blank"
              href={props.project.gitHub}
            >
              GitHub{" "}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Project;
