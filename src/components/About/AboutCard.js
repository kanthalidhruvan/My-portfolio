import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Kanthali Dhruvan </span>
            from <span className="purple">Hyderabad, India.</span>

            <br />
            <br />

            I am a <span className="purple">2026 graduate</span> from
            Gokaraju Rangaraju Institute of Engineering & Technology, with a{" "}
            <span className="purple">
              B.Tech in Computer Science and Engineering
            </span>
            , graduating with a{" "}
            <span className="purple">CGPA of 9.32</span>.

            <br />
            <br />

            Apart from coding, some of the activities and interests that I
            enjoy include:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring current affairs and global developments
            </li>

            <li className="about-activity">
              <ImPointRight /> Exploring new places and experiencing different
              cultures
            </li>

            <li className="about-activity">
              <ImPointRight /> Staying curious and learning about new ideas and
              perspectives
            </li>

            <li className="about-activity">
              <ImPointRight /> Playing sports and keeping an active lifestyle
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;