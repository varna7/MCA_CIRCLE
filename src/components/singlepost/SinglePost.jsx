
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./singlepost.css";
import moment from 'moment'
function SinglePost(props) {



  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
      <div style={{justifyContent:"center",
    alignContent:"center",
    display:"flex"}}>
      <img
          className="singlePostImg"
          src={props.data.image}
          alt=""
        />
      </div>
        <h1 className="singlePostTitle">
          {props.data.title}
        </h1>
        <div className="singlePostInfo">
          <span>{moment(props.data.createdAt?.toDate()).fromNow()}</span>
          <span>{props.data.category}</span>
        </div>
        <p className="singlePostDesc">
          {props.data.desc}
          
        </p>
      </div>
    </div>
  
  )
}

export default SinglePost