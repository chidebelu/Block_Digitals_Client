import React, { Fragment } from "react";
import Navbar from "../../layouts/Navbar";
import { Card, CardHeader, CardBody, Container, Row } from "reactstrap";
import Footer from "components/Footers/AdminFooter";
import TradingViewWidget, { Themes } from "react-tradingview-widget";
import "./Home.css";
import { Link } from "react-router-dom";

const Test = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-lg-12 col-xs-12 col-md-12 col-sm-12 mt--3"
            style={{ background: "#000080" }}
          >
            <h1
              className="text-center display-1 heroheader text-large"
              style={{ color: "white" }}
            >
              Invest. Mine. Double Up
            </h1>
            <p className=" text-center herotext mx-auto para">
              We provide profitable services to everyone. Access the latest and
              highly sophisticated mining technology to initiate mining today.
              When you choose us, we ensure that you enjoy the highest level of
              performance at competitively priced rates.
            </p>
            <div className="text-center mt-5 ">
              <Link to="/register" className="butt">
                Get Started
              </Link>
            </div>
            <div className="row">
              <div className="col-lg-5  col-md-6 col-xs-5 col-sm-5 ">
                <img
                  src="./homeImage/Head1.png"
                  alt=""
                  className="responsive heroimage"
                />
              </div>
              <div className="col-lg-5 col-xs-5 col-sm-5 col-md-6 ">
                <img
                  src="./homeImage/Head2.png"
                  alt=""
                  className="responsive heroimage1"
                />
              </div>
            </div>
            <div className="mt-5 py-5 px-3">
              <iframe
                title="frame"
                width="100%"
                height="500"
                src="https://www.youtube.com/embed/BX0gL0mo8v8"
                className="frame"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <h2 className="easystepstostartearning">
          Four Easy Steps To Start Earning{" "}
        </h2>
        <div className="row">
          <div className="col-lg-3 col-md-12 col-xs-12 col-sm-12">
            <div className="card cardeffects cardd">
              <div className="iconimages">
                <img src="./homeImage/Icon1.png" alt="" />
              </div>{" "}
              <br></br>
              <h3 className="text-center">Sign Up</h3>
              <p className="text-center px-3">
                Fill in the form and get ready to start mining in under one
                minute
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 col-xs-12 col-sm-12">
            <div className="card cardeffects cardd">
              <div className="iconimages">
                <img src="./homeImage/Icon2.png" alt="" />
              </div>{" "}
              <br></br>
              <h3 className="text-center">Subscribe to a Plan</h3>
              <p className="text-center px-3">
                Choose a profitable plan and make deposit to the company account
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-12 col-xs-12 col-sm-12">
            <div className="card cardeffects cardd">
              <div className="iconimages">
                <img src="./homeImage/Icon3.png" alt="" />
              </div>{" "}
              <br></br>
              <h3 className="text-center">Get Paid</h3>
              <p className="text-center px-3">
                Withdraw your mining income on a daily basis to your crypto
                wallet
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-12 col-xs-12 col-sm-12">
            <div className="card cardeffects cardd">
              <div className="iconimages">
                <img src="./homeImage/Icon4.png" alt="" />
              </div>{" "}
              <br></br>
              <h3 className="text-center">Reinvest</h3>
              <p className="text-center px-3">
                Repeat the process as much as you desire. Happy Printing!
              </p>
            </div>
          </div>
        </div>

        <strong>
          {" "}
          <p
            style={{ color: "black" }}
            className="py-5 px-3 mt-3 mb-3 mostadvanced text-large para"
          >
            We are the most advanced cryptocurrency Investment and multipool
            company. As soon as you set-up your account you can start to earn
            your frist coins. Services and connections are secure against even
            the most advanced malware and provides features. We use only
            powerful enterprise farming hardware that was specially built for
            serious mining. Technology is rapidly changing and we adapt to the
            changes as they happen. We use only advanced equipment. Whatever the
            time and whichever kind of request, our customer support team is
            always ready to Help!{" "}
          </p>{" "}
        </strong>

        <Container className="mt-5" fluid>
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="bg-transparent">
                  <h3 className="mb-0 text-center display-4">
                    CHOOSE A SUITABLE PLAN
                  </h3>
                </CardHeader>
                <CardBody>
                  <div class="row">
                    <div class="col-md-6 col-xs-12 col-lg-4 col-sm-12">
                      <div class="pricing hover-effect mb-5">
                        <div class="pricing-head">
                          <h3>
                            BEGINNER <span>Block Digitals Plan </span>
                          </h3>
                          <h4>
                            <i>$100</i>
                            <span>Minimum Deposit </span>
                          </h4>
                        </div>
                        <ul class="pricing-content list-unstyled">
                          <li>5% Return of Investment After 6 Hours</li>
                          <li>Maximum Deposit: 999 USD</li>
                          <li>Deposit Included</li>
                          <li>5% Referral Commission</li>
                          <li>We Only Accept BTC, USDT, BNB & ETH.</li>
                        </ul>
                        <div class="pricing-footer">
                          <p>
                            Subscribe to the Block Digitals Beginner Plan by
                            clicking the sign up button below
                          </p>
                          <Link
                            to="/register"
                            class="btn yellow-crusta btnsignup"
                          >
                            Sign Up
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 col-xs-12 col-lg-4">
                      <div class="pricing hover-effect mb-5">
                        <div class="pricing-head">
                          <h3>
                            STANDARD <span>Block Digitals Plan</span>
                          </h3>
                          <h4>
                            <i>$1000</i>
                            <span>Minimum Deposit </span>
                          </h4>
                        </div>
                        <ul class="pricing-content list-unstyled">
                          <li>9% Return of Investment After 6 Hours</li>
                          <li>Maximum Deposit: 4,999 USD</li>
                          <li>Deposit Included</li>
                          <li>5% Referral Commission</li>
                          <li>We Only Accept BTC, USDT, BNB & ETH.</li>
                        </ul>
                        <div class="pricing-footer">
                          <p>
                            Subscribe to the Block Digitals Standard Plan by
                            clicking the sign up button below
                          </p>
                          <Link
                            to="/register"
                            class="btn yellow-crusta btnsignup"
                          >
                            Sign Up
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 col-xs-12 col-lg-4">
                      <div class="pricing pricing-active hover-effect mb-5">
                        <div class="pricing-head pricing-head-active">
                          <h3>
                            PREMIUM <span>Block Digitals Plan</span>
                          </h3>
                          <h4>
                            <i>$5000</i>
                            <span>Minimum Deposit </span>
                          </h4>
                        </div>
                        <ul class="pricing-content list-unstyled">
                          <li>15% Return of Investment After 12 Hours</li>
                          <li>Maximum Deposit: 9,999 USD</li>
                          <li>Deposit Included</li>
                          <li>5% Referral Commission</li>
                          <li>We Only Accept BTC, USDT, BNB & ETH.</li>
                        </ul>
                        <div class="pricing-footer">
                          <p>
                            Subscribe to the Block Digitals Premium Plan by
                            clicking the sign up button below
                          </p>
                          <Link
                            to="/register"
                            class="btn yellow-crusta btnsignup"
                          >
                            Sign Up
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 col-xs-12 col-lg-4">
                      <div class="pricing hover-effect mb-5">
                        <div class="pricing-head">
                          <h3>
                            BRONZE <span>Block Digitals Plan</span>
                          </h3>
                          <h4>
                            <i>$10,000</i>
                            <span>Minimum Deposit </span>
                          </h4>
                        </div>
                        <ul class="pricing-content list-unstyled">
                          <li>30% Return of Investment After 48 Hours</li>
                          <li>Maximum Deposit: $24,999</li>
                          <li>Deposit Included</li>
                          <li>5% Referral Commission</li>
                          <li>We Only Accept BTC, USDT, BNB & ETH.</li>
                        </ul>
                        <div class="pricing-footer">
                          <p>
                            Subscribe to the Block Digitals Bronze Plan by
                            clicking the sign up button below
                          </p>
                          <Link
                            to="/register"
                            class="btn yellow-crusta btnsignup"
                          >
                            Sign Up
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 col-xs-12 col-lg-4">
                      <div class="pricing hover-effect mb-5">
                        <div class="pricing-head">
                          <h3>
                            Silver <span>Block Digitals Plan</span>
                          </h3>
                          <h4>
                            <i>$25,000</i>
                            <span>Minimum Deposit </span>
                          </h4>
                        </div>
                        <ul class="pricing-content list-unstyled">
                          <li>50% Return of Investment After 48 Hours</li>
                          <li>Maximum Deposit: 49,999 USD</li>
                          <li>Deposit Included</li>
                          <li>5% Referral Commission</li>
                          <li>We Only Accept BTC, USDT, BNB & ETH.</li>
                        </ul>
                        <div class="pricing-footer">
                          <p>
                            Subscribe to the Block Digitals Gold Plan by
                            clicking the sign up button below
                          </p>
                          <Link
                            to="/register"
                            class="btn yellow-crusta btnsignup"
                          >
                            Sign Up
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-6 col-xs-12 col-lg-4">
                      <div class="pricing hover-effect ">
                        <div class="pricing-head">
                          <h3>
                            Gold <span>Block Digitals Plan</span>
                          </h3>
                          <h4>
                            <i>$50,000</i>
                            <span>Minimum Deposit </span>
                          </h4>
                        </div>
                        <ul class="pricing-content list-unstyled">
                          <li>100% Return of Investment After 120 Hours</li>
                          <li>Maximum Deposit: Unlimited USD</li>
                          <li>Deposit Included</li>
                          <li>5% Referral Commission</li>
                          <li>We Only Accept BTC, USDT, BNB & ETH.</li>
                        </ul>
                        <div class="pricing-footer">
                          <p>
                            Subscribe to the Block Digitals Gold Plan by
                            clicking the sign up button below
                          </p>
                          <Link
                            to="/register"
                            class="btn yellow-crusta btnsignup"
                          >
                            Sign Up
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </Row>
        </Container>

        <div
          style={{ height: "80vh", width: "100%" }}
          className="  mt-5 mb-2 col-xs-12 col-md-12 col-lg-12"
        >
          <TradingViewWidget
            symbol="BTCUSD"
            theme={Themes.DARK}
            locale="en"
            autosize
          />{" "}
        </div>

        <div className="col-xs-12 col-md-12 col-lg-12 mt-2 mb-2">
          <div className="card footerbg well center  ">
            <div className="row ">
              <div className="col-xs-12 col-md-3 col-lg-3 text-center py-3">
                <i
                  className="fa fa-calendar fa-7x mt-3 mb-3 mx-auto"
                  style={{ color: "white" }}
                  aria-hidden="true"
                ></i>{" "}
                <br></br>
                <h3 className="text-white">Running Days</h3>
                <h3 className="text-white">2089</h3>
                <h3 className="text-white">From July 8th, 2016</h3>
              </div>

              <div className="col-xs-12 col-md-3 col-lg-3 text-center py-3">
                <i
                  class="fas fa-user fa-7x mt-3 mb-3"
                  style={{ color: "white" }}
                ></i>{" "}
                <br></br>
                <h3 className="text-white">Total Accounts</h3>
                <h3 className="text-white">878,679</h3>
                <h3 className="text-white">Users</h3>
              </div>

              <div className="col-xs-12 col-md-3 col-lg-3 text-center py-3">
                <i
                  className="fas fa-money-bill-alt fa-7x mb-3  mt-2 mx-auto "
                  aria-hidden="true"
                  style={{ color: "white" }}
                ></i>{" "}
                <br></br>
                <h3 className="text-white">Total Deposited</h3>
                <h3 className="text-white">64,876,868</h3>
                <h3 className="text-white">Last Deposit 0 USD</h3>
              </div>

              <div className="col-xs-12 col-md-3 col-lg-3 text-center py-3 px-3">
                <i
                  className="fas fa-money-check fa-7x mt-3 mb-3 mx-auto"
                  aria-hidden="true"
                  style={{ color: "white" }}
                ></i>{" "}
                <br></br>
                <h3 className="text-white">Total Withdrawals</h3>
                <h3 className="text-white">278,988,890</h3>
                <h3 className="text-white">Last Withdrawal 0 USD</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xs-12 col-lg-12 col-md-12 ">
          <p
            className="mt-2 mb-2 py-2 px-1 text-large para"
            style={{ color: "black" }}
          >
            For the successful allocation of financial resources, both internal
            and external, Block Digitals uses a system of rules of capital
            management — balanced money management, allowing: <br></br> a)
            Effective management of available funds <br></br> b) Accurately
            ensure the growth of profit in the following reporting periods.{" "}
            <br></br> <br></br>
            Another factor that reduces risks is proven analytical resources
            used to prevent faulty actions and adapt cryptotrading strategies to
            constantly changing market conditions. As the philosophy of our work
            comes down to long-term planning and improvement of economic
            indicators, independent insider data sources are of high information
            value and form the fundamental basis for the development of Block
            Digitals. Trust stable and reputable financial partners to ensure
            high investment returns that arrive on time and in full.
          </p>
        </div>

        <div className="col-xs-12 col-md-12 col-lg-12 mt-5 mb-5">
          <h2 className="text-center mt-5 text-large fw-bold display-3">
            WHY CHOOSE US?
          </h2>
          <div className=" text-center col-xs-12 col-md-12 col-lg-12">
            <div className="row">
              <div className="col-xs-12 col-md-4 col-lg-4 mt-5 ">
                <div className="img-responsive">
                  <img src="/ic-features-1.png" alt="" />
                </div>
                <div className="">
                  <h4 className="text-large fw-bold display-4 dip">
                    Official UK Сompany
                  </h4>
                  <p className="para" style={{ color: "black" }}>
                    Block Digitals is a legal company incorporated in the United
                    Kingdom. Reg.number 12367527.
                  </p>
                </div>
              </div>
              <div className=" col-xs-12 col-md-4 col-lg-4 mt-4">
                <div className="img-responsive">
                  <img src="/ic-features-2.png" alt="" />
                </div>
                <div className="">
                  <h4 className="text-large fw-bold display-4 dip">
                    Dedicated server{" "}
                  </h4>
                  <p className="para" style={{ color: "black" }}>
                    We use dedicated server of the ddos-guard company which
                    protects our web-site from any DDoS attack.
                  </p>
                </div>
              </div>
              <div className=" col-xs-12 col-md-4 col-lg-4 mt-2">
                <div className="img-responsive my-3">
                  <img src="/ic-features-3.png" alt="" />
                </div>
                <div className="text-large mt-1">
                  <h3 className="text-large fw-bold display-4 dip">
                    SSL Certificate Comodo
                  </h3>
                  <p className="para" style={{ color: "black" }}>
                    The high reliability certificate that provides the higher
                    level of protection and security of your personal data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="card certcard col-xs-11 col-md-5 col-lg-4 mt-3 rounded  mx-auto ">
            <img
              src="./cert.jpg"
              alt="Block Digitals_Certificate"
              className="img-responsive arrange"
            />
          </div>
          <div className="card certcard col-xs-12  mx-auto col-md-5 col-lg-4 mb-2 mt-3  rounded">
            <h1 className=" mt-5 fw-bold text-center refheader">
              {" "}
              Block Digitals Referral Program
            </h1>
            <img
              src="./ref.gif"
              className="mt-5 mb-5 img-responsive referralimage "
              alt=""
            />

            <p className=" ml-2 para">
              For participation in our partner program you don't need to have
              your own deposit. You earn referral commission which is paid
              directly into you e-currency account instantly.
            </p>

            <Link
              to="/register"
              className=" butt p-2 mx-auto text-large mt-5 mb-5 joinbtn "
            >
              JOIN THE PROGRAM
            </Link>
          </div>
        </div>
        <div className="shiftUp">
          <iframe
            title="frames"
            className="frames"
            src="https://widget.coinlib.io/widget?type=horizontal_v2&amp;theme=light&amp;pref_coin_id=1505&amp;invert_hover=no"
            width="100%"
            height="40px"
            scrolling="auto"
            marginWidth="0"
            marginHeight="0"
            frameBorder="0"
            border="0"
          ></iframe>
        </div>

        <div className="col-xs-12 col-md-12 col-lg-12 mt-5 center mx-auto">
          <div className="container fluid">
            <div className="row ">
              <div className=" text-large text-center py-3 px-2">
                <h3>We accept the following</h3>
              </div>
              <div className=" mb-5 text-center col-xs-12 mt-3 col-md-12 col-lg-12 ">
                <img src="/ic-payment-full--pm.png" classsName="px-5" alt="" />
                <img src="/ic-payment-full--btc.png" alt="" />
                <img src="/ic-payment-full--bch.png" alt="" />
                <img src="/ic-payment-full--py.png" alt="" />
                <img src="/ic-payment-full--adv.png" alt="" />
                <img src="/ic-payment-full--ltc.png" alt="" />
                <img src="/ic-payment-full--dash.png" alt="" />
                <img src="/ic-payment-full--eth.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footerbg footerwidth">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-xs-12 col-sm-10">
            <div className="footereffect">
              <div className="iconimages">
                <img src="./homeImage/Icon4.png" alt="" />
              </div>{" "}
              <br></br>
              <h3 className="text-center">Daily Payouts</h3>
              <p className="text-center px-3">
                In Bitcoin, Ethereum, USDT & BNB
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-xs-12 col-sm-10">
            <div className="footereffect">
              <div className="iconimages">
                <img src="./homeImage/Icon6.png" alt="" />
              </div>{" "}
              <br></br>
              <h3 className="text-center">Income Booster</h3>
              <p className="text-center px-3">
                Auto reinvest and earn up 500% a year
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-xs-12 col-sm-10">
            <div className="footereffect">
              <div className="iconimages">
                <img src="./homeImage/Icon7.png" alt="" />
              </div>{" "}
              <br></br>
              <h3 className="text-center">24/7 Live Support</h3>
              <p className="text-center px-3">With reponse time under 2 min</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-xs-12 col-sm-10">
            <div className="footereffect ">
              <div className="iconimages">
                <img src="./homeImage/Icon4.png" alt="" />
              </div>{" "}
              <br></br>
              <h3 className="text-center">Loan</h3>
              <p className="text-center">Loan services soon to be added</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footerwidth">
        <Footer />
      </div>
    </Fragment>
  );
};

export default Test;
