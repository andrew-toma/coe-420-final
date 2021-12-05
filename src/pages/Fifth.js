import React, {useState} from "react";

import './styles/page3.css';
import './styles/page5.css';
import './styles/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const Fifth =()=>{
    const [companyWebsite, setcompanyWebsite] = useState("");
    const [numofPeople, setnumofPeople] = useState("");
    const [industryName, setindustryName] = useState("");
    const [emirateName, setemirateName] = useState("");
    const [companyDesc, setcompanyDesc] = useState("");
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
                    <span><img id = "logo" src="logo.png" alt="logo"/></span>
                    <div class="container-fluid">
                        <div class="navbar-nav">
                            <div id = "navcard" class="card mb-2">
                                <p id = "navbartext" style = {{color:'black'}}>Welcome to your profile</p>
                            </div>
                        </div>
                    </div>
                </nav>
                <form id = "signUpForm">
                    <p id="formtext">Does your company have website?</p>
                    <input type="radio" onChange={()=>yesnoCheck()} name="websiterad" id="yesCheck"/><label >Yes</label>
                    <input type="radio" onChange={()=>yesnoCheck()} name="websiterad" id="noCheck"/><label >No</label>
                    <div id="ifYes" style={{display:'none'}}>
                        <p id="formtext">what is your company's website?</p>
                        <input class="input textbox"type="text" id="websitename" name="websitename" placeholder="website.com" required value={companyWebsite} onChange={(event)=>setcompanyWebsite(event.target.value)}/>
                    </div>
                    <p id="formtext">How many people are in your company?</p>
                        <input type="radio" name ="numOfEmployee" id="1-10" required value={numofPeople} onChange={(event)=>setnumofPeople(event.target.value)}/><label for="1-10"> 1-10 people</label><br/>
                        <input type="radio" name ="numOfEmployee" id="10-50" required value={numofPeople} onChange={(event)=>setnumofPeople(event.target.value)}/><label for="10-50"> 10-50 people</label><br/>
                        <input type="radio" name ="numOfEmployee" id="50-200" required value={numofPeople} onChange={(event)=>setnumofPeople(event.target.value)}/><label for="50-200"> 50-200 people</label><br/>
                        <input type="radio" name ="numOfEmployee" id="more" required value={numofPeople} onChange={(event)=>setnumofPeople(event.target.value)}/><label for="more"> More than 200 people</label>
                    <p id="formtext">Select industry:</p>
                    <select id="select-state" class="textbox" placeholder="Select a category" required value={industryName} onChange={(event)=>setindustryName(event.target.value)}>
                        <option value="" >Select a state...</option>
                        <option value="1">Transportation</option>
                        <option value="2">Advertising & Marketing</option> 
                        <option value="3">Aerospace</option>
                        <option value="4">Apparel & Luxury Goods</option>
                        <option value="5">Electronics</option> 
                        <option value="6">Fashion</option>
                        <option value="7">Gaming</option> 
                        <option value="8">Healthtech</option>
                        <option value="9">IT Services & Software</option>
                        <option value="10">Real Estate</option>
                    </select>
                    <p id="formtext">Where is your company located?</p>
                    <select id="select-state" class="textbox" placeholder="Select a country" required value={emirateName} onChange={(event)=>setemirateName(event.target.value)}>
                        <option value="">Select an Emirate</option>
                        <option value="1">Abu Dhabi</option>
                        <option value="2">Dubai</option>
                        <option value="3">Sharjah</option>
                        <option value="4">Ajman</option>
                        <option value="5">Umm Al Quwain</option>
                        <option value="6">Ras Al Khaimah</option>
                        <option value="9">Fujairah</option>
                    </select>
                    <p id="formtext">Write a short Description of what  your company does</p>
                    <textarea class="textbox" Style="width:100%;border-color:#C4C4C4;"rows = "5" cols = "60" name = "description" required value={companyDesc} onChange={(event)=>setcompanyDesc(event.target.value)}></textarea><br/>
                    <button id = "Create" type="button">Create Profile</button>
                    <button id = "Cancel" type="button">Cancel</button>
                </form>
                
            </div>
        )
}

export default Fifth;
