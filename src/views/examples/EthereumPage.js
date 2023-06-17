import React, {useContext, useState} from "react";
import {Link, useHistory} from "react-router-dom"
import authContext from "components/context/auth/authContext";
import { Card, Container, Row } from "reactstrap";
import Header from "components/Headers/Header.js";
import ClipboardJS  from 'clipboard'



const EthereumPage = () => {
const context = useContext(authContext)
const {plan, invest, user} = context
const {plann} = plan
const history = useHistory()
const [amount, setAmount] = useState("")
const [message, setMessage] = useState("")
new ClipboardJS('#copy')




const d = new Date()
const date = d.toLocaleDateString()

const method = localStorage.getItem("Ethereum")


const onSubmit = (e)=>{
  e.preventDefault()
  if(plan.plann === "Beginner"){
    if(amount){
      const am = Number(amount)
      if(am && am >=100 && am <=999){
        
        invest({amount, plann, date, method }, user._id)
        history.push({pathname:"/dashboard/paidpage", state:{amount, plann, method}})
      }
      
    }
    else{
    setMessage()
  }

}

if(plan.plann === "Standard"){
  if(amount){
    const am = Number(amount)
    if(am && am >=1000 && am <=4999){
      invest({amount, plann, date, method, user:user._id },user._id)
      history.push({pathname:"/dashboard/paidpage", state:{amount, plann, method}})
    }
    
  }
  else{
  
  setMessage()
}

}

if(plan.plann === "Premium"){
  if(amount){
    const am = Number(amount)
    if(am && am >=5000 && am <=9999){
      invest({amount, plann, date, method, user:user._id },user._id)
      history.push({pathname:"/dashboard/paidpage", state:{amount, plann, method}})
    }
    
  }
  else{
  setMessage()
}

}

if(plan.plann === "Bronze"){
  if(amount){
    const am = Number(amount)
    if(am && am >=10000 && am <=24999){
      invest({amount, plann, date, method, user:user._id },user._id)
      history.push({pathname:"/dashboard/paidpage", state:{amount, plann, method}})
    }
    
  }
  else{
  setMessage()
}

}

if(plan.plann === "Silver"){
  if(amount){
    const am = Number(amount)
    if(am && am >=25000 && am <=49999){
      invest({amount, plann, date, method, user:user._id },user._id)
      history.push({pathname:"/dashboard/paidpage", state:{amount, plann, method}})
    }
    
  }
  else{
  setMessage()
}

}

if(plan.plann === "Gold"){
  if(amount){
    const am = Number(amount)
    if(am && am >=50000){
      invest({amount, plann, date, method, user:user._id }, user._id)
      history.push({pathname:"/dashboard/paidpage", state:{amount, plann, date, method}})
    }
    
  }
  else{
  setMessage()
}

}
}

const onChange = (e) =>{
  e.preventDefault()
  setAmount(
    e.target.value
)
}

  return (
    <>
      <Header />
    
      <Container className="mt-5" fluid>
        <Row>
          <div className="col-xs-12 col-md-11 col-lg-6 center">
            <Card className="shadow border-0 well mb-5">
            <div className="col-xs-12 col-md-6 center">
              {/* <Message className="text-center">{message}</Message> */}
                <h4 className="fw-bold text-center mt-5 text-large" style={{color:"#000080"}}>{plann} Plan</h4>
                <p className="dis mb-3 mt-3 fw-bold text-center">PLEASE CONFIRM YOUR DEPOSIT</p>
            </div>

            <div className="col-xs-12 col-md-9 center " >
                <p className="fw-bold">KINDLY COPY THE COMPANY WALLET ADDRESS BELOW AND MAKE DEPOSIT TO IT</p>
                <input type="text"  id="myInput" className='form-control mt-4' value= "0x249cbe2fed52ac72e65f19aab99516baad4f23f3" readOnly />
                <button id='copy'data-clipboard-target="#myInput" className="btn btn-sm mt-3  bg-success ml-auto"><i className="fa fa-copy"></i> Copy Wallet Address (Ethereum) </button> 
            </div>
            <br></br>
            <form action="" onSubmit={onSubmit}>
                <div className="col-xs-12 col-md-9 center  mb-3">
                    <p className="fw-bold mb-2 mt-3">Firstname</p> <input className="form-control" type="text" value={user.firstname}/>
                </div> <br></br> 
                <div className="col-xs-12 col-md-9 center mb-3">
                    <p className=" fw-bold mb-2">Email address</p> <input  className="form-control" type="email" value={user.email}/>
                </div> <br></br>
                <div className="col-xs-12 col-md-9 center mb-3">

                    <div className="col-xs-12 col-md-9 ">
                        <p className=" fw-bold mb-3">Choose Payment From</p> <select className="form-select" aria-label="Default select example">
                            <option defaultValue hidden>Wallet</option>
                            <option value="1">Bitcoin</option>
                            <option value="2">Ethereum</option>
                            <option value="3">USDT (TRC20)</option>
                            <option value="4">BNB</option>
                        </select>
                        </div>
                            <div className="col-xs-12 col-md-9 ">
                <p className="fw-bold mb-3 mt-3" >Profit: {plan.profit} </p>
                <p className=" fw-bold mb-3 mt-3"  >Principal Return: Yes</p>
                <p className=" fw-bold mb-3 mt-3">Minimum Deposit: <span style={{color:"green"}}> {plan.minDeposit}</span></p>
                <p className=" fw-bold mb-3 mt-3" >Maximum Deposit: <span style={{color:"green"}}> {plan.maxDeposit}</span></p>
            </div>
                       
                        <div className=" my-3 col-xs-12 col-md-9 ">
                            <p className="fw-bold mb-2">Amount</p>
                            <div className="inputWithcheck"> <input required value={amount} onChange={onChange} className="form-control" name="amount" placeholder="Amount"type="number" />  </div>
                        </div>
                        <div className="d-flex flex-column col-xs-12 col-md-7">
                          
                            
                     <button className="btn btn-primary mt-2"  type="submit"><span className="fas fa-dollar-sign px-1"></span>Pay</button>
                        </div>
                </div>
            </form>
            <div className="text-center">
            <Link to="/dashboard/choosepayment">    <button className="btn btn-md bg-success my-7 " >BACK</button> </Link> </div>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default EthereumPage;
