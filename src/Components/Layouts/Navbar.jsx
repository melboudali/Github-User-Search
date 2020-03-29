import React, { Fragment } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
//Using LinkContainer instead of LINK (i had a problem with Nav.link bootstrap)
import { LinkContainer } from "react-router-bootstrap";

const NavbarComp = () => {

  const changeTitle = () => {
    document.title = "Github User Search";
  };

  return (
    <Fragment>
      <Navbar className="Navbar" expand="lg" sticky="top">
        <Container>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 200, hide: 200 }}
            overlay={
              <Tooltip className="myToolTip">
                <i className="fab fa-github-square" /> Github User Search
              </Tooltip>
            }
          >
            <Navbar.Brand className="NavText" href="/">
              <i className="fab fa-github-square" /> Github User Search
            </Navbar.Brand>
          </OverlayTrigger>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto justify-content-end navWidth">
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 200, hide: 200 }}
                overlay={<Tooltip className="myToolTip"> Home </Tooltip>}
              >
                <LinkContainer to="/" className="NavText" onClick={changeTitle}>
                  <Nav.Link>
                    <i className="fas fa-home" /> Home
                  </Nav.Link>
                </LinkContainer>
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 200, hide: 200 }}
                overlay={<Tooltip className="myToolTip"> My Github </Tooltip>}
              >
                <LinkContainer to="/user/MedElBoudali" className="NavText">
                  <Nav.Link>
                    <i className="fas fa-heart" /> My Github
                  </Nav.Link>
                </LinkContainer>
              </OverlayTrigger>
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 200, hide: 200 }}
                overlay={<Tooltip className="myToolTip"> About </Tooltip>}
              >
                <LinkContainer to="/About" className="NavText">
                  <Nav.Link>
                    <i className="fas fa-info-circle" /> About
                  </Nav.Link>
                </LinkContainer>
              </OverlayTrigger>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default NavbarComp;
