import "./userhome.css";
import Posts from "../../components/posts/Posts";
import Post from "../../components/post/Post";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useEffect, useState } from "react";
import { db } from "../../firebase-config";
import moment from 'moment'
import { useNavigate,Link } from "react-router-dom";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { Button } from "react-bootstrap";
import { Carousel } from "react-bootstrap";




function UserHome() {
  const [postData, setPostData] = useState([]);
  const navigate=useNavigate();
  
  const college_id = window.localStorage.getItem("college_id");
  const userType = window.localStorage.getItem("type");

  const items = [
    {
      id: 0,
      name: 'Cobol'
    },
    {
      id: 1,
      name: 'JavaScript'
    },
    {
      id: 2,
      name: 'Basic'
    },
    {
      id: 3,
      name: 'PHP'
    },
    {
      id: 4,
      name: 'Java'
    }
  ]
  const [collegeData, setCollegeData] = useState([]);

  const getRecords = () => {  db.collection("colleges").where("status","==","accepted")
  .get()
  .then((doc) => {
    const elements = [];
    doc.forEach((item) => {
      elements.push({ id: item.id, ...item.data() });
    });

    setCollegeData(elements);
    
  }); }
const linkTo = () => { 

  if(userType=="admin"){
  return "/dashboard-admin"
 }
  else{
    return "/dashboard-college"
  }



}
  useEffect(() => {
    getRecords()
    console.log(collegeData)
 
     return () => {};
   }, []);
 
 
 

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item)
    navigate(`/Collegeview/${item.id}`)
   
  }

 

  const formatResult = (item) => {
    return (
      <>
       <div>
        
        
        <span style={{display: 'block', textAlign: 'left' }}>{item?.college_name}</span>
        
        </div>
      </>
    )
  }
  // useEffect(() => {
  //   db.collection("colleges")
      

  //     .get()
  //     .then((doc) => {

  //       const elements = [];
  //       doc.forEach((item) => {
  //         elements.push({ college_id: item.id, ...item.data() });
  //       });

  //       setCollegeData(elements);
  //     });

  //   return () => {};
  // }, [collegeData.length]);

  
  useEffect(() => {
    db.collection("posts")

      .get()
      .then((doc) => {
       

        const elements = [];
        doc.forEach((item) => {

          elements.push({ post_id: item.id, ...item.data() });
        });

        setPostData(elements);
      });

    return () => {};
  }, [postData.length]);



  return (
    <div className="userHome">
      <div className="uhomeTitle">
        <div className="mca fw-bold ml-5 ">MCA Circle</div>
        {college_id==""?<div>  <Link to="/login"><button className="homeLogin m-2 w-30 h-10" >Login</button></Link></div>:<Link to={linkTo()}><button className="homeLogin m-2 w-30 h-10" >Dashboard</button></Link>}

      </div>
   
        <Carousel>
        {collegeData.length == 0
            ? <Carousel.Item><img  alt="no_image" style={{width:"100%",height:"70vh",objectFit:"cover"}}></img></Carousel.Item>
            : collegeData.map((item, idx) => 
            { 
              return  <Carousel.Item><img src={item.cover} style={{width:"100%",height:"70vh",objectFit:"cover"}}></img></Carousel.Item>
            })
          }
        </Carousel>
     

      <div style={{justifyContent:"center",display:"flex",alignContent:"center"}}>
<div style={{width:"400px",zIndex:3}} className="my-4">
 
<ReactSearchAutocomplete
            items={collegeData}
            
            onSelect={handleOnSelect}
                      fuseOptions={{ keys: ["college_name"] }}
            resultStringKeyName="college_name"
            // styling={{width:"400px"}}
            placeholder="Seach Colleges"
            formatResult={formatResult}
          />

</div>

<div><Link to="/all-colleges"><Button style={{width:"auto",height:"50px", backgroundColor:"teal"}} className="all mt-4">View All College <i className="fa-solid fa-arrow-right"></i></Button></Link></div>


</div>
      <span className="slidetitle">Recent Posts</span>
      <div className="slidePosts">
        <OwlCarousel
          className="owl-theme owl-controls owl-dots"
        
          margin={10}
          nav
        >
       
          {postData.length == 0
            ? ""
            : postData.map((item, idx) => 
            { 
              return  <Post img={item.image} cat={item.category} title={item.title} onClick={()=>navigate(`/single/${item.post_id}`)} time={moment(item.createdAt?.toDate()).fromNow()} />
            })}
  
        </OwlCarousel>
        
      </div>
      <hr />


    </div>
  );
}

export default UserHome;
