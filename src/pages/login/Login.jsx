import "./login.css";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { db, storage } from "../../firebase-config";
import { useNavigate,Link } from "react-router-dom";
import { useState } from "react";
import "react-bootstrap";

function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({});
  const auth = getAuth();
  const handleChange = (e, type) => {
    // ?console.log(e)
    setLoginData({ ...loginData, [type]: e.target.value });
  };

  const handleSubmit = () => {
    signInWithEmailAndPassword(auth, loginData.hod_mail, loginData.password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user);
        // alert("Sign Up Success")

        db.collection("colleges")
          .where("hod_mail", "==", loginData.hod_mail)
          .limit(1)
          .get()
          .then((res) => {
            console.log(res);
            res.forEach((item) => {
              console.log(item);
              if (item.data().status == "accepted") {
                window.localStorage.setItem("college_id", item.id);
                window.localStorage.setItem("type", "hod");
               // navigate("/dashboard-college/");
                window.location.href="/dashboard-college/"

                setLoginData({});
              }
              if (item.data().status == "admin") {
                window.localStorage.setItem("college_id", item.id);
                window.localStorage.setItem("type","admin");
                window.location.href="/dashboard-admin/"
                setLoginData({});
              }
              if (item.data().status == "blocked") {
                alert("Yout account is blocked");
              }
              if (item.data().status == "registered") {
                alert("Waiting for acceptence");
              }
            });

      
          })
          .catch((err) => {
            console.log(err);
          });
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error.message.split(".")[0]);
        alert(error.message.split(".")[0]);
        // ..
      });

    console.log(loginData);
  };
  return (
    <div className="login ">
      <span className="loginTitle">Login</span>
      <div>
        <div className="loginForm card bg-light p-5">
          <label>Email</label>
          <input
            className="loginInput"
            onChange={(e) => handleChange(e, "hod_mail")}
            type="email"
            placeholder="Enter your email..."
          />
          <label>Password</label>
          <input
            className="loginInput"
            type="password"
            onChange={(e) => handleChange(e, "password")}
            placeholder="Enter your password..."
          />
          <button className="loginButton" onClick={handleSubmit}>
            Login
          </button>
        </div>
      </div>
      <Link to="/college_register"><button className="loginRegisterButton">SignUp</button></Link>
    </div>
  );
}



export default Login;
