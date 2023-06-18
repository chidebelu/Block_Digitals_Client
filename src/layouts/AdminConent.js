import React from 'react';
import { useLocation} from 'react-router-dom';
import { Container, Jumbotron } from 'reactstrap';
import AdminNavbar from 'components/Navbars/AdminNavbar.js';
import AdminFooter from 'components/Footers/AdminFooter.js';
import Sidebar from 'components/Sidebar/Sidebar.js';
import routes from 'routes.js';

const AdminContent = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const adminRoute = routes.filter(
    (route) => route.type === 'admin' || route.type === 'both'
  );

  return (
    <>
      <Sidebar
        {...props}
        routes={adminRoute}
        logo={{
          innerLink: '/dashboard/dashboard',
          imgSrc: require('../assets/img/brand/argon-react.png').default,
          imgAlt: '...',
        }}
      />
      <div className='main-content' ref={mainContent}>
        <AdminNavbar
          {...props}
          brandText={props.brandText}
        />
        <div className='bg-white min-vh-100'>
          <Jumbotron className='container-fluid bg-gradient-info' />
          {props.children}
        </div>
        <Container fluid>
          <AdminFooter />
        </Container>
      </div>
    </>
  );
};

export default AdminContent;
