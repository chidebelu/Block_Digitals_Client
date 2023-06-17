/*eslint-disable*/
import "./Footer.css";

import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Row className="align-items-center justify-content-xl-between">
        <Col xl="6" md="6" lg="6">
          <div className="copyright text-center text-xl-left text-muted">
            © {new Date().getFullYear()}{" "}
            <a
              className="font-weight-bold ml-1"
              href=""
              rel="noopener noreferrer"
            >
              Block Digitals
            </a>
          </div>
        </Col>

        <Col xl="6">
          <Nav className="nav-footer justify-content-center justify-content-xl-end">
            <NavItem className="navlink">
              <NavLink href="/" rel="noopener noreferrer">
                Home
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/aboutus" rel="noopener noreferrer">
                About Us
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/faq" rel="noopener noreferrer">
                FAQ
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/support" rel="noopener noreferrer">
                Support
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
      </Row>

      <div className="row">
        <div className="socialConnect col-xs-12 col-md-12 col-lg-12 col-sm-12 center">
          <span className="textColor font-12">Follow us on: </span>
          <a className="socialLink" href="#">
            <img src="/social-icons/download.jpg" alt="" />
          </a>
          <a className="socialLink" href="#">
            <img src="/social-icons/instagram.png" alt="" />
          </a>
          <a className="socialLink" href="#">
            <img src="/social-icons/youtube.png" alt="" />
          </a>
          <a className="socialLink" href="#">
            <img src="/social-icons/linkedin.png" alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
