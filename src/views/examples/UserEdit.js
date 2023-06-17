import React, {useContext, useEffect, useState} from "react";
import { Card, Container, Row } from "reactstrap";
import Header from "components/Headers/Header.js";
import authContext from "components/context/auth/authContext";

const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    bitcoin:"",
    ethereum:"",
    usdt:"",
    bnb:"",
    accountBalance: "",
    referralbonus: "",
    totalwithdrew: "",
    totaldeposit: "",
    // isAdmin: false
  
  }

const UserEdit = ({match}) => {
    
    const userId = match.params.id
const context = useContext(authContext)
const { adminUserUpdate, updateUser, userEdit, loaduser} = context
const [edited, setEdited] = useState(initialState)
const [save, setSave] = useState("")



 
useEffect(()=>{
    if(!userEdit.firstname || userEdit._id !== userId){
        updateUser(userId)
    }
       else{
            setEdited({...userEdit})
        
        }
        //eslint-disable-next-line
   },[userEdit.firstname, userId, userEdit])

    useEffect(()=>{
        loaduser()
        //eslint-disable-next-line
    },[])
    console.log(userEdit)
  const onChange = (e)=>{
    e.preventDefault()
    setEdited({...edited,
      [e.target.name]: e.target.value
    })
  }
  const submitHandler = (e)=>{
    e.preventDefault()
   adminUserUpdate(edited, userEdit._id)
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
          <div className="col-xs-12 col-lg-10 col-md-12 ">
            <Card className="shadow border-0 well">
              <h2 className="text-center fw-bold mt-3"> EDIT USER DETAILS</h2>
                  <form className="" onSubmit={submitHandler}>
                  <div className="col-xs-12 col-md-7 center mb-3">
                    <p className=" fw-bold mb-2">First Name</p> <input name="firstname" value={edited.firstname} onChange={onChange} className="form-control" type="text" />
                </div> <br></br>
                  <div className="col-xs-12 col-md-7 center mb-3">
                    <p className=" fw-bold mb-2">Last Name</p> <input name="lastname" value={edited.lastname} onChange={onChange} className="form-control" type="text" />
                </div> <br></br>
                <div className="col-xs-12 col-md-7 center mb-3">
                    <p className=" fw-bold mb-2">Email</p> <input name="email" value={edited.email} onChange={onChange} className="form-control" type="email" />
                </div> <br></br>
                <div className="col-xs-12 col-md-7 center mb-3">
                    <p className=" fw-bold mb-2">Bitcoin Address</p> <input name="bitcoin" value={edited.bitcoin} onChange={onChange} className="form-control" type="text" />
                </div> <br></br>
                <div className="col-xs-12 col-md-7 center mb-3">
                    <p className=" fw-bold mb-2">Ethereum Address</p> <input name="ethereum" value={edited.ethereum} onChange={onChange} className="form-control" type="text" />
                </div> <br></br>
                <div className="col-xs-12 col-md-7 center mb-3">
                    <p className=" fw-bold mb-2">Bnb Address</p> <input name="bnb" value={edited.bnb} onChange={onChange} className="form-control" type="text" />
                </div> <br></br>
                <div className="col-xs-12 col-md-7 center mb-3">
                    <p className=" fw-bold mb-2">Usdt Address</p> <input name="usdt" value={edited.usdt} onChange={onChange} className="form-control" type="text" />
                </div> <br></br>
                <div className="col-xs-12 col-md-7 center mb-3">
                    <p className=" fw-bold mb-2">Account Balance</p> <input value={edited.accountBalance} name="accountBalance" onChange={onChange} className="form-control" type="number"/>
                </div> <br></br>
                <div className="col-xs-12 col-md-7 center mb-3">
                    <p className=" fw-bold mb-2">Total Deposit</p> <input value={edited.totaldeposit} name="totaldeposit" onChange={onChange} className="form-control" type="number"/>
                </div> <br></br>
                <div className="col-xs-12 col-md-7 center mb-3">
                    <p className=" fw-bold mb-2">Total Withdrew</p> <input value={edited.totalwithdrew} name="totalwithdrew" onChange={onChange} className="form-control" type="number"/>
                </div> <br></br>
                <div className="col-xs-12 col-md-7 center mb-3">
                    <p className=" fw-bold mb-2">Referral Bonus</p> <input value={edited.referralbonus} name="referralbonus" onChange={onChange} className="form-control" type="number"/>
                </div> <br></br>


                
                <div className="col-xs-12 col-md-12 col-lg-12 text-center">
                <small className=" text-center" style={{color:"green", fontWeight:"bold"}}>{save}</small> <br></br>
                    <button className="btn btn-default btn-md  mt-5 mb-3" type="submit">UPDATE</button>
                </div>
                  </form>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};
 
export default UserEdit;
