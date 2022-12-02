import React, { useEffect, useState } from 'react'
import Icon from 'awesome-react-icons'
import { Button ,Row,Col, Table} from 'react-bootstrap'
import { DashboardLayout } from '../components/Layout'
import './college.css'
import { db } from '../firebase-config'
import { DashboardLayoutAdmin } from '../components/LayoutAdmin'

const AdminCollegeReq = () => {

  const [collegeData, setCollegeData] = useState([])
  // const college_id=window.localStorage.getItem('college_id');

  const getColleges = ( ) => {  db.collection("colleges").where("status","==","registered").get().then(doc=>{
    const elements = [];
    doc.forEach((item) => {
      elements.push({college_id:item.id,...item.data()});
    });

    setCollegeData(elements);

  })
}
  useEffect(() => {
    getColleges()
    return () => {
      
    }
  }, [])

  const handleAccept = (e,action,college_id) => { 
console.log(action,college_id)

      const cnf=window.confirm("Are you sure to continue?")
      if(cnf){

        db.collection("colleges").doc(college_id).update({
          status:action
        }).then(res=>{
          
    alert(`College ${action}`)
   
      getColleges(  )
        })
     
      
      }
   }
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
                    variant='success'
                      onClick={               
                     (e)=>{  handleAccept(e,"accepted",item.college_id)}
                      }
                    >
                      {" "}
                      <Icon name="check" className="w-6 h-6" />
                    </Button>
                    <Button
                    className="ml-3"
                    variant="danger"
                      onClick={               
                     (e)=>{  handleAccept(e,"rejected",item.college_id)
                      }}
                    >
                      {" "}
                      <Icon name="x" className="w-6 h-6" />
                    </Button>
                  </td>
                
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    

    
    

  </DashboardLayoutAdmin>
  )
}

export default AdminCollegeReq