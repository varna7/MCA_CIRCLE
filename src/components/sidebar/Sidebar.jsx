import './sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebaritem">
            <span className="sidebarTitle">ABOUT</span>
            <img className='sidebarImg' src="https://ca.cet.ac.in/wp-content/uploads/edit3-min.jpg" alt="" />
            <p className="sidebartext">Lorem ipsum dolor sit amet, consectetur quod  vitae illo odit 
            laudantium necessitatibus dolorem enim, nobis perspiciatis? Sint rerum cum voluptatem laborum.</p>
        </div>
        <div className="sidebaritem">
          <span className="sidebarTitle">Mission</span>
          <p className="sidebartext">Lorem ipsum dolor sit amet, consectetur quod  vitae illo odit 
            laudantium necessitatibus dolorem enim, nobis perspiciatis? Sint rerum cum voluptatem laborum.</p>
        </div>
        <div className="sidebaritem">
          <span className="sidebarTitle">Vision</span>
          <p className="sidebartext">Lorem ipsum dolor sit amet, consectetur quod  vitae illo odit 
            laudantium necessitatibus dolorem enim, nobis perspiciatis? Sint rerum cum voluptatem laborum.</p>
        </div>
        <div className="sidebaritem">
            <span className="sidebarTitle">CATEGORY</span>
            <ul className="sidebarlist">
                <li className="listitem">Events</li>
                <li className="listitem">Activities</li>
                <li className="listitem">Placements</li>
                <li className="listitem">Achievments</li>

            </ul>
        </div>
    </div>
  )
}

export default Sidebar