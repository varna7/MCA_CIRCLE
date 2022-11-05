import { Link } from "react-router-dom";
import "./post.css";

function Post(props) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={props.img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Placements">
              {props.cat}
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
            {props.title}
          </Link>
        </span>
        <hr/>
        <span className="postDate">1 hour ago</span>
      </div>
    </div>
  );
}

export default Post