import React, {useState} from "react";
import './styles/page3.css';
import './styles/page5.css';
import './styles/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

const Sixth =()=>{
    const [companyWebsite, setcompanyWebsite] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
    function yesnoCheck() {
        
        if (document.getElementById('yesCheck').checked) {
            document.getElementById('ifYes').style.display = 'block';
    
        } 
        else if(document.getElementById('noCheck').checked) {
            document.getElementById('ifYes').style.display = 'none';
       }
    }
        return(
            <div>
                <nav class="navbar navbar-expand-lg navbar-custom bg-custom">
                    <span><Link to="/Eigth"><img id = "logo" class='img' src="logo.png" alt="logo"/></Link></span>
                    <div class="container-fluid">
                        <div class="navbar-nav">
                            <div id = "navcard" class="card mb-2">
                                <p id = "navbartext" style = {{color:'black',fontSize:'15px'}}>Welcome to your profile</p>
                            </div>
                        </div>
                    </div>
                </nav>
                
                <form id = "signUpForm">
                    <p id="formtext">Does your company have website?</p>
                    <web>
                    <input type="radio" onChange={()=>yesnoCheck()} name="websiterad" id="yesCheck"/><label for="websiterad">Yes</label>
                    <input type="radio" onChange={()=>yesnoCheck()} name="websiterad" id="noCheck"/><label for="websiterad">No</label>
                    <div id="ifYes" style={{display:'none'}}>
                    <p id="formtext">what is your company's website?</p>
                    <input class="input textbox"type="text" id="websitename" name="websitename" placeholder="website.com" required value={companyWebsite} onChange={(event)=>setcompanyWebsite(event.target.value)}/>
                    </div>
                    <p id="formtext">Enter your phone number:</p>
                    <input class="input textbox"type="text" placeholder="+ --- --- --- ----" required value={phoneNumber} onChange={(event)=>setphoneNumber(event.target.value)}/>
                    <button id = "Create" type="button">Create Profile</button>
                    <button id = "Cancel" type="button">Cancel</button>
                    </web>
                </form>

            </div>
        )
    }


export default Sixth;
