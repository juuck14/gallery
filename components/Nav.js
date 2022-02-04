import Link from 'next/link';
import React from 'react';
import {Navbar,Nav,Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { faCoffee, faUserCircle  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navi = () => {
  return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="justify-content-end">
          <Nav.Item className="justify-content-end">
              <Nav.Link href="/">
                Home
              </Nav.Link>
          </Nav.Item>
          <Nav.Item className="justify-content-end">
              <Nav.Link href="/profile"  eventKey="profile">
                <FontAwesomeIcon icon={faUserCircle } />
              </Nav.Link>
          </Nav.Item>
        </Nav>
        </Container>

      </Navbar>
    );
};

export default Navi;