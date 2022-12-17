import React from "react";
// import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Auth from '../utils/auth'

const NavTab = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
    return(
      <>
      <Navbar className='navbar' variant='dark'>
      <Container>
        <Navbar.Brand href="/" className="logo">PostGenAI</Navbar.Brand>
        {Auth.loggedIn() ? (
          <>
           <Nav className="me-auto">
          <Nav.Link href="/home" className='choice'>Home</Nav.Link>
          <Nav.Link href="/logout" className='choice' onClick={logout}>Log Out</Nav.Link>
        </Nav>
        </>
        ) : (
          <>
        <Nav className="me-auto">
          <Nav.Link href="/home" className='choice'>Home</Nav.Link>
          <Nav.Link href="/login" className='choice'>Sign In</Nav.Link>
        </Nav>
        </>
          )}
      </Container>
    </Navbar>
    </>
    )}    
    
export default NavTab