import './topbar.css'
import { Link } from "react-router-dom";

function Topbar() {
  const user=true;
  return (
    <div className='top'>
      <div className="topleft">
        <i className="topIcons fa-brands fa-square-facebook"></i>
        <i className="topIcons fa-brands fa-square-instagram"></i>
        <i className="topIcons fa-brands fa-linkedin"></i>
      </div>
      <div className="topcenter">
        <ul className='topList'>
          <li className='TopListItem'>
            <Link className='link' to="/">HOME</Link>
          </li>
          <li className='TopListItem'><Link className='link' to="/">ABOUT</Link></li>
          <li className='TopListItem'><Link className='link' to="Posts">POSTS</Link></li>
          <li className='TopListItem'><Link className='link' to="/Contact">CONTACT</Link></li>
        </ul>
      </div>
      <div className="topright">
        <img className='topimg' src="https://ca.cet.ac.in/wp-content/uploads/CET_emb_MCA_v1.gif" alt="" />
        <p className='TopListItem'>LOGOUT</p>
      </div>
    </div>
  )
}

export default Topbar