// import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import sponsors from "../../Assets/Projects/sponsors.png"; // ✅ New image import

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Project 1 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="No-code ML Model Training App"
              description="🚀 Developed a no-code ML application enabling users to train models without coding, supporting dataset uploads, real-time evaluation, and deployment. Built with Python, Flask, TensorFlow, and Scikit-learn for optimized usability."
              ghLink="https://github.com/kanthalidhruvan/No-code-ML-model-training-app"
            />
          </Col>

          {/* Project 2 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Sales Prediction"
              description="Developed a sales prediction project using ML algorithms for trend forecasting, with data preprocessing and feature selection for accuracy. Built a user-friendly web interface and hosted the site for real-time predictions."
            
            />
          </Col>

          {/* ✅ New Project 3 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sponsors}
              isBlog={false}
              title="Sponsors Connect"
              description="Developed a web platform connecting organizations with potential sponsors, enabling project showcasing and direct sponsorship engagement. Integrated profile management, sponsorship listings, and secure communication for streamlined funding."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
