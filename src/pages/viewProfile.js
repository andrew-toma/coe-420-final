import React, {useState, useEffect} from 'react';
import './styles/Navbar.css';
import './styles/viewBlog.css';
import './styles/viewProfile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaRegUser} from "react-icons/fa";
import {Link} from "react-router-dom";
import Axios from "axios";

const ViewProfile = ()=>{
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
            <div class="container d-flex justify-content-center align-items-center">
            <div class="cardview">

                <div class="mt-5 text-center">
                    <h4 class="mb-0">{JSON.parse(localStorage.getItem("axiosresponse"))[0].firstName} {JSON.parse(localStorage.getItem("axiosresponse"))[0].lastName}</h4>
                    <button style = {{marginLeft : "auto", marginRight : "auto"}} class="btn btn-primary btn-sm follow">Message</button>
                    <div class="d-flex justify-content-between align-items-center mt-4 px-4">
                        <div class="stats">
                            <h6 class="mb-0">Company</h6 > <span class="mb-0" id="statsDesc">{JSON.parse(localStorage.getItem("axiosresponse"))[0].companyWebsite}</span>
                            {console.log(JSON.parse(localStorage.getItem("axiosresponse"))[0].companyWebsites)}
                        </div>
                        <div class="stats">
                            <h6 class="mb-0">Industry</h6> <span class="mb-0" id="statsDesc">{JSON.parse(localStorage.getItem("axiosresponse"))[0].industryName}</span>
                        </div>
                        <div class="stats">
                            <h6 class="mb-0">Emirate</h6> <span class="mb-0" id="statsDesc">{JSON.parse(localStorage.getItem("axiosresponse"))[0].emirateName}</span>
                        </div>
                    </div>
                    <div class = "stats" id = "companyDesc">{JSON.parse(localStorage.getItem("axiosresponse"))[0].companyDesc}</div>
                    
                    <div class="mb-0" id="footer">Company has {JSON.parse(localStorage.getItem("axiosresponse"))[0].numofPeople}</div>

                </div>
            </div>
        </div>
    </div>
    )
};
      
export default ViewProfile;