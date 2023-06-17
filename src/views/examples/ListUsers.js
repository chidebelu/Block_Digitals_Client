import React, { useEffect, useContext, useState } from "react";
import { Table, Button } from "react-bootstrap";
import Loader from "../../layouts/Loader";
import authContext from "../../components/context/auth/authContext";
import { Link } from "react-router-dom";
import Navbar from "layouts/Navbar";
import { Helmet } from "react-helmet-async";
import Message from "layouts/Message";
import { Jumbotron } from 'reactstrap';

const UserList = () => {
  const context = useContext(authContext);
  const { listUsers, loading, error, allusers, deleteUser } = context;
  const [search, setSearch] = useState("");
  console.log(allusers);
  useEffect(() => {
    listUsers();
    //eslint-disable-next-line
  }, []);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      deleteUser(id);
    }
  };

  const onChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <div div className='bg-white min-vh-100'>
      <Helmet>
        <title>List All Users</title>
      </Helmet>
      <Jumbotron className='container-fluid bg-gradient-info' />
      <div className='col-xs-12 col-md-12 col-lg-12'>
        <div className='row'>
          <div className=" col-lg-6'">
            <input
              onChange={onChange}
              type='text'
              name='search'
              placeholder='Search'
              className='form-control mb-3'
              style={{ width: '250%' }}
            />
          </div>
        </div>{' '}
      </div>
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
              <th>ADMIN</th>
              <th>EDIT OR DELETE</th>
            </tr>
          </thead>

          <tbody>
            {allusers
              // .filter(
              //   (x) => x.firstname.includes(search) || x.email.includes(search)
              // )
              .map((user) => (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.firstname}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.isAdmin ? (
                      <i
                        className='fas fa-check'
                        style={{ color: 'green' }}
                      ></i>
                    ) : (
                      <i className='fas fa-times' style={{ color: 'red' }}></i>
                    )}
                  </td>
                  <td>
                    <Link to={`/dashboard/admin/user/${user._id}/edit`}>
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

export default UserList;
