import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import './styles/Navbar.css';
import './styles/page1.css';
import './styles/page2.css';
import Startuppic from '../photos/start-up.png';
import Investorpic from '../photos/investor.png';
const AboutUs = () => {
    
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-custom bg-custom">
                <span><Link to="/"><img id = "logo" src="logo.png" alt="logo"/></Link></span>
                <div class="container-fluid">
                    <div class="navbar-nav">
                        <div id = "navcard" class="card mb-2">
                            <div class="row g-0">
                                <div class="col-md-6">
                                </div>
                                <div class="col-md-6">
                                    <Link to="/InvestorsNav"><button id = "investors" type="button">Investors</button></Link>
                                    <Link to="/StartupsNav"><button id = "startUps" type="button">Start-Ups</button></Link>
                                    <Link to="/AboutUs"><button id = "about" type="button">About</button></Link>
                                    <Link to="/Login"><button id = "login" type="button">Log In</button></Link>
                                    <Link to="/Second"><button id = "signUp" type="button">Sign Up</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </nav>

                <h1 id="header1">About Us</h1>
                <h3 id="header2" class="mb-5">Making it accessible, easy, efficient and fun</h3>
                <div id = "navcard" class="card mb-2">
                 <div class="row g-0">
                    <div class="col-md-3">
                    </div>
                        <div class="col-md-3">
                        <div class="card h-100">
                        <div class="card-body">
                            <img id="investorIMG" src={Investorpic} class="card-img-top img" alt="investorIMG"/>
                            <h5 id="text" class="card-title">We help you find the perfect investments</h5>
                            <Link to="/InvestorsSignUp"><button id="btnText" type="button" class="btn btn-dark">Investor</button></Link>
                        </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <img id="startUpIMG" src={Startuppic} class="card-img-top img" alt="startUpIMG"/>
                            <h5 id="text" class="card-title">We help you match with the perfect investors</h5>
                            <Link to="/StartUpsSignUp"><button id="btnText" type="button" class="btn btn-dark">Start-Up</button></Link>
                        </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                    </div>
                 </div>
                </div>
            </div> 
        )
   
}
export default AboutUs;

