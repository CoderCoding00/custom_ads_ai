import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Modal, Tab } from "react-bootstrap";
import SignUpForm from "./SignupForm";
import LoginForm from "./LoginForm";

import Auth from "../utils/auth";

const NavTab = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar variant="dark" expand="lg" className='navbar'>
        <Container fluid>
          {/* Set this link to the LandingPage.js */}
          <Navbar.Brand as={Link} to="/">
            <span className="logo-text logo">POSTGENAI</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar">
            <Nav className="ml-auto">
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link as={Link} to="/" className='choice'>
                    Generate Posts
                  </Nav.Link>
                  {/* **** SAVED POSTS NOT WORKING AS OF NOW */}
                  {/* <Nav.Link as={Link} to="/saved">
                    Saved Posts
                  </Nav.Link> */}
                  <Nav.Link as={Link} to="/"></Nav.Link>
                  <Nav.Link onClick={Auth.logout} className='choice'>Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={() => setShowModal(true)} className='choice'>
                  Login/Sign Up
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Modal data up */}
      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="signup-modal"
      >
        {/* Signup or Login */}
        <Tab.Container defaultActiveKey="login">
          <Modal.Header closeButton>
            <Modal.Title id="signup-modal">
              <Nav variant="pills">
                <Nav.Item >
                  <Nav.Link eventKey="login" className='pop'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="signup" className='pop'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey="login">
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey="signup">
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};

export default NavTab;
