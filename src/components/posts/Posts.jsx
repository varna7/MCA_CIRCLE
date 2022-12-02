import Post from '../post/Post'

import './posts.css'

function Posts() {
  return (
    <div className='posts'> 
        
        <Post img="https://ca.cet.ac.in/wp-content/uploads/photo_2022-06-28_18-04-08-2.jpg " />
        <Post img=" https://ca.cet.ac.in/wp-content/uploads/photo_2022-05-29_16-48-15-1-1024x700.jpg"/>
        <Post img="https://ca.cet.ac.in/wp-content/uploads/photo_2022-05-17_12-33-32-3-1024x683.jpg"/>
        <Post img="https://ca.cet.ac.in/wp-content/uploads/photo_2022-05-17_12-34-00-1024x683.jpg"/>
    </div>
  )
}

export default Posts