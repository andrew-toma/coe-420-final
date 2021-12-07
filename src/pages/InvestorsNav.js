import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import './styles/Navbar.css';
import './styles/page1.css';
import './styles/page2.css';
import Investorpic from '../photos/investor.png';
const InvestorsNav = () => {
    
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

                <h1 id="header1">Welcome Businesses</h1>
                <h2 id="header2">Unlock a network of investors</h2>
                <h3 id="header3">Every day new startups and partners enter our community. Get inspired and involved</h3>
                <img id="startUpIMG1" src={Investorpic} alt="investorIMG"/>
                <h5 id="header3">We help you find the perfect investments</h5>
                <Link to="/InvestorsSignUp"><button id="btnText2" type="button" class="btn btn-dark">Get Started</button></Link>
            </div> 
        )
   
}
export default InvestorsNav;

