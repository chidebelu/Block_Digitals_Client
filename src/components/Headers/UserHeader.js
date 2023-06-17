import { Container, Row, Col } from 'reactstrap';
import authContext from 'components/context/auth/authContext';
import { useContext, useEffect } from 'react';

const UserHeader = () => {
  const context = useContext(authContext);
  const { user, loaduser } = context;
  useEffect(() => {
    if (!user?._id) loaduser();
  });

  return (
    <>
      <div
        className='header pb-8 pt-5 pt-lg-8 d-flex align-items-center'
        style={{
          minHeight: '300px',
          backgroundImage:
            'url(' +
            require('../../assets/img/theme/profile-cover.jpg').default +
            ')',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        <span className='mask bg-gradient-default opacity-8' />

        <Container className='d-flex align-items-center' fluid>
          <Row>
            <Col lg='7' md='10'>
              <h1 className='display-2 text-white'>Hello {user.firstname}</h1>
              <p className='text-white mt-0 mb-5'>
                This is your profile page. You can edit/change your profile
                details anytime if need be.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default UserHeader;
