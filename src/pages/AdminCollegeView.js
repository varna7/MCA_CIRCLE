import React, { useEffect, useState } from "react";
import Icon from "awesome-react-icons";
import { Button, Row, Col, Table } from "react-bootstrap";
import { DashboardLayout } from "../components/Layout";
import "./college.css";
import { db } from "../firebase-config";
import { DashboardLayoutAdmin } from "../components/LayoutAdmin";

const AdminCollegeView = () => {
  const [collegeData, setCollegeData] = useState([]);
  const college_id = window.localStorage.getItem("college_id");
  const getRecords = () => {  db.collection("colleges").where("status","in",["accepted","blocked"])
  .get()
  .then((doc) => {
    const elements = [];
    doc.forEach((item) => {
      elements.push({ college_id: item.id, ...item.data() });
    });

    setCollegeData(elements);
  }); }



  useEffect(() => {
   getRecords()

    return () => {};
  }, []);


  const handleBlock = (action,college_id) => { 
    const cnf=window.confirm("Are you sure to continue?")
      if(cnf){
        const newStatus=action=="accepted"?"blocked":"accepted"
        db.collection("colleges").doc(college_id).update({
          status:newStatus
        }).then(res=>{
          const newStatus=action=="accepted"?"Blocked":"Unblocked"
    alert(`College ${newStatus}`)
   
      getRecords(  )
        })
     


   }}
  return (
    <DashboardLayoutAdmin logo={collegeData?.logos}>
      {console.log(collegeData)}
      <h2 className="m-4 ">Registered Colleges</h2>

      <div className="p-4">
        <Table striped bordered hover className="p-5">
          <thead>
            <tr>
              <th>#</th>
              <th>College</th>
              <th>HOD Name</th>
              <th>Email</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {collegeData.map((item, idx) => {
              return (
                <tr>
                  <td>{idx + 1}</td>
                  <td>{item.college_name}</td>
                  <td>{item.hod_name}</td>
                  <td>{item.hod_mail}</td>
                  <td>
          
                    <Button
                      className="ml-3"
                      variant={item.status=="accepted"?"danger":"success"}
                      onClick={() => {handleBlock(item.status,item.college_id)}}
                    >
                     {item.status=="accepted"?"Block Now":"Unblock"}
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </DashboardLayoutAdmin>
  );
};

export default AdminCollegeView;
