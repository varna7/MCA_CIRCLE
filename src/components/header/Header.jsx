import './header.css'

function Header() {
  return (
    <div className='header'>
        <div className="headertitle">
            <span className='haedertitlesm'>College of Engineering, Trivandrum</span>
            <span className="headertitlelg">Department of Computer Applications</span>
        </div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw41ZehMJe8kBbIx6HTSakfaGn73lA4vo94Q&usqp=CAU" alt="" className="headerImg" />
    </div>
  )
}

export default Header
