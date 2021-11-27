
import React, {useState, useEffect} from 'react';
import './styles/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import Axios from "axios";

const Blogs = ()=>{
  const [image, setImage] = useState(null)

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
