import './userhome.css'
import Posts from '../../components/posts/Posts'

function UserHome() {
  return (
    <div className='userHome'>
        <div className="uhomeTitle">
          <span>MCA Circle</span>
        </div>
        <div className="uhomeHeader" >
          <div className="searchbar">
            <input type="text" />
            <i className=" searchIcon fa-solid fa-magnifying-glass"></i>
          </div>
          <span className="clg_name">College of Engineering, Trivandrum</span>
        </div>  
        <Posts/>
    </div>
  )
}

export default UserHome