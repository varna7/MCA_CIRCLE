import "./userhome/userhome.css";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useEffect, useState } from "react";
import { db } from "../firebase-config";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { Button, Card, Col, Row, Table } from "react-bootstrap";

function ViewAllColleges() {
  const [postData, setPostData] = useState([]);
  const navigate = useNavigate();

  const [collegeData, setCollegeData] = useState([]);
  const [compareData, setCompareData] = useState({
    collegeOne: null,
    collegeTwo: null,
  });

  const getRecords = () => {
    db.collection("colleges")
      .where("status", "==", "accepted")
      .get()
      .then((doc) => {
        const elements = [];
        doc.forEach((item) => {
          elements.push({ id: item.id, ...item.data() });
        });

        setCollegeData(elements);
      });
  };

  useEffect(() => {
    getRecords();

    return () => {};
  }, []);

  const getCollegeSingle = async (id, number) => {


    console.log("Hello",number)
    await db.collection("colleges")
      .doc(id)
      .get()
      .then((doc) => {
        console.log(doc.data());
        setCompareData({
          ...compareData,
          [number]: {
            id: id,

            ...doc.data(),
          },
        });
      });
      console.log("Added to Compare")
  };

  const addToCompare = (id) => {
console.log(id)

    let mode=compareData.collegeOne==null?"collegeOne":"collegeTwo";
   console.log(mode)
    getCollegeSingle(id,mode);


console.log(compareData)
  };


  const referCard={
    
    college_name:"College Name",
    general:{
      university:"University",
      district:"District",
      type:"Type",
      accr:"Accreditation",
      website:"Website",

    },
    basic:{
      intake:"Intake",
      mode:"Mode of Intake",
      placements:"No of placements",
      ctc:"Average CTC",
      pass:"Pass percentage",
      recr:"Top Recruiters"
    },
    logos:null
  }

  const printCompareCard = (data) => { return  <Card>
    <div className="my-2" style={{justifyContent:'center',alignContent:"center",display:"flex",height:"100px"}}>
{data.logos!=null  &&     <img variant="top" style={{borderRadius:"50px",width:"75px",height:"75px"}} className="" src=  {data.logos} />
}
      <Card.Title className="px-4 py-2 text-center">  {data.college_name}</Card.Title>
    </div>
  

      <Card.Footer>
      {data.general?.district  }

    </Card.Footer>
    <Card.Footer>
      {data.general?.university  }
    </Card.Footer>
    <Card.Footer>
      {data.general?.type  }
    </Card.Footer>
    <Card.Footer>
      {data.general?.accr  }
    </Card.Footer>
    <Card.Footer>
      {data.basic?.intake  }
    </Card.Footer>
    <Card.Footer>
      {data.basic?.mode  }
    </Card.Footer>
    <Card.Footer>
      {data.basic?.pass  }
    </Card.Footer>
    <Card.Footer>
      {data.basic?.placements  }
    </Card.Footer>
    <Card.Footer>
      {data.basic?.ctc  }
    </Card.Footer>
    <Card.Footer>
      {data.basic?.recr  }
    </Card.Footer>
    <Card.Footer>
      {data.general?.website  }
    </Card.Footer>
    
  
  
    {data.id&&   <Card.Footer className="text-center">
   

  <Button variant="primary" onClick={e=>navigate(`/Collegeview/${data.id}`)}>View</Button>
  

    </Card.Footer>
  }
  </Card> }
  return (
    <div className="userHome">
      <div className="uhomeTitle">
        <span className="fw-bold">MCA Circle</span>
      </div>
      {/* <div className="uhomeHeader">
  
        <span className="clg_name">College of Engineering, Trivandrum</span>
      </div>  */}

      <hr />

      {/* 
<Row className="m-5">
{collegeData.length==0?"":collegeData.map((item,idx)=>{
  return      <Col>
  <Card>
  <Card.Img variant="top" src={item?.cover} alt="No image" />
  <Card.Title>{item?.college_name}</Card.Title>
  <Card.Body>
  <Button variant="primary" onClick={e=>navigate(`/Collegeview/${item.id}`)}>View</Button>
  </Card.Body>
</Card></Col>
})}
</Row> */}

      <Row style={{ height: "100vh" }}>
        <Col
          sm={2}
          style={{ borderRight: "1px solid black", paddingRight: "0px  " }}
        >
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Search</th>
              </tr>
            </thead>
            <tbody>
              {collegeData.length == 0
                ? ""
                : collegeData.map((item, idx) => {
                    return (
                      <tr onClick={(e) => addToCompare(item.id)}>
                     
                        <td>{item.college_name}</td>
                      </tr>
                    );
                  })}
              <tr></tr>
            </tbody>
          </Table>
        </Col>
        <Col>
          <h2 className="fw-bold m-3">Compare Now..</h2>
          <Row style={{ justifyContent: "center", alignContent: "center" }}>
          <Col sm={3}>
              {" "}
          {
            compareData.collegeOne!==null &&    printCompareCard(referCard)
          }
            </Col>
            <Col sm={3}>
              {" "}
          {
            compareData.collegeOne!==null &&    printCompareCard(compareData.collegeOne)
          }
            </Col>
            <Col sm={3}>

            {
            compareData.collegeTwo!==null &&  printCompareCard(compareData.collegeTwo)
            }
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default ViewAllColleges;
