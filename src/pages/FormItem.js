import React, { useState, useRef, useEffect, useCallback } from 'react';
import {ViewForm} from './ViewForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Navbar.css';
import './styles/viewBlog.css';
import Axios from "axios";

const FormItem = ({ val }) => {
  const [showModal, setShowModal] = useState(false);
  const [picturePath, setPicturePath] = useState("");
const [PictureDescription, setPictureDescription] = useState("");
const getPicture = (email) => {
    Axios.post("http://localhost:3001/hasPosted", {
        email: email,
      }).then((response) => {
        console.log(response.data[0].blog);
        setPicturePath("/uploads/"+response.data[0].blog);
      });
      return (picturePath) ;

};
const getPictureDescription = (email) => {
  Axios.post("http://localhost:3001/getPictureDescription", {
      email: email,
    }).then((response) => {
      console.log(response.data[0].blogText);
      setPictureDescription(response.data[0].blogText);
    });
    return (PictureDescription) ;

};
const openModal = () => {
setShowModal(prev => !prev);
};

return (
<div className="col-sm-12" style = {{height:'800px'}}>
  <div className="card my-2" style = {{height:'100%', border:"none"}}>
    <img class = 'img' id='img' style = {{height:'50%'}}src={getPicture(val.email)}className="card-img-top" alt="AvatarPic" />
    {console.log(val)}
    <div style = {{height:'10%', marginRight: "auto", marginLeft:"auto", marginTop:"10px"}}>
    <button id = "sort" type="button" onClick={openModal}>View Profile</button>
    <ViewForm val={val} showModal={showModal} setShowModal={setShowModal}/>
    </div>
    <div className="card-body" style = {{height:'40%',border:"none"}}>
      <h1 id = 'blogText'>{getPictureDescription(val.email)}</h1>
    </div>

  </div>
</div>
);

};

export default FormItem;