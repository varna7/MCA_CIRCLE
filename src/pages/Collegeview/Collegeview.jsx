import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import './collegeview.css'

function Collegeview() {
  return (
    <div>
        <Header/>
        <div className="collegeView">
          <Posts/>
          <Sidebar/>
        </div>
    </div>
  )
}

export default Collegeview