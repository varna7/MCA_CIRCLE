import Header from '../../components/header/Header'
import Topbar from '../../components/topbar/Topbar'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import ContactForm from '../../components/contactform/ContactForm'
import './collegeview.css'

function Collegeview() {
  return (
    <div>
        <Topbar/>
        <Header/>
        <div className="collegeView">
          <div className="left">
            <Posts/>
            <ContactForm/>
          </div>
          <Sidebar/>
        </div>
        
    </div>
  )
}

export default Collegeview