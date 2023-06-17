import {useState} from "react"
import axios from "axios"
import Footer from "components/Footers/AdminFooter";
import Navbar from "layouts/Navbar";
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
  
  const Signin = () => {
    const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const forgotPasswordHandler = async (e) => {
    e.preventDefault();
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/users/forgotpassword",
        { email },
        config
      );

      setSuccess(data.data);
      setEmail("")
    } catch (error) {
      setError(error.response.data.error);
      setEmail("");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  }
    return (
      <>
      <Navbar/>
        <Col lg="6" md="7" xs="12" className="center" >
          <Card className="bg-secondary shadow border-0 mt-5">
            <CardHeader className="bg-transparent pb-5">
            {error && <span className="error-message">{error}</span>}
        {success && <span className="success-message">{success}</span>}
              <div className="text-muted text-center mt-2 mb-3">
                <small>Forgot Password</small>
              </div>
              <div className="btn-wrapper text-center">
                <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="#pablo"
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
                  href="#pablo"
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
                <small>Enter the Email you used to register on Proinvest and a password reset link will be sent to the email</small>
              </div>
              <Form role="form" onSubmit={forgotPasswordHandler}>
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
                      value={email} required onChange={(e)=> setEmail(e.target.value)}
                      autoComplete="new-email"
                    />
                  </InputGroup>
                </FormGroup>
               
               
                <div className="text-center">
                  <Button className="my-4" color="primary" type="submit">
                    Send Reset Link
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
          <Row className="mt-3">
            
            <Col className="text-right" xs="6">
              <a
                className="text-light"
                href="/register"
                onClick={(e) => e.preventDefault()}
              >
                <small>Create new account</small>
              </a>
            </Col>
          </Row>
          <Footer/>
        </Col>
      </>
    );
  };
  
  export default Signin;
  