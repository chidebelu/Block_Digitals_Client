import React, { useContext, useEffect, useState } from "react";
import authContext from "components/context/auth/authContext";
import { Card, Container, Row } from "reactstrap";
import Header from "components/Headers/Header.js";

const Withdrawals = () => {
 const d = new Date()
 const date = d.toLocaleDateString()
 const context = useContext(authContext)
 const [save, setSave] = useState("")
  const {postWithdrawalRequest, user, loaduser} = context
  useEffect(()=>{
    loaduser()
  },[loaduser])

  const initialState = {
  firstname: "",
  email:"",
  plan:"",
  method:"",
  amount: "",
  user: user._id,
  date
  }
  const [edited, setEdited] = useState(initialState)
  
  
 
  const onChange = (e) =>{
    e.preventDefault()
    setEdited({
      ...edited,
        [e.target.name]: e.target.value 
    })
  }

  const onSubmit = (e) =>{
    e.preventDefault()
    postWithdrawalRequest(edited)
      setSave("Saved")
      setTimeout(function(){
        setSave()
      },5000)
  }

  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col-xs-12 col-md-12 col-lg-9 center">
            <Card className="shadow border-0 well col-xs-12 col-md-12 col-lg-9 center ">
              <h2 className="text-center fw-bold mt-3"> WITHDRAW</h2>
                  <form className="" onSubmit={onSubmit} >
                  <div className="col-xs-12 col-md-12 col-lg-9 center  mb-3">
                    <p className=" fw-bold mb-2">Firstname</p>  <input required name="firstname" onChange={onChange} className="form-control" type="text" placeholder="First Name"/>
                </div> <br></br>
                <div className="col-xs-12 col-md-12 col-lg-9  center mb-3">
                    <p className=" fw-bold mb-2">Email</p> <input required name="email" onChange={onChange} className="form-control" type="text" placeholder="email"/>
                </div> <br></br>
                <div className="col-xs-12 col-md-12 col-lg-9  center mb-3">
                    <p className=" fw-bold mb-2">Plan</p> <input required name="plan" onChange={onChange} className="form-control" type="text" placeholder="Beginner, Standard, Premium, Gold"/>
                </div> <br></br>
                <div className="col-xs-12 col-md-12 col-lg-9  center mb-3">
                    <p className=" fw-bold mb-2">Payment Method</p> <input required name="method" onChange={onChange} className="form-control" type="text" placeholder="Bitcoin, Ethereum, Usdt, Bnb"/>
                </div> <br></br>
                <div className="col-xs-12 col-md-12 col-lg-9  center mb-3">
                    <p className=" fw-bold mb-2">Amount</p> <input required className="form-control" name="amount" onChange={onChange} type="number" placeholder="Amount"/>
                </div> <br></br>
                <div className="col-xs-12 col-md-12 col-lg-9 text-center">
                      <small className=" text-center" style={{color:"green", fontWeight:"bold"}}>{save}</small> <br></br>
                    <button className="btn btn-default btn-md  mt-5 mb-5" type="submit">WITHDRAW</button>
                </div>
                  </form>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};
 
export default Withdrawals;
