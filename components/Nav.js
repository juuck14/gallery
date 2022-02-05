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
          <Link href="/" passHref>
            <Navbar.Brand>Navbar</Navbar.Brand>
          </Link>
          <Nav className="justify-content-end">
          <Nav.Item className="justify-content-end">
              <Link href="/" passHref>
                <Nav.Link>
                Home
                </Nav.Link>
              </Link>
          </Nav.Item>
          <Nav.Item className="justify-content-end">
              <Link href="/profile" passHref>
               <Nav.Link>  
                 <FontAwesomeIcon icon={faUserCircle } />
                </Nav.Link>
              </Link>          
          </Nav.Item>
        </Nav>
        </Container>

      </Navbar>
    );
};

export default Navi;