import authContext from "components/context/auth/authContext";
import Footer from "components/Footers/AdminFooter";
import { Helmet } from "react-helmet-async";
import Navbar from "layouts/Navbar";
import { useHistory } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
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
import Message from "layouts/Message";
import Loader from "layouts/Loader";
import { Link } from "react-router-dom";

  
  const Signin = () => {
    const [data, setData] = useState({email:"", password:""})
    const context = useContext(authContext)
    const {login, isAuthenticated, error,message, loading} = context
    const history = useHistory()

    const onChange = (e) =>{
      e.preventDefault()
      setData({
        ...data,
        [e.target.name]: e.target.value
      })
      
    }
    useEffect(()=>{

      if(isAuthenticated){
        history.push("/dashboard")
      }
  
 
},[ isAuthenticated, history])

    const onSubmit = (e) =>{
        e.preventDefault()
        login(data)
        setData({
          email: "", password: ""
      })
    }
    return (
      <>
      <Navbar/>
        <Col lg="6" md="7" className="center">
          <Card className="bg-secondary shadow border-0 mt-4">
          <Helmet><title>Login | Sign In</title></Helmet>
          <div className="mt-3">

        { message && <Message variant="danger">{message}</Message>}
      { error && <Message variant="danger">{error}</Message>}
        {loading && <Loader/>}
          </div>
  <br></br>
            <CardHeader className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-3">
                <small>Sign in with</small>
              </div>
              <div className="btn-wrapper text-center">
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
                <small>Or sign in with credentials</small>
              </div>
              <Form role="form" onSubmit={onSubmit}>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      type="email"
                      autoComplete="new-email"
                      required
                      name="email"
                      
                      onChange={onChange}
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
                      placeholder="Password"
                      type="password"
                      autoComplete="new-password"
                      required
                      
                      name="password"
                      onChange={onChange}
                      minLength={8}
                    />
                  </InputGroup>
                </FormGroup>
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                  
                    
                  />
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span className="text-muted">Remember me</span>
                  </label>
                </div>
                <div className="text-center">
                  <Button  className="my-4" color="primary" type="submit">
                    Sign in
                  </Button>
                </div>

                <Col xs="6">
              <Link
                className="text-light"
                to="/forgotpassword"
               
              >
                <small>Forgot password?</small>
              </Link>
            </Col>
            <Col className="text-right" xs="6">
              <Link
                className="text-light"
                to="/register"
               
              >
                <small>Create new account</small>
              </Link>
            </Col>
              </Form>
            </CardBody>
          </Card>
          <Row className="mt-3">
           
          </Row>
          <Footer/>
        </Col>
      </>
    );
  };
  
  export default Signin;
  