import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

const About = () => {
  return (
    <Fragment>
      <Container>
      <Col xs="12" sm="6" md="6" lg="4" xl="4">
        <h2 className="AboutHeader">About Page</h2>
        <h6>
        Github user search using react, react-dom, react-bootstrap, react-router-bootstrap, axios and Github Api.
        </h6>
        <h7 className="githubDescription">
        GitHub, Inc. is a US-based global company that provides hosting for software development version control using Git. It is a subsidiary of Microsoft, which acquired the company in 2018 for US$7.5 billion. It offers the distributed version control and source code management functionality of Git, plus its own features.
        </h7>
</Col>
      </Container>
    </Fragment>
  );
};

export default About;
