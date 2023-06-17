import React, { Fragment, useContext, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import authContext from '../components/context/auth/authContext';
import './Navbar.css';

const Navba = () => {
  const context = useContext(authContext);
  const { user, loaduser } = context;
  useEffect(() => {
    if (!user?._id) loaduser();
  });

  const authenticated = (
    <Navbar expand='lg' style={{ background: '#000080' }}>
      <Container>
        <Link to='/'>
          <Navbar.Brand style={{ color: 'white' }}>BLOCK DIGITALS</Navbar.Brand>{' '}
        </Link>

        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav>
            <Nav.Link as={NavLink} to='/' style={{ color: 'white' }}>
              Home
            </Nav.Link>

            <Nav.Link as={NavLink} to='/about' style={{ color: 'white' }}>
              About
            </Nav.Link>

            <Nav.Link as={NavLink} to='/paidout' style={{ color: 'white' }}>
              Withdrawals
            </Nav.Link>

            <Nav.Link as={NavLink} to='/faq' style={{ color: 'white' }}>
              FAQ
            </Nav.Link>

            <Nav.Link as={NavLink} to='contactus' style={{ color: 'white' }}>
              Contact Us
            </Nav.Link>

            <Nav.Link as={NavLink} to='/dashboard' style={{ color: 'white' }}>
              <strong>
                <em>Welcome! {user.firstname}</em>
              </strong>{' '}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

  const notauthenticated = (
    <Navbar expand='lg' style={{ background: '#000080' }}>
      <Container>
        <Link to='/'>
          <Navbar.Brand style={{ color: 'white' }}>BLOCK DIGITALS</Navbar.Brand>{' '}
        </Link>

        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link
              as={NavLink}
              className='hover'
              to='/'
              style={{ color: 'white' }}
            >
              Home
            </Nav.Link>

            <Nav.Link as={NavLink} to='/aboutus' style={{ color: 'white' }}>
              About
            </Nav.Link>

            <Nav.Link as={NavLink} to='/withdrawals' style={{ color: 'white' }}>
              Withdrawals
            </Nav.Link>

            <Nav.Link as={NavLink} to='/faq' style={{ color: 'white' }}>
              FAQ
            </Nav.Link>

            <Nav.Link as={NavLink} to='/support' style={{ color: 'white' }}>
              Contact
            </Nav.Link>

            <Nav.Link as={NavLink} to='/signin' style={{ color: 'white' }}>
              Login
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to='/register'
              style={{ color: 'white' }}
              className='regg'
            >
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  return <Fragment>{user.isAdmin ? authenticated : notauthenticated}</Fragment>;
};

export default Navba;
