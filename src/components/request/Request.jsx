import './request.css'

function Request() {
  return (
    <div className='request'>
        <div className="college">
            <div className="leftItem">
                <img className='collegeLogo' src="https://ca.cet.ac.in/wp-content/uploads/CET_emb_MCA_v1.gif" alt="" />
                <span className="collegeName">College of engineering, trivandrum</span>
            </div>
            <div className="rightItem">
                <button className='view'>View</button>
                <button className='accept'>Accept</button>
                <button className='delete'>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default Request