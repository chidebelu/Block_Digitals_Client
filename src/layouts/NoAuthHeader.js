import React, {Fragment} from "react"
import {Navbar, Container, Nav} from "react-bootstrap"
import {Link, NavLink} from "react-router-dom"


const Header = () =>{

    return(
        <Fragment>
            <Navbar expand="lg" style={{background:"#000080"}}>
  <Container>
  
  <Link to="/"><Navbar.Brand style={{color: "white"}}>React-Bootstrap</Navbar.Brand> </Link>
     
    
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto" >
           
        <Nav.Link as = {NavLink} to="/" style={{color: "white"}}>Home</Nav.Link>
          
        <Nav.Link as = {NavLink} to="/about" style={{color: "white"}}>About</Nav.Link>
          
            
        <Nav.Link as = {NavLink} to="/paidout" style={{color: "white"}}>Withdrawals</Nav.Link>
          
            
        <Nav.Link as = {NavLink} to="/faq" style={{color: "white"}}>FAQ</Nav.Link>
          
            
        <Nav.Link as = {NavLink} to="/contactus" style={{color: "white"}}>Contact Us</Nav.Link>
          
        <Nav.Link as = {NavLink} to="/register" style={{color: "white", border: "1px solid #fff", borderRadius: "15px", backgroundColor: "blue"}}><i className="fa fa-user-plus" ></i> <strong>Register</strong> </Nav.Link>
          
           
        <Nav.Link as = {NavLink} to="/login" style={{color: "white"}}><i className="fas fa-sign-in-alt"></i> Sign in</Nav.Link>
          
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </Fragment>
    )
}

export default Header