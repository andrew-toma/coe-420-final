import React, {useState, useEffect} from 'react';
import viewBlog from './viewBlog';
import FileUpload from './FileUpload';
import './styles/page2.css';
import './styles/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostBlogpic from '../photos/PostBlog.png';
import FindMatchespic from '../photos/FindMatches.png';
import Messagepic from '../photos/Message.png';
import {Link,useHistory} from "react-router-dom";
import Axios from "axios";
import { FaRegUser} from "react-icons/fa";

const Eighth =({handleLogout})=>{
        return(
            <div>
                <nav class="navbar navbar-expand-lg navbar-custom bg-custom">
                <span><Link to="/"><img id = "logo" class = 'img' src="logo.png" alt="logo"/></Link></span>
                <div class="container-fluid">
                    <div class="navbar-nav">
                        <div id = "navcard" class="card mb-2">
                            <div class="row g-0">
                                <div class="col-md-9">
                                </div>
                                <div class="col-md-3">
                                    <Link to="/Login"><button id = "signUp" type="button" onClick={handleLogout} style={{marginRight:'8px'}}>Logout</button></Link> 
                                    <Link to="/Sixth"><button id = "accText" type="button">Account</button></Link>
                                    <Link to="/Sixth"><button id = "account" type="button"> <FaRegUser icon="fa-solid fa-coffee" size={25}></FaRegUser> </button></Link>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </nav> 
                <h3 id="header" class="mb-5">What would you like to do?</h3>
                <div Style = "width : 90%; margin-left: auto; margin-right: auto;">
                    <div id = "navcard" class="card mb-2">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <div class="card h-100">
                            <div class="card-body">
                                <img id="investorIMG" src={PostBlogpic} class="card-img-top" alt="ViewBlogpic"/>
                                <h5 id="text" class="card-title">View blog posts to connect with Investors and like-minded Businesses.</h5>
                                <Link to="/Form"><button id="btnText" type="button" class="btn btn-dark">View Blogs</button></Link>
                            </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                        <div class="card h-100">
                            <div class="card-body">
                                <img id="startUpIMG" src={FindMatchespic} class="card-img-top img" alt="FindMatchespic"/>
                                <h5 id="text" class="card-title">Expand your horizen. Revolutionize how you discover and track verified startups.</h5>
                                <Link to="/StartUpFilter"><button id="btnText" type="button" class="btn btn-dark">Find Matches</button></Link>
                            </div>
                        </div>
                        </div>
                        <div class="col-md-4">
                        <div class="card h-100">
                            <div class="card-body">
                                <img id="startUpIMG" src={Messagepic} class="card-img-top" alt="Messagepic"/>
                                <h5 id="text" class="card-title">Edit your profile and keep it up to date to enhance engagement and find the best investor matches.</h5>
                                <Link to="/Message"><button id="btnText" type="button" class="btn btn-dark">Message </button></Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        )

}

export default Eighth;
