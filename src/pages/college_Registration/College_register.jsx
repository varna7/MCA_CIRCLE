import "./collegeReg.css"

function College_register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>College name</label>
        <input className="registerInput" type="text" placeholder="Enter your college name..." />
        <label>HOD name</label>
        <input className="registerInput" type="text" placeholder="Enter your name..." />
        <label>Email</label>
        <input className="registerInput" type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input className="registerInput" type="password" placeholder="Enter your password..." />
        <button className="registerButton">Register</button>
      </form>
        <button className="registerLoginButton">Login</button>
    </div>
  )
}

export default College_register