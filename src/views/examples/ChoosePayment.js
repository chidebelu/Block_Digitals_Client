import React, {useContext, useState} from "react";
import { Link, useHistory } from 'react-router-dom'
// import authContext from "../../components/context/auth/authContext.js"
import { Card, Container, Row } from "reactstrap";

import Header from "components/Headers/Header.js";



const Maps = () => {
  // const context = useContext(authContext)
  const history = useHistory()
  // const {user} = context
  const [box, setBox] = useState("");
  
  
 
  const onChange = (e) =>{
      e.preventDefault()
      setBox(
              e.target.name
      )
  }
  
      const onClick = () =>{
          if (box==="bitcoin"){
            localStorage.setItem("bitcoin" , box)
              history.push("/dashboard/bitcoinpage")
          }
           if(box==="ethereum"){
            localStorage.setItem("Ethereum" , box)
          history.push("/dashboard/ethereumpage")
      }
  
       if(box==="usdt"){
        localStorage.setItem("Usdt" , box)
         history.push("/dashboard/usdtpage")
      }
  
       if(box==="bnb"){
        localStorage.setItem("Bnb" , box)
          history.push("/dashboard/bnbpage")
      }
      }
  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col-xs-12 col-md-6 center">
            <Card className="shadow border-0 mb-5 ">
            <div>
               
               <h3 className=" mb-5 mt-5 fw-bold text-center text-success ">CHOOSE A PAYMENT METHOD</h3>
           </div> <br></br>
           <form>
              <div className="custom-control custom-switch mb-3 mx-3">
                      <input type="checkbox" className="custom-control-input"   name="bitcoin" checked={box==="bitcoin"} id="customSwitch1" onChange={onChange}/>
                      <label className="custom-control-label" for="customSwitch1">BITCOIN</label>
                    </div> <br></br>

                    <div className="custom-control custom-switch mb-3 mx-3">
                      <input type="checkbox" className="custom-control-input"name="ethereum" id="customSwitch2" checked={box==="ethereum"} onChange={onChange}/>
                      <label className="custom-control-label" for="customSwitch2">ETHEREUM</label>
                    </div> <br></br>

                    <div className="custom-control custom-switch mb-3 mx-3">
                      <input type="checkbox" className="custom-control-input" name="usdt" id="customSwitch3" checked={box==="usdt"} onChange={onChange}/>
                      <label className="custom-control-label" for="customSwitch3">USDT</label>
                    </div> <br></br>

                    <div className="custom-control custom-switch mb-3 mx-3">
                      <input type="checkbox" className="custom-control-input"checked={box==="bnb"} name="bnb" id="customSwitch4" onChange={onChange}/>
                      <label className="custom-control-label" for="customSwitch4">BNB</label>
                    </div>
                   

               <br></br>

           <Link to="/dashboard/makedeposit">    <button className="btn btn-md bg-success mx-3 mb-5 " style={{marginTop:"40%"}}>BACK</button> </Link>
              <button className="btn btn-md bg-success mx-5 mb-5 " onClick={onClick} style={{marginTop:"40%"}}>NEXT</button> 
      
           </form>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Maps;
