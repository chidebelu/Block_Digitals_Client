import Navbar from "layouts/Navbar";
import Footer from "components/Footers/AdminFooter";
import { Helmet } from 'react-helmet-async'
import "./Home.css"

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
import { useContext, useEffect, useState } from "react";
import authContext from "components/context/auth/authContext";
import { useHistory } from "react-router-dom";
import Message from "layouts/Message";
import Loader from "layouts/Loader";

const Register = () => {

  const context = useContext(authContext)
  const {registerUser, isAuthenticated, error, message, loading} = context

  const [data, setData] = useState({firstname:"", lastname:"", email:"", bitcoin:"", 
  ethereum:"", usdt:'', bnb:"", referralCode:"", password:"", confrimpassword:""})

  const { password, confirmpassword} = data

  const history = useHistory()

  useEffect(()=>{
    
    if(isAuthenticated){
          history.push("/dashboard")
        }

  },[error, message,isAuthenticated, history])

  const onSubmit = (e) =>{
    e.preventDefault()
    if(password !== confirmpassword){
        return
    }
    else{
        registerUser(data)
    setData({
      firstname: "", lastname: "", email:"", password:"", confirmpassword:"", 
      bitcoin:"", referralCode: "", bnb:"", usdt:"", ethereum:""
    })
    }
    
  }
  

  const onChange = (e) =>{
      e.preventDefault()
      setData({
        ...data,
        [e.target.name]: e.target.value
      })
  }

  return (
    <>
    <Navbar/>
      <Col lg="6" md="8" className="mx-auto text-center">
        <Card className="bg-secondary shadow border-0 mt-4 ">
        <Helmet><title>Sign Up | Register</title></Helmet>
        { message && <Message variant="danger">{message}</Message>}
      { error && <Message variant="danger">{error}</Message>}
        {loading && <Loader/>}
  <br></br>
          <CardHeader className="bg-transparent pb-5">
            <div className="text-muted text-center mt-2 mb-4">
        
              <small>Sign up with</small>
            </div>
            <div className="text-center">
              <Button
                className="btn-neutral btn-icon mr-4"
                color="default"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={
                      require("../../assets/img/icons/common/github.svg")
                        .default
                    }
                  />
                </span>
                <span className="btn-inner--text">Github</span>
              </Button>
              <Button
                className="btn-neutral btn-icon"
                color="default"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={
                      require("../../assets/img/icons/common/google.svg")
                        .default
                    }
                  />
                </span>
                <span className="btn-inner--text">Google</span>
              </Button>
            </div>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Or sign up with credentials</small>
            </div>
            <Form role="form" onSubmit={onSubmit}>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="First Name" type="text" required name="firstname" onChange={onChange} />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fa fa-user-circle" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Last Name" type="text" required name="lastname" onChange={onChange} />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                    required name="email" onChange={onChange}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fab fa-bitcoin" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Bitcoin Wallet Address" type="text" required name="bitcoin" onChange={onChange}/>
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fab fa-ethereum" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Ethereum Wallet Address" type="text" required name="ethereum" onChange={onChange}/>
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fas fa-coins" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="BNB Wallet Address" type="text" required name="bnb" onChange={onChange} />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fas fa-donate" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="USDT Wallet Address" type="text"required name="usdt" onChange={onChange}/>
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fa fa-user-plus" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Refferal Code (Optional*)" type="text" name="referralCode" onChange={onChange} />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                    required name="password" onChange={onChange}
                    minLength={8}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Confirm Password"
                    type="password"
                    autoComplete="new-password"
                    required name="confirmpassword" onChange={onChange}
                    minLength={8}
                  />
                </InputGroup>
              </FormGroup>
              <div className="text-muted font-italic">
                <small>
                  password strength:{" "}
                  <span className="text-success font-weight-700">strong</span>
                </small>
              </div>
              <Row className="my-4">
                <Col xs="12">
                  <div className="custom-control custom-control-alternative custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="customCheckRegister"
                      type="checkbox"
                      required
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheckRegister"
                    >
                      <span className="text-muted">
                        I agree with the{" "}
                        <a href="/termsandcondition" onClick={(e) => e.preventDefault()}>
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div>
                </Col>
              </Row>
              <div className="text-center">
                <Button className="mt-4" color="primary" type="submit">
                  Create account
                </Button>
              </div>
            </Form>
    
          </CardBody>
        </Card>
        <div className="footerwidth">

      <Footer/>
        </div>
      </Col>

        
    </>
  );
};

export default Register;
