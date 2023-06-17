import authContext from "../../components/context/auth/authContext"
import React, { useEffect, useRef } from "react";
import { useContext } from "react";
import { Card, Container, Row } from "reactstrap";
import Header from "components/Headers/Header.js";
import {Button} from "react-bootstrap"



const DepositList = () => {
 const context = useContext(authContext)
 const {userInvest, getInvest, user, loaduser, deleteInvestment, allusers} = context
  const count = useRef(0)
 useEffect(()=>{
  loaduser()
},[loaduser])



    useEffect(()=>{
        if(user?.firstname && count.current ===0){
          getInvest(user._id)
          count.current++
        }

    },[user?.firstname, getInvest, user._id])

   
      const deleteHandler = (id) =>{
        console.log(id)
        if(window.confirm("Are you sure?")){
          deleteInvestment(id)
      }  
          
      }
 


  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col-xs-12 col-md-12 col-lg-12 ">
            <Card className="shadow border-0 well ">
              <h2 className="text-center fw-bold mt-3 mb-5">YOUR DEPOSITS</h2>
              {
                userInvest.length===0 
                ? (<badge className=" bg-success text-center mb-5 mx-auto w-75 mt-3" style={{height:"60px"}}><p className="mt-2">YOU HAVE NOT MADE ANY DEPOSIT</p></badge>)
                : (
                  <table className="striped bordered hover responsive table-sm mb-5" variant="dark">
                     <thead className="fw-bold hover">
                     <tr>
                        <th>Amount</th>
                        <th>Method</th>
                        <th>Plan</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Delete</th>
                      </tr>
                      </thead>
                      <tbody className="col-xs-12 col-md-12 col-lg-12 ">
                        {
                          userInvest.map(user =>(
                                <tr key={user.id}>
                          <td>{user.amount}</td>
                          <td>{user.method ==="bitcoin" &&("Bitcoin") }
                              {user.method ==="ethereum" &&("Ethereum") }
                              {user.method ==="usdt" &&("USDT") }
                              {user.method ==="bnb" &&("BNB") }
                              </td>
                          <td>{user.plann}</td>
                          <td>{user.date}</td>
                          <td>{user.status}</td>
                            <td>  <Button variant='danger' className="btn-sm bg-danger" onClick={()=>deleteHandler(user.user)}><i className="fas fa-trash"></i></Button></td>
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

export default DepositList;
