import React, {useState, useEffect} from 'react';
import './styles/Navbar.css';
import './styles/viewBlog.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaRegUser} from "react-icons/fa";
import {Link} from "react-router-dom";
import Axios from "axios";
const ViewProfile = ()=>{
    const[gotUser, setGotUser] = useState(false);
    useEffect(()=>{
        if(gotUser == false){
          console.log(JSON.parse(localStorage.getItem("axiosresponse"))[0].email);
          setGotUser(true);
        }
      })

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-custom bg-custom">
                <span><Link to="/Seventh"><img id = "logo" class='img' src="logo.png" alt="logo"/></Link></span>
                <div class="container-fluid">
                    <div class="navbar-nav">
                        <div id = "navcard" class="card mb-2">
                            <p id = "navbartext" style = {{color:'black',fontSize:'15px'}}>Welcome to your profile</p>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
};
      
export default ViewProfile;