import React, { useEffect, useState } from "react";
import { DashboardLayout } from "../components/Layout";
import { Table, Button, Modal } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import "./newpost/newpost.css";
import Icon from "awesome-react-icons";
import firebase from 'firebase/compat/app'
import { app, db, storage } from "../firebase-config";


function PostTable() {
  const college_id = window.localStorage.getItem("college_id");
  const navigate = useNavigate();
  const [addPostData, setAddPostData] = useState({
    title: "",
    category: "",
    desc: "",
    image: "",
    college_id: college_id,
  });
const [editData, setEditData] = useState({})
  const [postData, setPostData] = useState([]);


  
  useEffect(() => {
    db.collection("posts")
      .where("college_id", "==", college_id)
      .get()
      .then((doc) => {
        console.log();

        const elements = [];
        doc.forEach((item) => {
          elements.push({post_id:item.id,...item.data()});
        });

        setPostData(elements);
      });

    return () => {};
  }, []);
  
  const [imageAsFile, setImageAsFile] = useState(null);
  const handleChange = (e, type,mode=false) => {

    if(mode==false)
    setAddPostData({ ...addPostData, [type]: e.target.value });
    else
    setEditData({ ...editData, [type]: e.target.value });
    console.log(addPostData);
  };


  const handleImageAsFile = (e) => {
    const image = e.target.files[0];
    setImageAsFile((imageFile) => image);
  };
  const handleSumbit = async () => {
    console.log(addPostData);

    const uploadTask = storage
      .ref(`/images/${imageAsFile.name}`)
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
          .ref("images")
          .child(imageAsFile.name)
          .getDownloadURL()
          .then((fireBaseUrl) => {
            db.collection("posts")
              .add({ ...addPostData, image: fireBaseUrl ,createdAt:firebase.firestore.FieldValue.serverTimestamp()})
              .then((res) => {
                console.log(res);

                alert("Updated");

                handleClose();
                setAddPostData({
                  title: "",
                  category: "",
                  desc: "",
                  image: "",
                  college_id: college_id,
                });
                // setRegData({})
              })
              .catch((err) => {
                alert("Error");
                console.log(err);
              });
          });
      }
    );
  };
  const handleSumbitEdit =  (post_id) => {
    
    console.log(editData);
if (imageAsFile!=null)

{
  const uploadTask = storage
    .ref(`/images/${imageAsFile.name}`)
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
        .ref("images")
        .child(imageAsFile.name)
        .getDownloadURL()
        .then((fireBaseUrl) => {
          db.collection("posts")
            .doc(post_id).update({...editData,image:fireBaseUrl})
            .then((res) => {
              console.log(res);

              alert("Updated with image");

              handleClose();
              setEditData({
               
              });
              setImageAsFile(null)
              window.location.reload()
              // setRegData({})
            })
            .catch((err) => {
              alert("Error");
              console.log(err);
            });
        });
    }
  );}


  else{
    db.collection("posts")
    .doc(post_id).update({...editData,createdAt:firebase.firestore.FieldValue.serverTimestamp()})
    .then((res) => {
    

      alert("Updated");

      handleClose();
      setEditData({
       
      });
      // setRegData({})
      window.location.reload()
    })
  }
  };
  

  const handleDelete = (post_id) => { 


    db.collection("posts")
    .doc(post_id).delete()
    .then((res) => {
      console.log(res);

      alert("Deleted");

    
    window.location.reload()
    
    })
    .catch((err) => {
      alert("Error");
      console.log(err);
    });
   }
  const [showAdd, setShowAdd] = useState(false);

  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addPostModal = () => {
    return (
      <>
        <Modal show={showAdd} onHide={handleCloseAdd}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="newpost">
              <div action="" className="postform">
                <div className="postformgroup">
                  <label htmlFor="fileInput">
                    <i className=" newIcon fa-solid fa-plus"></i>
                  </label>
                  <input
                    type="file"
                    id="fileInput"
                    onChange={handleImageAsFile}
                    style={{ display: "" }}
                  />
                  <input
                    type="text"
                    placeholder="Title"
                    onChange={(e) => handleChange(e, "title")}
                    className="textInput"
                    autoFocus={true}
                  />
                </div>
                <div className="postformContent">
                  <input
                    type="text"
                    placeholder="Category"
                    onChange={(e) => handleChange(e, "category")}
                    className="textInput"
                  />
                  <textarea
                    className="postDesc"
                    onChange={(e) => handleChange(e, "desc")}
                    placeholder="Description"
                  ></textarea>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseAdd}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleSumbit}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };

  const editPostModal = (data) => {
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {console.log(data)}
            <div className="newpost">
              <div action="" className="postform">
                <div className="postformgroup">
                  <label htmlFor="fileInput">
                    <i className=" newIcon fa-solid fa-plus"></i>
                  </label>

                  <input
                    type="file"
                    id="fileInput"
                    onChange={handleImageAsFile}
                    style={{ display: "" }}
                  />
          <img src={data.image} style={{width:"300px",height:"300px"}}>
          </img>
                  <input
                    type="text"
                    placeholder="Title"
                    value={data.title}
                    onChange={(e) => handleChange(e, "title",true)}
                    className="textInput"
                    autoFocus={true}
                  />
                </div>
                <div className="postformContent">
                  <input
                    type="text"
                    placeholder="Category"
                    value={data.category}
                    onChange={(e) => handleChange(e, "category",true)}
                    className="textInput"
                  />
                  <textarea
                    className="postDesc"
                    value={data.desc}
                    onChange={(e) => handleChange(e, "desc",true)}
                    placeholder="Description"
                  ></textarea>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={e=>handleSumbitEdit(data.post_id)}>
              Update
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };

  return (
    <DashboardLayout>
      {addPostModal()}
      {    editPostModal(editData)}
      <h2 className="m-4 ">All Posts</h2>
      <Button variant="primary" className="mx-4 " onClick={handleShowAdd}>
        Add Post
      </Button>
      <div className="p-4">
        <Table striped bordered hover className="p-5">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Category</th>
              {/* <th>Description</th> */}
             
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {postData.map((item, idx) => {
              return (
                <tr>
                  <td>{idx + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.category}</td>
                  {/* <td>{item.desc}</td> */}
                  <td>
                    <Button
                      onClick={               
                     ()=>{   handleShow();
                      setEditData(item)}
                      }
                    >
                      {" "}
                      <Icon name="edit-pencil-simple" className="w-6 h-6" />
                    </Button>
                    <Button
                    className="ml-3"
                    variant="danger"
                      onClick={               
                     ()=>{  handleDelete(item.post_id)
                      }}
                    >
                      {" "}
                      <Icon name="trash" className="w-6 h-6" />
                    </Button>
                  </td>
                
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </DashboardLayout>
  );
}

export default PostTable;
