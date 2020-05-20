import React from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
// import TeamBanner from "../../images/theteam.png";

export default function TheTeamBanner() {
  return (
    <Container fluid>
      <div className="a-the-team-banner ptsm team-wrapper">
        <Col className="team-caption">
          <Row>
            <Col md={2}></Col>
            <Col md={4}>
                <h2 className="bigTexts white">
                  Meet the <span className="green">Team</span>
                </h2>
            </Col>
            <Col md={4} className="smallestText montserrat pt-3 white">
              One of the keys to Aorthar’s success is it's incredibly talented team. 
              Our people are extremely skilled and picked only from the top stratum 
              in the industry. The highly talented and flexible Aorthar team governing 
              and supervising on your project are:
            </Col>
          </Row>
        </Col>
      </div>
    </Container>
  );
}
