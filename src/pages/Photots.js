import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { DashboardLayout } from "../components/Layout";
import {db,storage} from '../firebase-config';
import firebase from 'firebase/compat/app'

const Photos = () => {
  const college_id=window.localStorage.getItem('college_id');

  const [imageAsFile, setImageAsFile] = useState(null);

  const handleImageAsFile = (e) => {
    const image = e.target.files[0];
    setImageAsFile((imageFile) => image);
  };


  const handleSave =  (e,type) => {
    // console.log(addPostData);

    const uploadTask = storage
      .ref(`/${type}/${imageAsFile.name}`)
      .put(imageAsFile);

    uploadTask.on(
      "state_changed",
      (snapShot) => {
        //takes a snap shot of the process as it is happening
        console.log(snapShot);
      },
      (err) => {
        //catches the errors
        console.log(err);
      },
      async () => {
        // gets the functions from storage refences the image storage in firebase by the children
        // gets the download url then sets the image from firebase as the value for the imgUrl key:
        await storage
          .ref(`${type}`)
          .child(imageAsFile.name)
          .getDownloadURL()
          .then((fireBaseUrl) => {
            db.collection("colleges").doc(college_id).update
              ({ [type]:fireBaseUrl})
              .then((res) => {
                console.log(res);

                alert("Updated");

          window.location.reload()
              })
              .catch((err) => {
                alert("Error");
                console.log(err);
              });
          });
      }
    );
  };

  
  useEffect(() => {
  
 
    return () => {
      
    }
  }, [])




  return (
    <DashboardLayout>
      <div className="p-5">
        <h2 className="my-3">Upload Photos</h2>

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>College Cover</Form.Label>
        <Form.Control type="file"    onChange={handleImageAsFile} placeholder="Enter email" />

      </Form.Group>

      <div style={{justifyContent:"center",display:"flex",alignContent:"center"}}>
          <Button onClick={e=>handleSave(e,"cover")}> Save Cover</Button>
        </div>



        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>College Logo</Form.Label>
        <Form.Control type="file"    onChange={handleImageAsFile} placeholder="Enter email" />

      </Form.Group>





        <div style={{justifyContent:"center",display:"flex",alignContent:"center"}}>
          <Button onClick={e=>handleSave(e,"logos")}> Save Logo</Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Photos;
