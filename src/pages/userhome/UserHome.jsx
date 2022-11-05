import './userhome.css'
import Posts from '../../components/posts/Posts'
import Post from '../../components/post/Post'

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
        <span className="slidetitle">Recent Posts</span>  
        <div className="slidePosts">
          <Post img="https://ca.cet.ac.in/wp-content/uploads/photo_2022-06-28_18-04-08-2.jpg " cat="placements" title="placed @ ZOHO"/>
          <Post img=" https://ca.cet.ac.in/wp-content/uploads/photo_2022-05-29_16-48-15-1-1024x700.jpg" cat="Activities"title="Technoverse"/>
          <Post img="https://ca.cet.ac.in/wp-content/uploads/photo_2022-05-17_12-33-32-3-1024x683.jpg" cat="celebrations" title="HOLI @2022"/>
          <Post img="https://ca.cet.ac.in/wp-content/uploads/photo_2022-05-17_12-34-00-1024x683.jpg"/>
        </div>
        <hr/>
    </div>
  )
}

export default UserHome