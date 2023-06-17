import { useContext} from "react";
import "./icons.css"
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  
} from "reactstrap";

import { Link } from "react-router-dom";
import authContext from "components/context/auth/authContext";
import Header from "components/Headers/Header.js";

const Icons = () => {
  
  const context = useContext(authContext)
  const {setPlan} = context

  const onClick = (data) =>{
	  setPlan(data)
  }
  return (
    <>
      <Header />
      
	  <Container className="mt-5" fluid>
        
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <h3 className="mb-0 text-center display-4">CHOOSE A SUITABLE PLAN</h3>
              </CardHeader>
              <CardBody>
              <div class="row">
		
		<div class="col-md-6 col-xs-12 col-lg-4 col-sm-12">
			<div class="pricing hover-effect mb-5">
				<div class="pricing-head">
					<h3>BEGINNER <span>
					Proinvest Plan </span>
					</h3>
					<h4><i>$100</i>
					<span>
					Minimum Deposit </span>
					</h4>
				</div>
				<ul class="pricing-content list-unstyled">
					<li>
					5% Return of Investment After 6 Hours
					</li>
					<li>
					Maximum Deposit: 999 USD
					</li>
					<li>
                    Deposit Included
					</li>
					<li>
					5% Referral Commission 
					</li>
					<li>
					We Only Accept BTC, USDT, BNB & ETH.
					</li>
				</ul>
				<div class="pricing-footer">
					<p>
						Subscribe to the Proinvest Beginner Plan by clicking the sign up button below
					</p>
					<Link to="/dashboard/choosepayment" class="btn yellow-crusta btnsignup" onClick={()=>{onClick({plann: "Beginner", profit:"5% After 6 Hours", minDeposit:"$100", maxDeposit: "$999"  })}}>
					Sign Up
					</Link>
				</div>
			</div>
		</div>
		<div class="col-md-6 col-xs-12 col-lg-4">
			<div class="pricing hover-effect mb-5">
				<div class="pricing-head">
					<h3>STANDARD <span>
					Proinvest Plan</span>
					</h3>
					<h4><i>$1000</i>
					<span>
					Minimum Deposit </span>
					</h4>
				</div>
				<ul class="pricing-content list-unstyled">
					<li>
					9% Return of Investment After 6 Hours
					</li>
					<li>
					Maximum Deposit: 4,999 USD
					</li>
					<li>
                    Deposit Included
					</li>
					<li>
					5% Referral Commission 
					</li>
					<li>
					We Only Accept BTC, USDT, BNB & ETH.
					</li>
				</ul>
				<div class="pricing-footer">
					<p>
						 Subscribe to the Proinvest Standard Plan by clicking the sign up button below
					</p>
					<Link to="/dashboard/choosepayment" class="btn yellow-crusta btnsignup" onClick={()=>{onClick({plann: "Standard", profit:"9% After 6 Hours", minDeposit:"$1,000", maxDeposit: "$4,999"  })}}>
					Sign Up
					</Link>
				</div>
			</div>
		</div>
		<div class="col-md-6 col-xs-12 col-lg-4">
			<div class="pricing pricing-active hover-effect mb-5">
				<div class="pricing-head pricing-head-active">
					<h3>PREMIUM <span>
					Proinvest Plan</span>
					</h3>
          <h4><i>$5000</i>
					<span>
					Minimum Deposit </span>
					</h4>
				</div>
				<ul class="pricing-content list-unstyled">
					<li>
					15% Return of Investment After 12 Hours
					</li>
					<li>
					Maximum Deposit: 9,999 USD
					</li>
					<li>
                    Deposit Included
					</li>
					<li>
					5% Referral Commission 
					</li>
					<li>
					We Only Accept BTC, USDT, BNB & ETH.
					</li>
				</ul>
				<div class="pricing-footer">
					<p>
						 Subscribe to the Proinvest Premium Plan by clicking the sign up button below
					</p>
					<Link to="/dashboard/choosepayment" class="btn yellow-crusta btnsignup" onClick={()=>{onClick({plann: "Premium", profit:"15% After 12 Hours", minDeposit:"$5,000", maxDeposit: "$9,999"  })}}>
					Sign Up
					</Link>
				</div>
			</div>
		</div>
		<div class="col-md-6 col-xs-12 col-lg-4">
			<div class="pricing hover-effect mb-5">
				<div class="pricing-head">
					<h3>BRONZE <span>
					Proinvest Plan</span>
					</h3>
					<h4><i>$10,000</i>
					<span>
					Minimum Deposit </span>
					</h4>
				</div>
				<ul class="pricing-content list-unstyled">
					<li>
					30% Return of Investment After 48 Hours
					</li>
					<li>
					Maximum Deposit: $24,999
					</li>
					<li>
                    Deposit Included
					</li>
					<li>
					5% Referral Commission 
					</li>
					<li>
					We Only Accept BTC, USDT, BNB & ETH.
					</li>
				</ul>
				<div class="pricing-footer">
					<p>
						 Subscribe to the Proinvest Bronze Plan by clicking the sign up button below
					</p>
					<Link to="/dashboard/choosepayment" class="btn yellow-crusta btnsignup" onClick={()=>{onClick({plann: "Bronze", profit:"30% After 48 Hours", minDeposit:"$10,000", maxDeposit: "$24,999"  })}}>
					Sign Up
					</Link>
				</div>
			</div>

      
		</div>
		<div class="col-md-6 col-xs-12 col-lg-4">
			<div class="pricing hover-effect mb-5">
				<div class="pricing-head">
					<h3>Silver <span>
					Proinvest Plan</span>
					</h3>
					<h4><i>$25,000</i>
					<span>
					Minimum Deposit </span>
					</h4>
				</div>
				<ul class="pricing-content list-unstyled">
					<li>
					50% Return of Investment After 48 Hours
					</li>
					<li>
					Maximum Deposit: 49,999 USD
					</li>
					<li>
                    Deposit Included
					</li>
					<li>
					5% Referral Commission 
					</li>
					<li>
					We Only Accept BTC, USDT, BNB & ETH.
					</li>
				</ul>
				<div class="pricing-footer">
					<p>
						 Subscribe to the Proinvest Gold Plan by clicking the sign up button below
					</p>
					<Link to="/dashboard/choosepayment" class="btn yellow-crusta btnsignup" onClick={()=>{onClick({plann: "Silver", profit:"50% After 48 Hours", minDeposit:"$25,000", maxDeposit: "$49,999"  })}}>
					Sign Up
					</Link>
				</div>
			</div>

      
		</div>

		<div class="col-md-6 col-xs-12 col-lg-4">
			<div class="pricing hover-effect ">
				<div class="pricing-head">
					<h3>Gold <span>
					Proinvest Plan</span>
					</h3>
					<h4><i>$50,000</i>
					<span>
					Minimum Deposit </span>
					</h4>
				</div>
				<ul class="pricing-content list-unstyled">
					<li>
					100% Return of Investment After 120 Hours
					</li>
					<li>
					Maximum Deposit: Unlimited USD
					</li>
					<li>
          Deposit Included
					</li>
					<li>
					5% Referral Commission 
					</li>
					<li>
					We Only Accept BTC, USDT, BNB & ETH.
					</li>
				</ul>
				<div class="pricing-footer">
					<p>
						 Subscribe to the Proinvest Gold Plan by clicking the sign up button below
					</p>
					<Link to="/dashboard/choosepayment" class="btn yellow-crusta btnsignup" onClick={()=>{onClick({plann: "Gold", profit:"100% After 120 Hours", minDeposit:"$50,000", maxDeposit: "Unlimited USD"  })}}>
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
    </>
  );
};

export default Icons;
