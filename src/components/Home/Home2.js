import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️

              <br />
              <br />

              I am passionate about
              <i>
                <b className="purple">
                  {" "}Data Analytics, Data Engineering, Machine Learning
                </b>
              </i>
              {" "}and Full-Stack Development, with a strong interest in
              working with data and building meaningful, data-driven solutions.

              <br />
              <br />

              My field of interest's are exploring data, extracting meaningful
              insights, building efficient
              <i>
                <b className="purple"> Data Pipelines and ETL Processes</b>
              </i>
              {" "}and developing intelligent applications using
              <i>
                <b className="purple"> Machine Learning.</b>
              </i>

              <br />
              <br />

              I am comfortable working with technologies like
              <i>
                <b className="purple">
                  {" "}Python, SQL, Pandas, NumPy, Power BI and MySQL
                </b>
              </i>
              {" "}for data analytics and data-driven solutions.

              <br />
              <br />

              Whenever possible, I also apply my passion for building products
              using <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}Modern JavaScript Libraries and Frameworks
                </b>
              </i>
              {" "}like
              <i>
                <b className="purple"> React.js and Next.js.</b>
              </i>
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>

            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/kanthalidhruvan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/dhruvan-kanthali/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.instagram.com/dhruva_xix/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;

