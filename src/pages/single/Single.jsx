import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlepost/SinglePost";
import "./single.css";
import { db } from "../../firebase-config";
import moment from 'moment'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function Single() {
  let { id } = useParams();
  const [data, setData] = useState({})
  console.log(id)
  useEffect(() => {


  
    db.collection("posts").doc(id)

    .get()
    .then((doc) => {


setData(doc.data());

    });
    
    return () => {
      
    }
  }, [])
  console.log(data)
  return (
    <div className="single">
      <SinglePost data={data}/>
      {/* <Sidebar /> */}
    </div>
  );
}