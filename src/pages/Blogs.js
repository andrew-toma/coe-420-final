
import React, {useState, useEffect} from 'react';
import './styles/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import Axios from "axios";

const Blogs = ()=>{
  const [image, setImage] = useState(null);
  const[axiosresponse, setaxiosresponse] = useState(null);
  const[gotUser, setGotUser] = useState(false);

  useEffect(()=>{
    if(gotUser == false){
      setaxiosresponse(JSON.parse(localStorage.getItem("axiosresponse")));
      console.log(JSON.parse(localStorage.getItem("axiosresponse")));
      setGotUser(true);
    }
  })
  const onImageChange = (event) => {
   if (event.target.files && event.target.files[0]) {
     setImage(URL.createObjectURL(event.target.files[0]));
   }
  }
  
  return (
    <div>
      <input type="file" onChange={onImageChange} className="filetype" />
      <img src={image} alt="preview image" />
    </div>
  )
  }
      
  export default Blogs;

