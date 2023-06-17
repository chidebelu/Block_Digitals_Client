import React, { Fragment } from "react";
import Navbar from "layouts/Navbar";
import Footer from "components/Footers/AdminFooter";
import { Link } from "react-router-dom";
import "./Home.css";
import { Button } from "reactstrap";
const About = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-md-11 col-lg-11 center">
            <div className=" well">
              <h1 className="text-center mb-4 mt-3 text-primary">
                ABOUT BLOCK DIGITALS
              </h1>
              <h3 className=" mb-5 ">
                The positive dynamics of growth in the prices of
                cryptocurrencies in relation to the "real" currencies of the
                world allowed digital means of payment to become a full-fledged
                financial instrument on the market. The characteristic
                variability of the exchange rate of different cryptocurrencies
                opens additional opportunities for earnings, the most popular of
                which is the trade in electronic currencies. The cryptocurrency
                sector is developing by leaps, so taking a direct part in the
                process of crypto trading becomes more profitable and more
                purposeful over time. Moreover, the high qualification of the
                trader allows minimizing investment risks by applying an
                effective strategy and reliable analytical information. Our
                company Block Digitals, created by professional traders with
                years of experience, hard-working, systematized and accurately
                carrying out objectives, is an active participant of
                cryptotrading. At the moment, we are at the stage of rapid
                development and expansion, regularly adding to the list of
                cryptocurrencies in circulation: Bitcoin, Litecoin, Ethereum,
                Bitcoin Cash, Dash.
              </h3>

              <div className="row">
                <div className="card col-xs-12 col-md-12 col-lg-5 shadow-lg  mt-3 rounded well mx-auto">
                  <div>
                    <iframe
                      width="100%"
                      height="700"
                      src="https://https://www.youtube.com/embed/BX0gL0mo8v8"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>

                <div className="card col-xs-12 mx-auto col-md-12 col-lg-5 mb-2 mt-3 ml-1 shadow-lg rounded">
                  <div className="about-bl__col shadow-bl">
                    <div className="referral-bl">
                      <div className="referral-bl__title text-center">
                        <h1 className="mr-5 mt-5 fw-bold text-center">
                          {" "}
                          Block Digitals Referral Program
                        </h1>
                        <img
                          src="/img-referal.png"
                          className="mt-5 mb-5 "
                          alt=""
                        />
                      </div>

                      <h3 className="text-center text-large">
                        For participation in our partner program you don't need
                        to have your own deposit. You earn referral commission
                        which is paid directly into you e-currency account
                        instantly.
                      </h3>

                      <div className="text-center">
                        <Link to="/register">
                          <Button
                            className="mt-4 mb-5 "
                            color="primary"
                            type="submit"
                          >
                            Join the Program
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-md-6 col-lg-6 mt-5">
                  <h3 className="">
                    Trading the most expensive and popular cryptocurrencies in
                    the world with the use of strategies, technical resources
                    and experience gained over several years of active activity,
                    we never stop there. That’s why, private investors, who are
                    attracted to mutually beneficial cooperation with Block
                    Digitals, steadily add to their capital, some of which (if
                    desired) will be refinanced to generate even greater profits
                    in the process of cryptotrading.
                  </h3>
                </div>
                <div className="  col-xs-12 col-md-6 col-lg-6  mt-5">
                  <h3 className=" ">
                    Why do you need relatively small investments by private
                    persons? Given the large number of individuals interested in
                    profitable investment, Block Digitals is able to form an
                    impressive investment portfolio, which cannot provide a few
                    investors — legal entities or creditors. Regular information
                    of financial resources allows you to increase the volume of
                    transactions in the process of cryptocurrency trading,
                    which, in turn, is the key to the stability and permanent
                    growth of the company in the long term.
                  </h3>
                </div>
              </div>

              <div className="col-xs-12 col-md-12 col-lg-12 mt-5">
                <div className="card bg-primary well center col-xs-12 col-md-12 col-lg-12">
                  <div className="row">
                    <div className="col-xs-3 col-md-3 col-lg-3 text-center">
                      <i
                        className="fa fa-calendar fa-7x mt-3 mb-3 mx-auto"
                        aria-hidden="true"
                        style={{ color: "#fff" }}
                      ></i>{" "}
                      <br></br>
                      <h3 className="text-white">Running Days</h3>
                      <h3 className="text-white">2089</h3>
                      <h3 className="text-white">From July 8th, 2016</h3>
                    </div>

                    <div className="col-xs-3 col-md-3 col-lg-3 text-center">
                      <i
                        class="fas fa-user fa-7x mt-3 mb-3"
                        style={{ color: "#fff" }}
                      ></i>{" "}
                      <br></br>
                      <h3 className="text-white">Total Accounts</h3>
                      <h3 className="text-white">878,679</h3>
                      <h3 className="text-white">Users</h3>
                    </div>

                    <div className="col-xs-3 col-md-3 col-lg-3 text-center">
                      <i
                        className="fas fa-money-bill-alt fa-7x mb-3  mt-3 mx-auto"
                        aria-hidden="true"
                        style={{ color: "#fff" }}
                      ></i>{" "}
                      <br></br>
                      <h3 className="text-white">Total Deposited</h3>
                      <h3 className="text-white">64,876,868</h3>
                      <h3 className="text-white">Last Deposit 0 USD</h3>
                    </div>

                    <div className="col-xs-3 col-md-3 col-lg-3 text-center">
                      <i
                        className="fas fa-money-check fa-7x mt-3 mb-3 mx-auto"
                        aria-hidden="true"
                        style={{ color: "#fff" }}
                      ></i>{" "}
                      <br></br>
                      <h3 className="text-white">Total Withdrawals</h3>
                      <h3 className="text-white">278,988,890</h3>
                      <h3 className="text-white">Last Withdrawal 0 USD</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-lg-12 col-md-12 ">
                  <h3 className="mt-5 mb-5">
                    For the successful allocation of financial resources, both
                    internal and external, Block Digitals uses a system of rules
                    of capital management — balanced money management, allowing:{" "}
                    <br></br> a) effectively manage available funds <br></br> b)
                    accurately assess the growth of profit in the following
                    reporting periods. <br></br> <br></br>
                    Another one factor that reduces risks is proven analytical
                    resources used to prevent faulty actions and adapt
                    cryptotrading strategies to constantly changing market
                    conditions. As the philosophy of our work comes down to
                    long-term planning and improvement of economic indicators,
                    independent insider data sources are of high information
                    value and form the fundamental basis for the development of
                    Proinvest. Trust stable and reputable financial partners to
                    ensure high investment returns that arrive on time and in
                    full.
                  </h3>
                </div>
              </div>

              <div className="col-xs-12 col-md-12 col-lg-12 mt-5 mb-5">
                <h1 className="text-center mt-5 text-large fw-bold">
                  WHY CHOOSE US?
                </h1>
                <div className="row">
                  <div className="col-xs-12 col-md-4 col-lg-4 mt-5 ">
                    <div className="img-responsive text-center mb-3">
                      <img src="/ic-features-1.png" alt="" />
                    </div>
                    <div className="">
                      <h3 className="text-large fw-bold ">
                        Official UK Сompany
                      </h3>
                      <h3 className="text-large">
                        Block Digitals is a legal company incorporated in the
                        United Kingdom. Reg.number 12367527.
                      </h3>
                    </div>
                  </div>
                  <div className=" col-xs-12 col-md-4 col-lg-4 mt-4">
                    <div className="img-responsive text-center mb-3">
                      <img src="/ic-features-2.png" alt="" />
                    </div>
                    <div className="">
                      <h3 className="text-large fw-bold">
                        Dedicated server DDoS‑Guard
                      </h3>
                      <h3 className="text-large">
                        We use dedicated server of the ddos-guard company which
                        protects our web-site from any DDoS attack.
                      </h3>
                    </div>
                  </div>
                  <div className=" col-xs-12 col-md-4 col-lg-4 mt-2">
                    <div className="img-responsive my-3 text-center mb-3">
                      <img src="/ic-features-3.png" alt="" />
                    </div>
                    <div className="text-large mt-1">
                      <h3 className="text-large fw-bold">
                        SSL Certificate Comodo
                      </h3>
                      <h3 className="text-large">
                        The high reliability certificate that provides the
                        higher level of protection and security of your personal
                        data.
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-md-12 col-lg-12 mt-5 center mx-auto">
                <div className="container fluid">
                  <div className="row ">
                    <div className=" text-large text-center ">
                      <h3>We accept the following</h3>
                    </div>
                    <div className=" mb-5 text-center col-xs-12 mt-3 col-md-12 col-lg-12">
                      <img src="/ic-payment-full--pm.png" alt="" />
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
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default About;
