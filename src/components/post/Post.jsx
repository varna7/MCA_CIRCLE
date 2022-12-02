import { Link } from "react-router-dom";
import "./post.css";

function Post(props) {
  return (
    <div className="post" onClick={props.onClick}>
      <img
        className="postImg"
        src={props.img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
         
              {props.cat}
          
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
            {props.title}
          </Link>
        </span>
        <hr/>
        <span className="postDate">{props.time}</span>
      </div>
    </div>
  );
}

export default Post