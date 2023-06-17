import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Navbar,
  Nav,
  Container,
  Media,
} from 'reactstrap';

import authContext from 'components/context/auth/authContext';
import { useContext, useEffect } from 'react';

const AdminNavbar = (props) => {
  const context = useContext(authContext);
  const { user, logout, loaduser } = context;

  useEffect(() => {
    if (!user?._id) loaduser();
  });

  const onClick = () => {
    logout();
  };

  const adminNav = (
    <>
      <Navbar className='navbar-top navbar-dark' expand='md' id='navbar-main'>
        <Container fluid>
          <Link
            className='h4 mb-0 text-white text-uppercase d-none d-lg-inline-block'
            to='/'
          >
            {props.brandText}
          </Link>

          <Nav className='align-items-center d-none d-md-flex' navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle className='pr-0' nav>
                <Media className='align-items-center'>
                  <span className='avatar avatar-sm rounded-circle'>
                    <img
                      alt='...'
                      src={
                        require('../../assets/img/theme/Unknown_person.jpg')
                          .default
                      }
                    />
                  </span>
                  <Media className='ml-2 d-none d-lg-block'>
                    <span className='mb-0 text-sm font-weight-bold'>
                      {user.firstname} {user.lastname}
                    </span>
                  </Media>
                </Media>
              </DropdownToggle>
              <DropdownMenu className='dropdown-menu-arrow' right>
                <DropdownItem className='noti-title' header tag='div'>
                  <h6 className='text-overflow m-0'>Welcome!</h6>
                </DropdownItem>
                <DropdownItem to='/dashboard/listusers' tag={Link}>
                  <i className='ni ni-single-02' />
                  <a href='/dashboard/listusers'>
                    {' '}
                    <span>List Users</span>{' '}
                  </a>
                </DropdownItem>
                <DropdownItem
                  to='/dashboard/listwithdrawalrequests'
                  tag={Link}
                >
                  <i className='ni ni-settings-gear-65' />
                  <span>Withdrawal Requests</span>
                </DropdownItem>
                <DropdownItem to='/dashboard/alldepositlist' tag={Link}>
                  <i className='ni ni-calendar-grid-58' />
                  <span>All Deposits</span>
                </DropdownItem>
                <DropdownItem to='/dashboard/support' tag={Link}>
                  <i className='ni ni-support-16' />
                  <span>Support</span>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href='/signin' onClick={onClick}>
                  <i className='ni ni-user-run' />
                  <span>Logout</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );

  const userNav = (
    <>
      <Navbar className='navbar-top navbar-dark' expand='md' id='navbar-main'>
        <Container fluid>
          <Link
            className='h4 mb-0 text-white text-uppercase d-none d-lg-inline-block'
            to='/'
          >
            {props.brandText}
          </Link>

          <Nav className='align-items-center d-none d-md-flex' navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle className='pr-0' nav>
                <Media className='align-items-center'>
                  <span className='avatar avatar-sm rounded-circle'>
                    <img
                      alt='...'
                      src={
                        require('../../assets/img/theme/Unknown_person.jpg')
                          .default
                      }
                    />
                  </span>
                  <Media className='ml-2 d-none d-lg-block'>
                    <span className='mb-0 text-sm font-weight-bold'>
                      {user.firstname} {user.lastname}
                    </span>
                  </Media>
                </Media>
              </DropdownToggle>
              <DropdownMenu className='dropdown-menu-arrow' right>
                <DropdownItem className='noti-title' header tag='div'>
                  <h6 className='text-overflow m-0'>Welcome!</h6>
                </DropdownItem>
                <DropdownItem to='/dashboard/user-profile' tag={Link}>
                  <i className='ni ni-single-02' />
                  <a href='/dashboard/profile'>
                    {' '}
                    <span>My profile</span>{' '}
                  </a>
                </DropdownItem>
                <DropdownItem to='/dashboard/security' tag={Link}>
                  <i className='ni ni-settings-gear-65' />
                  <span>Security</span>
                </DropdownItem>
                <DropdownItem to='/dashboard/depositlist' tag={Link}>
                  <i className='ni ni-calendar-grid-58' />
                  <span>Activity</span>
                </DropdownItem>
                <DropdownItem to='/dashboard/support' tag={Link}>
                  <i className='ni ni-support-16' />
                  <span>Support</span>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href='/signin' onClick={onClick}>
                  <i className='ni ni-user-run' />
                  <span>Logout</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
  return (
    <>
      <ul>{user && user.isAdmin ? adminNav : userNav}</ul>
    </>
  );
};

export default AdminNavbar;
