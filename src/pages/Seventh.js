import React from "react";

import './styles/page2.css';
import './styles/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostBlogpic from '../photos/PostBlog.png';
import FindMatchespic from '../photos/FindMatches.png';
import EditProfilepic from '../photos/EditProfile.png';
import{Link} from "react-router-dom";

const Seventh =({handleLogout})=>{
        return(
            <div>
                <nav class="navbar navbar-expand-lg navbar-custom bg-custom">
                <span><img id = "logo" src="logo.png" alt="logo"/></span>
                <div class="container-fluid">
                    <div class="navbar-nav">
                        <div id = "navcard" class="card mb-2">
                            <div class="row g-0">
                                <div class="col-md-7">
                                </div>
                                <div class="col-md-5">
                                    <button id = "investors" type="button">Investors</button>
                                    <button id = "startUps" type="button">Start-Ups</button>
                                    <button id = "about" type="button">About</button>
                                    
                                    <Link to="/Login"><button id = "signUp" type="button" onClick={handleLogout}>Logout</button></Link> 
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
                                <img id="investorIMG" src={PostBlogpic} class="card-img-top" alt="..."/>
                                <h5 id="text" class="card-title">Create blog posts to connect with Investors and like-minded Businesses.</h5>
                                <Link to="/SignUp"><button id="btnText" type="button" class="btn btn-dark">Post Blog</button></Link>
                            </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                        <div class="card h-100">
                            <div class="card-body">
                                <img id="startUpIMG" src={FindMatchespic} class="card-img-top" alt="..."/>
                                <h5 id="text" class="card-title">Create your company profile and start your journey.</h5>
                                <Link to="/SignUp"><button id="btnText" type="button" class="btn btn-dark">Find Matches</button></Link>
                            </div>
                        </div>
                        </div>
                        <div class="col-md-4">
                        <div class="card h-100">
                            <div class="card-body">
                                <img id="startUpIMG" src={EditProfilepic} class="card-img-top" alt="..."/>
                                <h5 id="text" class="card-title">Edit your profile and keep it up to date to enhance engagement and find the best investor matches.</h5>
                                <Link to="/SignUp"><button id="btnText" type="button" class="btn btn-dark">Edit Profile</button></Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        )

}

export default Seventh;