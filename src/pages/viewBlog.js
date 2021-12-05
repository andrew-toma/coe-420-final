import React, {useState, useEffect} from 'react';
import './styles/Navbar.css';
import './styles/viewBlog.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Link} from "react-router-dom";
import Axios from "axios";

const ViewBlog = ()=>{
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
    return (
    <div>
           <nav class="navbar navbar-expand-lg navbar-custom bg-custom">
            <span><img id = "logo" src="logo.png" alt="logo"/></span>
            <div class="container-fluid">
            <div class="navbar-nav">
                <div id = "navcard" class="card mb-2">
                <div class="row g-0">
                    <div class="col-md-6">
                    </div>
                    <div class="col-md-6">
                    <button id = "investors" type="button">Investors</button>
                    <button id = "startUps" type="button">Start-Ups</button>
                    <button id = "about" type="button">About</button>
                    <Link to="/Login"><button id = "login" type="button">Log In</button></Link>
                    <Link to="/Second"><button id = "signUp" type="button">Sign Up</button></Link>
                    </div>
                </div>
                </div>
            </div>
            </div>
          </nav>
    <div id='imageView'>
       <img id='img' src = {getPicture(JSON.parse(localStorage.getItem("axiosresponse"))[0].email)} alt="preview image" />
       <h1 id = 'blogText'>{getPictureDescription(JSON.parse(localStorage.getItem("axiosresponse"))[0].email)}</h1>
    </div>
    </div>
  )
};
      
  export default ViewBlog;