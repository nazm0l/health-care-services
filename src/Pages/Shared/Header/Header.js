import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className='text-white fw-bold' as={Link} to="/">Health Care Services</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className='text-white' as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link className='text-white' as={Link} to="/blogs">
                Blogs
              </Nav.Link>
              <Nav.Link className='text-white' as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link className='text-white' as={Link} to="/login">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    );
};

export default Header;