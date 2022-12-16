import React from "react";
// import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Auth from '../utils/auth';

function NavTab() {
    return(
      <>
      <Navbar className='navbar' variant='dark'>
      <Container>
        <Navbar.Brand href="/" className="logo">PostGenAI</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/home" className='choice'>Home</Nav.Link>
          <Nav.Link href="/login" className='choice'>Sign In</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    
</>
    );
}

export default NavTab