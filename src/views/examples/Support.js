import React, {Fragment} from "react"
import Navbar from "layouts/Navbar"
import Footer from "components/Footers/AdminFooter"
const About = () =>{

    return (
        <Fragment>
            <Navbar/>
        <div className="container-fluid">
            <div className="row">
                <div className="col-xs-12 col-md-9 col-lg-9 center">
                    <div className="card well mt-3">
                        <h2 className="text-center mb-5 mt-3 text-primary"> SUPPORT</h2>
                        <h3 className=" text-primary fw-bold mb-3 mt-4 mx-4 ">FEEDBACK FORM</h3>
                    <form>
                    <div className="col-xs-12 col-md-6 col-lg-6">
                        <input className="form-control mb-4" type="text" placeholder="Your Name"/>
                    </div>
                    <div className="col-xs-12 col-md-6 col-lg-6">
                        <input className="form-control" type="email" placeholder="Your Email"/>
                        
                    </div>

                    <div className="col-xs-12 col-md-9 col-lg-7 " >
                        <textarea className="form-control mt-4 " placeholder="Briefly describe the issue"/>
                    </div>
                    <div className="col-xs-12 col-md-9 col-lg-7">
                        <button className="btn btn-md btn-default mt-5 mb-5 bg-primary hover"><i className="fa fa-paper-plane"></i> SEND MESSAGE</button>
                    </div>
                    
                    </form>
                    <hr/>
                    <div className="col-xs-12 col-md-12 col-lg-12 mt-5 ">
                        <h1 className="text-center text-primary">
                            PROINVEST
                        </h1>
                        <h3 className="text-center mb-2">
                                            <i className="fa fa-address-card"></i> 48 Warwick Street, London
                                            United Kingdom W1B 5AW</h3>
                                            <h3 className="text-center mb-2">
                                            <i className="fas fa-mobile-alt"></i> VIP USE ONLY
                                            </h3>
                                            <h3 className="text-center mb-5">
                                                <i className="fa fa-envelope"></i> invest-crypto@outlook.com
                                            </h3>
                                            <hr/>
                                            
                    </div>
                    <h4 className="center col-xs-12 col-md-6 col-lg-6 mb-5">
                                            We are always ready to help you. There are many ways to contact us. You may drop us a line, give us a call or send an email, choose what suits you most.
                                            </h4>
                </div>
                </div>
            </div>
        </div>
        <Footer/>
        </Fragment>
    )
}

export default About