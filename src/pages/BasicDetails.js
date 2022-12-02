import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { DashboardLayout } from "../components/Layout";
import {db} from '../firebase-config';
const BasicDetails = () => {
  const college_id=window.localStorage.getItem('college_id');

 const [basicData, setBasicData] = useState({
 


    placements:"",
    intake:"",
    pass:"",
    recr:"",
    ctc:"",
    mode:"",
    infrastructure:{
      library:false,
      projectLab:false,
      softLab:false,
      seminarHall:false,
      indoor:false,
      other:false
    }
    ,other:''

  })
  useEffect(() => {
    db.collection("colleges").doc(college_id).get().then(doc=>{
    
    if(doc.data().basic!=undefined)
      setBasicData(doc.data().basic )
    })
 
    return () => {
      
    }
  }, [])
  const handleChange = (e,type) => { 

  
    setBasicData({...basicData,[type]:e.target.value})
   }
   const handleCheck = (type) => { 

setBasicData({...basicData,infrastructure:{
  ...basicData.infrastructure,
  [type]:!basicData.infrastructure[type]
}})
    
    }
   const handleSave = () => { 
    
    
    
    console.log("Data:",basicData)
  
    db.collection("colleges").doc(college_id).update({"basic":basicData}).then(res=>{
      // console.log(res)
   
      alert("Updated")

      // setRegData({})
    }).catch(err=>{
      
      alert("Error")
      console.log(err)})
 
  
  
  
  }
  return (
    <DashboardLayout>
      <div className="" style={{overflowX:"scroll"}}>
        <h2>Basic Details</h2>

        <Form>

        <Row>
          <Col>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Intake</Form.Label>
                <Form.Control type="number"  onChange={e=>handleChange(e,"intake")} value={basicData.intake} placeholder="Intake" />
              </Form.Group>
            </Col>
          
          <Col>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Pass Percentage</Form.Label>
                <Form.Control type="number"  onChange={e=>handleChange(e,"pass")} value={basicData.pass} placeholder="Pass percentage" />
              </Form.Group>
            </Col>
          <Col>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Placements</Form.Label>
                <Form.Control type="number"  onChange={e=>handleChange(e,"placements")} value={basicData.placements} placeholder="Placements" />
              </Form.Group>
            </Col>
          </Row>
   
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Average CTC</Form.Label>
                <Form.Control type="number"  onChange={e=>handleChange(e,"ctc")} value={basicData.ctc}placeholder="Average CTC" />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Mode of Intake</Form.Label>
                <Form.Control type="text"  onChange={e=>handleChange(e,"mode")} value={basicData.mode} placeholder="Mode of Intake" />
              </Form.Group>
            </Col>
            {/* <Col>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Mode of Intake</Form.Label>
                <Form.Control type="text"  onChange={e=>handleChange(e,"mode")} value={generalData.university} placeholder="Affliated University" />
              </Form.Group>
            </Col> */}
           
          </Row>

          <Row>     
  

          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Recruiters</Form.Label>
              <Form.Control type="text"  onChange={e=>handleChange(e,"recr")} value={basicData.recr} placeholder="Recruiters" />
            </Form.Group>
          </Row>
          <Row>
       <Col>   <Form.Group className="mb-3">
          <Form.Label>Infrastructue</Form.Label>
          <Form.Check
            type="checkbox"
            id="disabledFieldsetCheck"
            label="Library"
            onChange={e=>handleCheck("library")}
          />
          <Form.Check
            type="checkbox"
            id="disabledFieldsetCheck"
            label="Software Lab"
            onChange={e=>handleCheck("softLab")}
            checked={basicData.infrastructure.softLab}
          />
          <Form.Check
            type="checkbox"
            id="disabledFieldsetCheck"
            label="Project Lab"
            onChange={e=>handleCheck("projectLab")}
            checked={basicData.infrastructure.projectLab}
          />
          <Form.Check
            type="checkbox"
            id="disabledFieldsetCheck"
            label="Seminar Hall"
            checked={basicData.infrastructure.seminarHall}
            onChange={e=>handleCheck("seminarHall")}
          />
          <Form.Check
            type="checkbox"
            id="disabledFieldsetCheck"
            label="Indoor"
            checked={basicData.infrastructure.indoor}
            onChange={e=>handleCheck("indoor")}
          />
          <Form.Check
            type="checkbox"
            id="disabledFieldsetCheck"
            label="Other"
            checked={basicData.infrastructure.other}
            onChange={e=>handleCheck("other")}
          />
        </Form.Group></Col>

      
          </Row>
 {basicData.infrastructure.other  &&          <Row>     
  <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Others</Form.Label>
      <Form.Control type="text"  onChange={e=>handleChange(e,"other")} value={basicData.other} placeholder="Others " />
    </Form.Group>
  </Row>}
        </Form>
        <div style={{justifyContent:"center",display:"flex",alignContent:"center"}}>
          <Button onClick={handleSave}> Save</Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default BasicDetails;
