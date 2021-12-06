import React, {useState, useEffect} from 'react';
import ViewBlog from './viewBlog';
import FileUpload from './FileUpload';
import Fifth from './Fifth'
import './styles/page2.css';
import './styles/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostBlogpic from '../photos/PostBlog.png';
import FindMatchespic from '../photos/FindMatches.png';
import Messagepic from '../photos/Message.png';
import {Link,useHistory} from "react-router-dom";
import { FaRegUser} from "react-icons/fa";
import Axios from "axios";


const Seventh =({handleLogout})=>{
        const[hasPosted, setHasPosted] = useState(null);
        const history = useHistory();
        const postOrViewBlog = (email) => {
            Axios.post("http://localhost:3001/hasPosted", {
                email: email,
              }).then((response) => {
                console.log(response.data[0].blog);
                if(response.data[0].blog != null && response.data[0].blog !=""){
                    setHasPosted(true);
                }else{
                    setHasPosted(false);
                }
              });
        };
        const userHasPosted = new Promise((resolve, reject) => {      
            if(hasPosted == true) {  
                resolve('Promise is resolved successfully.');  
            } else {    
                reject('Promise is rejected');  
            }
          });
          const userHasNotPosted = new Promise((resolve, reject) => {      
            if(hasPosted == false) {  
                resolve('Promise is resolved successfully.');  
            } else {    
                reject('Promise is rejected');  
            }
          });
          useEffect(()=>{
            userHasPosted.then((message) => {
                history.push("/viewBlog");
            });
            userHasNotPosted.then((message) => {
                history.push("/FileUpload");
            });
          })
        return(
            <div>
                <nav class="navbar navbar-expand-lg navbar-custom bg-custom">
                <span><Link to="/"><img id = "logo" class = 'img' src="logo.png" alt="logo"/></Link></span>
                <div class="container-fluid">
                    <div class="navbar-nav">
                        <div id = "navcard" class="card mb-2">
                            <div class="row g-0">
                                <div class="col-md-10">
                                </div>
                                <div class="col-md-2">
                                    {/*<button id = "investors" type="button">Investors</button>
                                    <button id = "startUps" type="button">Start-Ups</button>
                                    <Link to="/Login"><button id = "signUp" type="button" onClick={handleLogout}>Logout</button></Link>*/}
                                    <Link to="/Fifth"><button id = "accText" type="button">Account</button></Link>
                                    <Link to="/Fifth"><button id = "account" type="button"> <FaRegUser icon="fa-solid fa-coffee" size={25}></FaRegUser> </button></Link> 
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
                                <img id="investorIMG" src={PostBlogpic} class="card-img-top img" alt="PostBlogpic"/>
                                <h5 id="text" class="card-title">Create blog posts to connect with Investors and like-minded Businesses.</h5>
                                <button id="btnText" type="button" onClick={() => {postOrViewBlog(JSON.parse(localStorage.getItem("axiosresponse"))[0].email);}} class="btn btn-dark">Post Blog</button>
                            </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                        <div class="card h-100">
                            <div class="card-body">
                                <img id="startUpIMG" src={FindMatchespic} class="card-img-top img" alt="FindMatchespic"/>
                                <h5 id="text" class="card-title">Create your company profile and start your journey.</h5>
                                <Link to="/InvestorFilter"><button id="btnText" type="button" class="btn btn-dark">Find Matches</button></Link>
                            </div>
                        </div>
                        </div>
                        <div class="col-md-4">
                        <div class="card h-100">
                            <div class="card-body">
                                <img id="startUpIMG" src={Messagepic} class="card-img-top img" alt="Messagepic"/>
                                <h5 id="text" class="card-title">Edit your profile and keep it up to date to enhance engagement and find the best investor matches.</h5>
                                <Link to="/"><button id="btnText" type="button" class="btn btn-dark">Message </button></Link>
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