import React, {useState, useEffect} from 'react';
import './styles/Navbar.css';
import './styles/viewBlog.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaRegUser} from "react-icons/fa";
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
                <span><img id = "logo" class = 'img' src="logo.png" alt="logo"/></span>
                <div class="container-fluid">
                    <div class="navbar-nav">
                        <div id = "navcard" class="card mb-2">
                            <div class="row g-0">
                                <div class="col-md-8">
                                </div>
                                <div class="col-md-4">
                                    {/*<button id = "investors" type="button">Investors</button>
                                    <button id = "startUps" type="button">Start-Ups</button>
                                    */}
                                    <Link to="/FileUpload"><button id = "delete" type="button" >Delete</button></Link>
                                    <Link to="/FileUpload"><button id = "update" type="button" >Update</button></Link>
                                    <button id = "accText" type="button">Account</button>
                                    <Link to="/Fifth"><button id = "account" type="button"> <FaRegUser icon="fa-solid fa-coffee" size={25}></FaRegUser> </button></Link> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </nav> 
    <div id='imageView'>
       <img class = 'img' id='img' src = {getPicture(JSON.parse(localStorage.getItem("axiosresponse"))[0].email)} alt="preview image" />
       <h1 id = 'blogText'>{getPictureDescription(JSON.parse(localStorage.getItem("axiosresponse"))[0].email)}</h1>
    </div>
    </div>
  )
};
      
  export default ViewBlog;

