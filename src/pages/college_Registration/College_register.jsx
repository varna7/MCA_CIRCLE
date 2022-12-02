import { useState } from "react"
import "./collegeReg.css"
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import {db} from '../../firebase-config';
import { useNavigate,Link } from "react-router-dom";

function College_register() {
  const navigate=useNavigate()
  const auth=getAuth()
  const [regData, setRegData] = useState({})

  const handleChange = (e,type) => { 
    // ?console.log(e)
    setRegData({...regData,[type]:e.target.value})
   }

  const handleSubmit = () => { 
    createUserWithEmailAndPassword(auth,regData.hod_mail, regData.password)
    .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log(user)
    // alert("Sign Up Success")
    db.collection("colleges").add({...regData,status:"registered"}).then(res=>{
      console.log(res)
      alert("Successfully Registered.Later")
      // window.localStorage.setItem('college_id', res.id);
      // navigate("/dashboard-college/")
      setRegData({})
    }).catch(err=>console.log(err))
    // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.message.split(".")[0]);
      alert(error.message.split(".")[0]);
    // ..
    }); 
    console.log(regData)}
   
    return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <div>

      <div className="registerForm card bg-light p-5 ">
        <label>College name</label>
        <input className="registerInput" type="text" onChange={e=>handleChange(e,"college_name")} placeholder="Enter your college name..." />
        <label>HOD name</label>
        <input className="registerInput" type="text" onChange={e=>handleChange(e,"hod_name")} placeholder="Enter your name..." />
        <label>Email</label>
        <input className="registerInput" type="email" onChange={e=>handleChange(e,"hod_mail")} placeholder="Enter your email..." />
        <label>Password</label>
        <input className="registerInput" type="password" onChange={e=>handleChange(e,"password")} placeholder="Enter your password..." />
        <button className="registerButton" onClick={handleSubmit}>Register</button>
      </div>
      </div>
        <Link to="/login"><button className="registerLoginButton" >Login</button></Link>
    </div>
  )
}

export default College_register