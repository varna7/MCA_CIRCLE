import './header.css'

function Header(props) {


  
  return (
    <div className='header'>
        <div className="headertitle">
            <span className='haedertitlesm my-2'>{props.name}</span>
            <span className="headertitlelg my-5">Department of Computer Applications</span>
        </div>
        <img src={props.image} alt="" className="headerImg" />
    </div>
  )
}

export default Header
