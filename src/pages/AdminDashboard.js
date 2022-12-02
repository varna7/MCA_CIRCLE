import React, { useEffect, useState } from 'react'
import Icon from 'awesome-react-icons'
import { Button ,Row,Col} from 'react-bootstrap'
import { DashboardLayout } from '../components/Layout'
import './college.css'
import { db } from '../firebase-config'
import { DashboardLayoutAdmin } from '../components/LayoutAdmin'

const AdminDashboard = () => {

  const [collegeData, setCollegeData] = useState({

  })
  const college_id=window.localStorage.getItem('college_id');
  // useEffect(() => {
  //   db.collection("colleges").doc(college_id).get().then(doc=>{
  //     console.log()

  //     if(doc.data()!=undefined)
  //     setCollegeData(doc.data())
  //   })
 
  //   return () => {
      
  //   }
  // }, [])
  return (
  <DashboardLayoutAdmin logo={collegeData?.logos}>
    <h1 className="text-center my-4">{collegeData?.college_name}</h1>
    <div style={{justifyContent:"center",alignContent:"center",display:"flex",height:"60vh",padding:"20px"}}>
    <img src={collegeData?.cover}>
    </img>
    </div>
    
    

  </DashboardLayoutAdmin>
  )
}

export default AdminDashboard