import React, { useContext, useEffect, useRef } from 'react';
import { Card, Container, Row } from 'reactstrap';
import Header from 'components/Headers/Header.js';
import authContext from 'components/context/auth/authContext';

const Withdrawals = () => {
  const context = useContext(authContext);
  const { getWithdrawals, getUserWithdrawalList, user, loaduser } = context;
  const count = useRef(0);

  useEffect(() => {
    if (!user?._id) loaduser();
  });

  useEffect(() => {
    if (user.firstname && count.current === 0) {
      getWithdrawals(user._id);
    }
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Header />
      <Container className='mt--7' fluid>
        <Row>
          <div className='col-xs-12 col-xs-12 col-md-12 col-lg-12 center'>
            <Card className='shadow border-0 well '>
              <h2 className='text-center fw-bold mt-3 mb-5'>
                YOUR WITHDRAWAL REQUESTS
              </h2>
              {getUserWithdrawalList.length === 0 ? (
                <badge
                  className=' bg-success text-center mx-auto w-75 mb-5 mt-3'
                  style={{ height: '60px' }}
                >
                  <p className='mt-2'>YOU HAVE NOT MADE ANY WITHDRAWALS</p>
                </badge>
              ) : (
                <table
                  className='striped bordered hover responsive table-sm mb-5 text-center  '
                  variant='dark'
                >
                  <thead className='hover'>
                    <tr>
                      <th>Amount</th>
                      <th>Method</th>
                      <th>Plan</th>
                      <th>Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {getUserWithdrawalList.map((user) => (
                      <tr key={user.id}>
                        <td>{user.amount}</td>
                        <td>{user.method}</td>
                        <td>{user.plan}</td>
                        <td>{user.date}</td>
                        <td>{user.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Withdrawals;
