import React, {useContext} from "react";
import {Link} from "react-router-dom"
import authContext from "components/context/auth/authContext";
import { Card, Container, Row } from "reactstrap";
import Header from "components/Headers/Header.js";


const BitcoinPage = ({location}) => {
const context = useContext(authContext)
const {user} = context
const n = new Date()
const date = n.toLocaleDateString()


  return (
    <>
      <Header />
      
      <Container className="mt-5" fluid>
        <Row>
          <div className="col-xs-12 col-md-7 center">
            <Card className="shadow border-0 well mb-5">
           

            <div className="col-xs-12 col-md-12 center " >
              <h1 className="text-center text-lg mt-5">Hello {user.firstname} {user.lastname}</h1>
                <p className="fw-bold text-large mt-3"><span className="text-success fw-bold text-large">YOUR DEPOSIT HAS BEEN SAVED.</span> IT WILL BECOME ACTIVE WHEN THE ADMINISTRATOR CHECKS STATISTICS IN LESS THAN 10 MINUTES.</p>
            </div>
            <br></br>
            <div className="col-xs-12 col-md-6 col-lg-6">
                    <h3>First Name: {user.firstname}</h3> <br></br>
                    <h3>Email: {user.email}</h3> <br></br>
                    <h3>Amount Invested: {location.state.amount}</h3> <br></br>
                    <h3>Plan: {location.state.plann}</h3> <br></br>
                    <h3>Method: {location.state.method}</h3> <br></br>
                    <h3>Date: {date} </h3> <br></br>
            </div>
            <div className="text-center">
            <Link to="/dashboard/dashboard">    <button className="btn btn-md bg-success my-4 mt-5 " >BACK</button> </Link> </div>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default BitcoinPage;
