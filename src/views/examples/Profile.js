import React, {useEffect, useState, useContext} from "react"
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
import authContext from "components/context/auth/authContext";
import UserHeader from "components/Headers/UserHeader.js";
import { useHistory } from "react-router-dom";

const initialState = {firstname:"", lastname:"", email:"", bitcoin:"", about:"",
 bnb:"", usdt:"", ethereum:"" }

const Profile = () => {
  const [edited, setEdited] = useState(initialState)
  const [save, setSave] = useState("")
  const context = useContext(authContext)
  const {error, user, getUserDetails, clearError, message, loaduser} = context
  const {setAlert} = alert
  const history = useHistory()
 useEffect(()=>{
     if(user.firstname){
          setEdited({...user})
      
      }
      //eslint-disable-next-line
 },[user?.firstname])
 
 
  useEffect(()=>{
      if (!user?._id) loaduser();
      //eslint-disable-next-line
  },[])
  
  useEffect(()=>{
      if(error){
          setAlert(error, "alert", 3000)
          clearError()
      }
      if(message){
          setAlert(message, "alert", 3000)
          clearError()
      }
     
  }, [ setAlert, error, clearError, message, history])
  
  const submitHandler = (e)=>{
      e.preventDefault()
          getUserDetails(edited, user._id)
          setSave("Saved")
      setTimeout(function(){
        setSave()
      },5000)
  
  }
  const onChange = (e) =>{
      setEdited({...edited,
      [e.target.name]: e.target.value
      })
  }


  return (
    <>
      <UserHeader />
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
            <Card className="card-profile shadow">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={
                          require("../../assets/img/theme/Unknown_person.jpg")
                            .default
                            
                        }
                      />
                    </a>
                  </div>
                </Col>
              </Row>
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                <div className="d-flex justify-content-between">
                  <Button
                    className="mr-4"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Connect
                  </Button>
                  <Button
                    className="float-right"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Message
                  </Button>
                </div>
              </CardHeader>
              <CardBody className="pt-0 pt-md-4">
                <Row>
                  <div className="col">
                    <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                     
                    </div>
                  </div>
                </Row>
                <div className="text-center">
                  <h3 mt-5>
                    {user.firstname} {user.lastname}
                   
                  </h3>
                  
                 
                  
                  <hr className="my-4" />
                  
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    Show more
                  </a>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">My account</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                      href="/dashboard/security"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Settings
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form onSubmit={submitHandler}>
                  <h6 className="heading-small text-muted mb-4">
                    User information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            First Name
                          </label>
                          <Input
                            className="form-control-alternative"
                            value={edited.firstname}
                            id="input-username"
                            onChange={onChange}
                            type="text"
                            name="firstname"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Last Name
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-email"
                            onChange={onChange}
                            type="text"
                            value={edited.lastname}
                            name="lastname"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            Email Address
                          </label>
                          <Input
                            className="form-control-alternative"
                            onChange={onChange}
                            id="input-first-name"
                            value={edited.email}
                            type="email"
                            name="email"
                          />
                        </FormGroup>
                      </Col>
                      {/* <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Last name
                          </label>
                          <Input
                            className="form-control-alternative"
                            onChange={onChange}
                            id="input-last-name"
                            
                            type="text"
                          />
                        </FormGroup>
                      </Col> */}
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Address */}
                  <h6 className="heading-small text-muted mb-4">
                    Edit Your Wallets
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Bitcoin Address
                          </label>
                          <Input
                            className="form-control-alternative"
                            onChange={onChange}
                            id="input-address"
                            value={edited.bitcoin}
                            type="text"
                            name="bitcoin"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      
                    <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Ethereum Address
                          </label>
                          <Input
                            className="form-control-alternative"
                            onChange={onChange}
                            id="input-address"
                            value={edited.ethereum}
                            type="text"
                            name="ethereum"
                          />
                        </FormGroup>
                      </Col>
                      
                    </Row>
                    <Row>
                      
                      <Col md="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-address"
                            >
                              BNB Address
                            </label>
                            <Input
                              className="form-control-alternative"
                              onChange={onChange}
                              id="input-address"
                                value={edited.bnb}
                              type="text"
                              name="bnb"
                            />
                          </FormGroup>
                        </Col>
                        
                      </Row>
                      <Row>
                      
                      <Col md="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-address"
                            >
                             USDT Address
                            </label>
                            <Input
                              className="form-control-alternative"
                              onChange={onChange}
                              id="input-address"
                              value={edited.usdt}
                              type="text"
                              name="usdt"
                            />
                          </FormGroup>
                        </Col>
                        
                      </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Description */}
                  <h6 className="heading-small text-muted mb-4">About me</h6>
                  <div className="pl-lg-4">
                    <FormGroup>
                      <label>About Me (Optional*)</label>
                      <Input
                        className="form-control-alternative"
                        placeholder="A few words about you ..."
                        rows="4"
                        defaultValue=""
                        type="textarea"
                        onChange={onChange}
                        name="about"
                        value={edited.about}
                      />
                    </FormGroup>
                  </div>
                  <Row>
                    <Col md={6} lg={6} xs={12} className="text-center">
                      <small className="text-center" style={{color:"green", fontWeight:"bold"}}>{save}</small> <br></br>
                    <Button
                    
                    color="info"
                    type="submit"
                    size="md mb-5 mt-3"
                  >
                   Update Profile
                  </Button>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
