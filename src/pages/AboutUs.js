import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import './styles/Navbar.css';
import './styles/page1.css';
import './styles/page2.css';
import Startpic from '../photos/start.png';

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
                <img id="startUpIMG1" src={Startpic} class='img' alt="startpicture"/>
                <h3 id="header3" style={{marginBottom:'40px'}}>Suits Up an interactive platform for business and startups to connect with investors and vice versa. It is an innovative, accessible, efficient and easy way for companies to find suitable investors that can help scale their businesses. It also helps investors to connect and collaborate with businesses that are compatible with the investment portfolios of the investors. The platform facilitates these connections in an unbiased process where either side can make relevant connections for their business.</h3>
               
                
            </div> 
        )
   
}
export default AboutUs;

