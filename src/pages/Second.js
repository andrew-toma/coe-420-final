import React from "react";

import './styles/page2.css';
import './styles/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Investorpic from '../photos/investor.png';
import Startuppic from '../photos/start-up.png';
import{Link} from "react-router-dom";
const Second =()=>{

        return(
            <div>
                <nav class="navbar navbar-expand-lg navbar-custom bg-custom">
                <Link to="/"><img id = "logo" class='img' src="logo.png" alt="logo"/></Link>
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
                <h3 id="header" class="mb-5">How would you like to join?</h3>
                <div id = "navcard" class="card mb-2">
                 <div class="row g-0">
                    <div class="col-md-3">
                    </div>
                        <div class="col-md-3">
                        <div class="card h-100">
                        <div class="card-body">
                            <img id="investorIMG" src={Investorpic} class="card-img-top img" alt="investorIMG"/>
                            <h5 id="text" class="card-title">Find the perfect verified start-ups for your investments.</h5>
                            <Link to="/InvestorsSignUp"><button id="btnText" type="button" class="btn btn-dark">Investor</button></Link>
                        </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                    <div class="card h-100">
                        <div class="card-body">
                            <img id="startUpIMG" src={Startuppic} class="card-img-top img" alt="startUpIMG"/>
                            <h5 id="text" class="card-title">Create your company profile and start your journey.</h5>
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

export default Second;