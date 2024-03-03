import React from "react";
import { Col, Container, Row } from "reactstrap";
import "../Styles/Projects.css";
import photography from "../Image/Photography.jpeg";
import foodwilla from "../Image/foodwilla.jpeg";

const Projects = () => {
  return (
    <Container className="ProjectCon">
      <Row>
      <Col lg="12" sm="12" className="ProjectCol mb-2 mt-3">
            <h4 className="mt-2">Project</h4>
          </Col>
        <Col lg="12" sm="12">
          <div className="ProjectContainer">
            <div className="Projectbox">
              <div className="Projectbox-img">
                <img src={photography} alt="photography" />
                <a href="https://harishrao.netlify.app/">
                    <h3>Photography</h3></a>
              </div>
            </div>
            <div className="Projectbox">
            <div className="Projectbox-img">
              <img src={foodwilla} alt="foodwilla" />
              <a href="https://food-villa-restaurant.netlify.app/">
              <h3>Food-fire</h3></a>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
