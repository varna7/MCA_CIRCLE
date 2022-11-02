import './newpost.css'

function Newpost() {
  return (
    <div className='newpost'>
        <form action="" className="postform">
            <div className="postformgroup">
                <label htmlFor="fileInput">
                    <i className=" newIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}/>
                <input type="text" placeholder='Title' className='textInput' autoFocus={true}/>
                
            </div>
            <div className="postformContent">
                <input type="text" placeholder='Category' className='textInput'/>
                <textarea  className="postDesc" placeholder='Description'></textarea>
            </div>
            <button className="postButton">submit</button>
        </form>
    </div>
  )
}

export default Newpost