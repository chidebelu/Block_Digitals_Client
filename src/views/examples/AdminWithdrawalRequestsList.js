import React, { useEffect, useContext } from 'react';
import { Table, Button } from 'react-bootstrap';
import Loader from '../../layouts/Loader';
import authContext from '../../components/context/auth/authContext';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Message from 'layouts/Message';
import Header from 'components/Headers/Header.js';
import { Jumbotron } from 'reactstrap';

const AdminWithdrawalRequests = () => {
  const context = useContext(authContext);
  const {
    loading,
    error,
    adminGetAllWithdrawalsLists,
    deleteUserWithdrawalRequest,
    adminGetAllWithdrawalsList,
  } = context;

  useEffect(() => {
    adminGetAllWithdrawalsList();
    //eslint-disable-next-line
  }, []);

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure?')) {
      deleteUserWithdrawalRequest(id);
    }
  };

  return (
    <div className='bg-white min-vh-100'>
      <Helmet>
        <title>List All Users</title>
      </Helmet>
      <Jumbotron className='container-fluid bg-gradient-info' />
    
      <br></br>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <Table
          striped
          bordered
          hover
          responsive
          className='table-sm'
          variant='dark'
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>FIRST NAME</th>
              <th>EMAIL</th>
              <th>AMOUNT</th>
              <th>METHOD</th>
              <th>PLAN</th>
              <th>DATE</th>
              <th>EDIT/DELETE</th>
            </tr>
          </thead>
          <tbody>
            {adminGetAllWithdrawalsLists.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.firstname}</td>
                <td>{user.email}</td>
                <td>{user.amount}</td>
                <td>{user.method}</td>
                <td>{user.plan}</td>
                <td>{user.date}</td>
                <td>
                  <Link
                    to={`/dashboard/admin/user/${user._id}/edit/withdrawaldetails`}
                  >
                    <Button variant='' className='btn-sm bg-success mx-3'>
                      <i className='fas fa-edit'></i>
                    </Button>
                  </Link>
                  <Button
                    variant='danger'
                    className='btn-sm bg-danger'
                    onClick={() => deleteHandler(user._id)}
                  >
                    <i className='fas fa-trash'></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default AdminWithdrawalRequests;
