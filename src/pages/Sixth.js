import React from "react";

import './styles/page3.css';
import './styles/page5.css';
import './styles/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import {yesnoCheck} from './websiterad';
const Sixth =()=>{
    // window.onload = ()=> {
    //     document.getElementById('ifYes').style.display = 'none';
    //     document.getElementById('ifNo').style.display = 'none';
    // }
    function yesnoCheck() {
        if (document.getElementById('yesCheck').checked) {
            document.getElementById('ifYes').style.display = 'block';
    
        } 
        else if(document.getElementById('noCheck').checked) {
            document.getElementById('ifYes').style.display = 'none';
       }
    }
    //         (document).ready(function () {
    //       ('select').selectize({
    //           sortField: 'text'
    //       });
    //   });
   
        return(
            <div>
                <nav class="navbar navbar-expand-lg navbar-custom bg-custom">
                    <span><a href="index.html"><img id = "logo" src="logo.png" alt="logo"/></a></span>
                    <div class="container-fluid">
                        <div class="navbar-nav">
                            <div id = "navcard" class="card mb-2">
                                <p id = "navbartext" style = {{color:'black'}}><strong>Welcome to your profile</strong></p>
                            </div>
                        </div>
                    </div>
                </nav>
                
                <form id = "signUpForm">
                    <p id="formtext">Does your company have website?</p>
                    <web>
                    <input type="radio" onclick={()=>yesnoCheck()} name="websiterad" id="yesCheck"/><label for="websiterad">Yes</label>
                    <input type="radio" onclick={()=>yesnoCheck()} name="websiterad" id="noCheck"/><label for="websiterad">No</label>
                    <div id="ifYes" style={{display:'none'}}>
                    <p id="formtext">what is your company's website?</p>
                    <input class="input textbox"type="text" id="websitename" name="websitename" placeholder="website.com"/>
                    </div>
                    <p id="formtext">Enter your phone number:</p>
                    <input class="input textbox"type="text" placeholder="+ --- --- --- ----" required/>
                    <button id = "Create" type="button">Create Profile</button>
                    <button id = "Cancel" type="button">Cancel</button>
                    </web>
                </form>

            </div>
        )
    }


export default Sixth;
