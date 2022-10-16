import './topbar.css'

function Topbar() {
  return (
    <div className='top'>
      <div className="topleft">
        <i className="topIcons fa-brands fa-square-facebook"></i>
        <i className="topIcons fa-brands fa-square-instagram"></i>
        <i className="topIcons fa-brands fa-linkedin"></i>
      </div>
      <div className="topcenter">
        <ul className='topList'>
          <li className='TopListItem'>HOME</li>
          <li className='TopListItem'>ABOUT</li>
          <li className='TopListItem'>POSTS</li>
          <li className='TopListItem'>CONTACT</li>
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