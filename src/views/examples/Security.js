import React, {useState,useEffect} from "react";

// reactstrap components
import { Card, Container, Row } from "reactstrap";

// core components
import Header from "components/Headers/Header.js";



const Withdrawal = () => {
  const [box, setBox] = useState("disabled");
  const [boxx, setBoxx] = useState("");
  const [save, setSave] = useState("");
  
  
  useEffect(()=>{
      const data = JSON.parse(localStorage.getItem("security"))
      setBox(data)
      const dat = JSON.parse(localStorage.getItem("secu"))
      setBoxx(dat)
  },[])
  
 
  
  const onChange = (e) =>{
      e.preventDefault()
      setBox(
              e.target.name
      )
  }
  
  const onChangee = (e) =>{
      e.preventDefault()
      setBoxx(
              e.target.name
      )
  }
  
      const onSubmit = () =>{
          
          localStorage.setItem("security", JSON.stringify(box))
          localStorage.setItem("secu", JSON.stringify(boxx))

          setSave("Saved")
          setTimeout(function(){
            setSave()
          },5000)
      }
  return (
    <>
      <Header />
      <Container className="mt-5" fluid>
        <Row>
          <div className="col-xs-12 col-md-6 center">
          
            <Card className="shadow border-0 well">
            <div className="col-xs-12 mb-3 text-center mt-3">
                <h3>DETECT IP ADDRESS CHANGES</h3>
              </div>
              
              <form>
              <div className="custom-control custom-switch mb-3 mx-2 ">
                      <input type="checkbox" className="custom-control-input"   name="disabled" checked={box==="disabled"} id="customSwitch1" onChange={onChange}/>
                      <label className="custom-control-label" for="customSwitch1">Disabled</label>
                    </div>

                    <div className="custom-control custom-switch mb-3 mx-2">
                      <input type="checkbox" className="custom-control-input"name="medium" id="customSwitch2" checked={box==="medium"} onChange={onChange}/>
                      <label className="custom-control-label" for="customSwitch2">Medium</label>
                    </div>

                    <div className="custom-control custom-switch mb-3 mx-2">
                      <input type="checkbox" className="custom-control-input" name="high" id="customSwitch3" checked={box==="high"} onChange={onChange}/>
                      <label className="custom-control-label" for="customSwitch3">High</label>
                    </div>

                    <div className="custom-control custom-switch mb-3 mx-2">
                      <input type="checkbox" className="custom-control-input"checked={box==="paranoic"} name="paranoic" id="customSwitch4" onChange={onChange}/>
                      <label className="custom-control-label" for="customSwitch4">Paranoic</label>
                    </div>
                    </form>
                      
            </Card>
          </div> <br></br>
        </Row>
        <Row>
          <div className="col-xs-12 col-md-6 center mt-4">
              <Card className="shadow border-0 well">
              <div className="col-xs-12 mb-3 mx-2 text-center mt-3">
                <h3>DETECT BROWSER CHANGES</h3>
              </div>
              <div className="col-xs-12">
                  <form onSubmit={onSubmit}>
              <div className="custom-control custom-switch mb-3 mx-2">
                      <input type="checkbox" name="disabled" className="custom-control-input" id="customSwitch5" defaultChecked checked={boxx==="disabled"} onChange={onChangee}/>
                      <label className="custom-control-label" for="customSwitch5">Disabled</label>
                    </div>

                    <div className="custom-control custom-switch mb-3 mx-2">
                      <input type="checkbox" className="custom-control-input" name="enabled" id="customSwitch6"checked={boxx==="enabled"} onChange={onChangee}/>
                      <label className="custom-control-label" for="customSwitch6">Enabled</label>
                    </div>

                    <div class="col-xs-6 col-lg-6 col-md-6 mt-5 mx-auto text-center mb-5">
                      <small className="text-center text-success">{save}</small> <br></br>
                      <button type="submit" className="btn btn-default ">SAVE</button>
                    </div>
                    </form>
              </div>
              </Card>
              </div>
        </Row>
      </Container>
    </>
  );
};

export default Withdrawal;
