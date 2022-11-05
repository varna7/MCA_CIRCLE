import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'

import './home.css'

function Home() {
  return (
    <div>
        <Header/>
        <div className="addNew">
            <i className=" fa-duotone fa-plus"></i>
            <span>Add New</span>
        </div>
        <div className="home">
          
          <Posts/>
          <Sidebar/>
          
        </div>
    </div>
  )
}

export default Home