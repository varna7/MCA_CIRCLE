import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { DashboardLayout } from "../components/Layout";
import {db} from '../firebase-config';
const GeneralDetails = () => {
  const college_id=window.localStorage.getItem('college_id');

 const [generalData, setGeneralData] = useState({
 


    vision:"",
    mission:"",
    website:"",
    accr:"",
    university:"",
    district:"",
    type:"",
    phone:""

  })
  useEffect(() => {
    db.collection("colleges").doc(college_id).get().then(doc=>{
      console.log()

      if(doc.data().general!=undefined)
      setGeneralData(doc.data().general)
    })
 
    return () => {
      
    }
  }, [])
  const handleChange = (e,type) => { 

  
    setGeneralData({...generalData,[type]:e.target.value})
   }


   const handleSave = () => { 
    
    
    
    console.log("Data:",generalData)
  
    db.collection("colleges").doc(college_id).update({"general":generalData}).then(res=>{
      // console.log(res)
   
      alert("Updated")

      // setRegData({})
    }).catch(err=>{
      
      alert("Error")
      console.log(err)})
    // ...
  
  
  
  }
  return (
    <DashboardLayout>
      <div className="p-5">
        <h2>General Details</h2>

        <Form>
          <Row>
          
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Vision</Form.Label>
              <Form.Control type="text"  value={generalData.vision} onChange={e=>handleChange(e,"vision")} placeholder="Vision of Your Dept" />
            </Form.Group>
          </Row>
          <Row>
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Mission</Form.Label>
              <Form.Control type="text"  onChange={e=>handleChange(e,"mission")} value={generalData.mission} placeholder="Mission of Your Dept" />
            </Form.Group>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Website</Form.Label>
                <Form.Control type="text"  onChange={e=>handleChange(e,"website")} value={generalData.website}placeholder="College Website" />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>University</Form.Label>
                <Form.Control type="text"  onChange={e=>handleChange(e,"university")} value={generalData.university} placeholder="Affliated University" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>District</Form.Label>
                <Form.Control type="text"  onChange={e=>handleChange(e,"district")} value={generalData.district} placeholder="District" />
              </Form.Group>
            </Col>
           
          </Row>
          <Row>
          <Col>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Accreditation</Form.Label>
                <Form.Control type="text"  onChange={e=>handleChange(e,"accr")} value={generalData.accr} placeholder="Accreditation" />
              </Form.Group>
            </Col>
          <Col>
          <Form.Group className="mb-3">
        <Form.Label>Type</Form.Label>
        <Form.Select onChange={e=>handleChange(e,"type")} >
          <option value={"Government"}>Government</option>
          <option value={"Aided"}>Aided</option>
          <option value={"Self Financing"}>Self Financing</option>
        </Form.Select>
      </Form.Group>
            </Col>
          <Col>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text"  onChange={e=>handleChange(e,"phone")} value={generalData.phone} placeholder="Phone" />
              </Form.Group>
            </Col>
          </Row>
        </Form>
        <div style={{justifyContent:"center",display:"flex",alignContent:"center"}}>
          <Button onClick={handleSave}> Save</Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default GeneralDetails;
