import Header from "../../components/header/Header";
import Topbar from "../../components/topbar/Topbar";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import ContactForm from "../../components/contactform/ContactForm";
import "./collegeview.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../../firebase-config";
import Post from "../../components/post/Post";
import moment from "moment";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Card, Tabs } from "react-bootstrap";

function Collegeview() {
  let { id } = useParams();


  const navigate = useNavigate();

  const [postData, setPostData] = useState([]);
  const [collegeData, setCollegeData] = useState({});
  console.log(id);

  useEffect(() => {
    db.collection("posts")
      .where("college_id", "==", id)

      .get()
      .then((doc) => {
        console.log();

        const elements = [];
        doc.forEach((item) => {
          elements.push({ post_id: item.id, ...item.data() });
        });

        setPostData(elements);
      });

    return () => {};
  }, [postData.length]);

  useEffect(() => {
    db.collection("colleges")
      .doc(id)

      .get()
      .then((doc) => {
        setCollegeData(doc.data());
      });

    return () => {};
  }, []);
  
  console.log(collegeData);
  const printInfra = (data) => {
    const obj={
      "softLab":"Software Lab",
      "projectLab":"Project Lab",
      "seminarHall":"Seminar Hall",
      "indoor":"Indoor",
      "library":"Library",
      "other":" "
    }
    let rows = [];
    for (let [key, value] of Object.entries(data)) {
      if (value) rows.push(<Card.Text>{obj[key]}</Card.Text>);
    }
    return rows;
  };



  return (
    <div>
      {/* <Topbar /> */}
      <Header name={collegeData?.college_name} image={collegeData?.cover} />
      <div className="collegeView">
        <div className="m-3">
          <OwlCarousel
            className="owl-theme owl-controls owl-dots"
            margin={10}
            nav
          >
            {console.log(postData)}
            {postData.length == 0
              ? ""
              : postData.map((item, idx) => {
                  console.log(moment(item.createdAt?.toDate()).fromNow());
                  return (
                    <Post
                      img={item.image}
                      cat={item.category}
                      title={item.title}
                      onClick={() => navigate(`/single/${item.post_id}`)}
                      time={moment(item.createdAt?.toDate()).fromNow()}
                    />
                  );
                })}
          </OwlCarousel>
        </div>
        <hr/>
        <div className="m-4">
          <div className="fw-bold">Basic Details</div>

          <div className="py-3 d-flex">
            <Card varient={""} style={{ width: "36rem" }} className="mx-3">
              <Card.Body>
                <Card.Header className="fw-bold">Vision</Card.Header>
                {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                <Card.Text className="p-2">{collegeData?.general?.vision}</Card.Text>
                {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
              </Card.Body>
            </Card>
            <Card style={{ width: "36rem" }} className="mx-3">
              <Card.Body>
                <Card.Header className="fw-bold">Mission</Card.Header>
                {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                <Card.Text className="p-2">{collegeData?.general?.mission}</Card.Text>
                {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
              </Card.Body>
            </Card>
          </div>

          <div className="py-3 d-flex">
            <Card style={{ width: "18rem" }} className="mx-3">
              <Card.Body className="m-0 ">
                <Card.Header className="fw-bold">University</Card.Header>
                {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                <Card.Text className="m-0 p-2">
                  {collegeData?.general?.university}
                </Card.Text>
                {/* <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link> */}
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }} className="mx-3">
              <Card.Body className="m-0 ">
                <Card.Header className="fw-bold">District</Card.Header>
                {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                <Card.Text className="m-0 p-2">
                  {collegeData?.general?.district}
                </Card.Text>
                {/* <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link> */}
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }} className="mx-3">
              <Card.Body className="m-0 ">
                <Card.Header className="fw-bold">Accreditation</Card.Header>
                {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                <Card.Text className="m-0 p-2">
                  {collegeData?.general?.accr}
                </Card.Text>
                {/* <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link> */}
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }} className="mx-3">
              <Card.Body className="">
                <Card.Header  className="fw-bold">Type</Card.Header>
                {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                <Card.Text className="m-0 p-2">
                  {collegeData?.general?.type}
                </Card.Text>
                {/* <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link> */}
              </Card.Body>
            </Card>
          </div>

          <div className="py-3 d-flex">
            <Card style={{ width: "36rem" }} className="mx-3 ">
              <Card.Body >
                <Card.Header className="fw-bold">Placements</Card.Header>
                {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                <Card.Text className="pl-2 pt-2">
                  Total Placement:{collegeData?.basic?.placements}
                </Card.Text>
                <Card.Text className="pl-2">Avg CTC:{collegeData?.basic?.ctc}</Card.Text>
                <Card.Text className="pl-2">Recruiters: {collegeData?.basic?.recr}</Card.Text>
                {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
              </Card.Body>
            </Card>
            <Card style={{ width: "36rem" }} className="mx-3">
              <Card.Body>
                <Card.Header className="fw-bold">Infrastructure</Card.Header>
                {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                {console.log(collegeData?.basic?.infrastructure?.indoor)}
                <Card.Text className="p-2">
                  {collegeData?.basic &&
                    printInfra(collegeData?.basic?.infrastructure)}
                </Card.Text>
                {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
              </Card.Body>
            </Card>
          </div>
        </div>
        

       
        <footer className="bg-light p-1">
          <section>
          <h1 className="my-4 mx-5 fw-bold text-center">Contact Us</h1>
          <div className="ml-10 mb-5 justify-content-center" style={{display:"flex"}}>
            <h3 className="mx-5" ><i className="fa-solid fa-globe mx-1"></i><a href={collegeData?.general?.website}>{collegeData?.general?.website}</a></h3>
            <h3 className="mx-5"><i className="fa-solid fa-envelope mx-1"></i><a href={`mailto:${collegeData?.hod_mail}`}>{collegeData?.hod_mail}</a></h3>
            <h3 className="mx-5"><i className="fa-solid fa-phone mx-1"></i> {collegeData?.general?.phone}</h3>
          </div>

          </section>
        </footer>

        {/* <ContactForm  /> */}
        {/* <Sidebar/> */}
      </div>
    </div>
  );
}

export default Collegeview;
