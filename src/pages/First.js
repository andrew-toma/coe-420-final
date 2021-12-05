import React, {useState} from "react";


import './styles/Navbar.css';
import './styles/page1.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Startpic from '../photos/start.png';
import {Link} from "react-router-dom";

const First=()=>{

        return(
           
        <div>
          <nav class="navbar navbar-expand-lg navbar-custom bg-custom">
          <Link to="/"><img id = "logo" src="logo.png" alt="logo"/></Link>
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
            <div id = "bodycard" class="card mb-2">
                <div id = "row2" class="row g-0">
                <div class="col-md-5">
                    <div class="card-body">
                    <h5 id = "motto" class="card-title">Build yourself a great story</h5>
                    <p id = "mottodesc" class="card-text">Suits Up helps start-ups and investors to build trust and grow big together.</p>
                    <Link to="/Second"><button id = "getStarted" >Get Started</button></Link>
                    </div>
                </div>
                <div class="col-md-1">
                </div>
                <div class="col-md-6">
                    <img id = "startpicture" src={Startpic} class="img-fluid rounded-start" alt="startpicture"/>
                </div>
                </div>
            </div>
            
        </div>
        
        )

    
}

export default First;