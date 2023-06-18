import React, { useContext, useEffect, useState } from 'react';
import authContext from 'components/context/auth/authContext';
import { Card, Container, Row } from 'reactstrap';
import Header from 'components/Headers/Header.js';
import { useRef } from 'react';
import AdminContent from 'layouts/AdminConent';

const AdminWithdrawalEdit = () => {
  const d = new Date();
  const date = d.toLocaleDateString();
  const context = useContext(authContext);
  const [save, setSave] = useState('');
  const {
    user,
    loaduser,
    admingetUserWithdrawalRequest,
    getWithdrawals,
    adminUserWithdrawalUpdate,
  } = context;
  const count = useRef(0);

  useEffect(() => {
    if (!user?._id) loaduser();
    //eslint-disable-next-line
  }, []);

  const initialState = {
    firstname: '',
    email: '',
    plan: '',
    method: '',
    amount: '',
    user: user._id,
    date,
    status: '',
  };

  useEffect(() => {
    if (user.firstname && count.current === 0) {
      getWithdrawals(user._id);
    }
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (
      admingetUserWithdrawalRequest.amount &&
      admingetUserWithdrawalRequest.plan
    ) {
      setEdited({ ...admingetUserWithdrawalRequest });
    }
  }, [admingetUserWithdrawalRequest]);

  const [edited, setEdited] = useState(initialState);

  const onChange = (e) => {
    e.preventDefault();
    setEdited({
      ...edited,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    adminUserWithdrawalUpdate(edited, user._id);
    setSave('Saved');
    setTimeout(function () {
      setSave();
    }, 5000);
  };

  return (
    <AdminContent brandText='Edit Withdrawal Request'>
      <Container className='mt--7' fluid>
        <Row>
          <div className='col-xs-12 col-md-12 col-lg-9 center'>
            <Card className='shadow border-0 well col-xs-12 col-md-12 col-lg-9 center '>
              <h2 className='text-center fw-bold mt-3'>
                {' '}
                UPDATE USER WITHDRAWAL DETAILS
              </h2>
              <form className='' onSubmit={onSubmit}>
                <div className='col-xs-12 col-md-12 col-lg-9 center  mb-3'>
                  <p className=' fw-bold mb-2'>Firstname</p>{' '}
                  <input
                    value={edited.firstname}
                    name='firstname'
                    onChange={onChange}
                    className='form-control'
                    type='text'
                  />
                </div>{' '}
                <br></br>
                <div className='col-xs-12 col-md-12 col-lg-9  center mb-3'>
                  <p className=' fw-bold mb-2'>Email</p>{' '}
                  <input
                    value={edited.email}
                    name='email'
                    onChange={onChange}
                    className='form-control'
                    type='text'
                  />
                </div>{' '}
                <br></br>
                <div className='col-xs-12 col-md-12 col-lg-9  center mb-3'>
                  <p className=' fw-bold mb-2'>Plan</p>{' '}
                  <input
                    name='plan'
                    value={edited.plan}
                    onChange={onChange}
                    className='form-control'
                    type='text'
                  />
                </div>{' '}
                <br></br>
                <div className='col-xs-12 col-md-12 col-lg-9  center mb-3'>
                  <p className=' fw-bold mb-2'>Payment Method</p>{' '}
                  <input
                    name='method'
                    value={edited.method}
                    onChange={onChange}
                    className='form-control'
                    type='text'
                  />
                </div>{' '}
                <br></br>
                <div className='col-xs-12 col-md-12 col-lg-9  center mb-3'>
                  <p className=' fw-bold mb-2'>Amount</p>{' '}
                  <input
                    className='form-control'
                    name='amount'
                    value={edited.amount}
                    onChange={onChange}
                    type='number'
                  />
                </div>{' '}
                <br></br>
                <div className='col-xs-12 col-md-12 col-lg-9  center mb-3'>
                  <p className=' fw-bold mb-2'>Status</p>{' '}
                  <input
                    className='form-control'
                    name='status'
                    defaultValue={edited.status}
                    onChange={onChange}
                    type='text'
                  />
                </div>{' '}
                <br></br>
                <div className='col-xs-12 col-md-12 col-lg-9 text-center'>
                  <small
                    className=' text-center'
                    style={{ color: 'green', fontWeight: 'bold' }}
                  >
                    {save}
                  </small>{' '}
                  <br></br>
                  <button
                    className='btn btn-default btn-md  mt-5 mb-5'
                    type='submit'
                  >
                    UPDATE
                  </button>
                </div>
              </form>
            </Card>
          </div>
        </Row>
      </Container>
    </AdminContent>
  );
};

export default AdminWithdrawalEdit;
