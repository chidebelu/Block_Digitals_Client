import React from "react";

// reactstrap components
import { Card, Container, Row } from "reactstrap";

// core components
import Header from "components/Headers/Header.js";



const Referrer = () => {
  const array = [
    {
      refferalBonus: 200,
      paymentMethod: "Bitcoin",
      Plan: "Gold",
      date: "18th March",
      Status: "Confirmed",
    },
    {
      refferalBonus: 80,
      paymentMethod: "Ethereum",
      Plan: "Beginner",
      date: "18th May",
      Status: "Pending",
    }, 
  ]
  return (
    <>
       <Header />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col-xs-12 ">
            <Card className="shadow border-0 well">
              <h2 className="text-center fw-bold mb-5">YOUR REFFERRALS</h2>
              {
                array.length===0 
                ? (<badge className=" bg-success text-center mx-auto w-75 mt-3" style={{height:"30px"}}><p className="mt-2">YOU HAVE NOT MADE ANY DEPOSIT</p></badge>)
                : (
                  <table className="striped bordered hover responsive table-sm " variant="dark">
                     <thead className="fw.bold hover">
                      <tr>
                      <th>BONUS</th>
                        <th>METHOD</th>
                        <th>PLAN</th>
                        <th>DATE</th>
                        <th>STATUS</th>
                      </tr>
                      </thead>
                      <tbody>
                        {
                          array.map(user =>(
                                <tr key={user.id}>
                          <td>{user.refferalBonus}</td>
                          <td>{user.paymentMethod}</td>
                          <td>{user.Plan}</td>
                          <td>{user.date}</td>
                          <td>{user.Status}</td>
                      
                                </tr>
                          ))
                        
                      }
                      </tbody>
                  </table>)
              }
        
                  
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Referrer;
