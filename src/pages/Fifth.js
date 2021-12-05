import React, {useState} from "react";
import Axios from "axios";
import './styles/page3.css';
import './styles/page5.css';
import './styles/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
const Fifth =()=>{
    const [companyWebsite, setcompanyWebsite] = useState("");
    const [numofPeople, setnumofPeople] = useState("");
    const [industryName, setindustryName] = useState("");
    const [emirateName, setemirateName] = useState("");
    const [companyDesc, setcompanyDesc] = useState("");
    const [startupList, setStartUpList] = useState([]);
    function yesnoCheck() {
        
        if (document.getElementById('yesCheck').checked) {
            document.getElementById('ifYes').style.display = 'block';
    
        } 
        else if(document.getElementById('noCheck').checked) {
            document.getElementById('ifYes').style.display = 'none';
       }
    }
    const getEmployees = () => {
        Axios.get("http://localhost:3001/startups").then((response) => 
        {
          setStartUpList(response.data);
        });
      };

    const updateStartup = (email) => {
          Axios.put("http://localhost:3001/createprofile", { companyWebsite: companyWebsite, numofPeople: numofPeople, industryName:industryName, emirateName:emirateName, email:email }).then(
                (response) => {
                    console.log(response);
                  }
            
          );
          console.log(startupList);
        };
        const UpdateStartup = () =>{
            getEmployees();
            updateStartup(JSON.parse(localStorage.getItem("axiosresponse"))[0].email);
          };
        return(
            <div>
                <nav class="navbar navbar-expand-lg navbar-custom bg-custom">
                    <span><img id = "logo" src="logo.png" alt="logo"/></span>
                    <div class="container-fluid">
                        <div class="navbar-nav">
                            <div id = "navcard" class="card mb-2">
                                <p id = "navbartext" style = {{color:'black'}}>Welcome to your profile</p>
                                {/* <Link to="/Login"><button id = "signUp" type="button" onClick={handleLogout}>Logout</button></Link> */}
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
                        <input type="radio" name ="numOfEmployee" id="1-10" required value= "1-10 people" onChange={(event)=>setnumofPeople(event.target.value)}/><label for="1-10"> 1-10 people</label><br/>
                        <input type="radio" name ="numOfEmployee" id="10-50" required value= "10-50 people" onChange={(event)=>setnumofPeople(event.target.value)}/><label for="10-50"> 10-50 people</label><br/>
                        <input type="radio" name ="numOfEmployee" id="50-200" required value= "50-200 people" onChange={(event)=>setnumofPeople(event.target.value)}/><label for="50-200"> 50-200 people</label><br/>
                        <input type="radio" name ="numOfEmployee" id="more" required value= "More than 200 people" onChange={(event)=>setnumofPeople(event.target.value)}/><label for="more"> More than 200 people</label>
                    <p id="formtext">Select industry:</p>
                    <select id="select-state" class="textbox" placeholder="Select a category" required value={industryName} onChange={(event)=>setindustryName(event.target.value)}>
                        <option value="" >Select an Industry...</option>
                        <option value="Advertising & Marketing">Advertising & Marketing</option> 
                        <option value="Aerospace">Aerospace</option>
                        <option value="Apparel & Luxury Goods">Apparel & Luxury Goods</option>
                        <option value="Electronics">Electronics</option> 
                        <option value="Fashion">Fashion</option>
                        <option value="Gaming">Gaming</option> 
                        <option value="Healthtech">Healthtech</option>
                        <option value="IT Services & Software">IT Services & Software</option>
                        <option value="Real Estate">Real Estate</option>
                        <option value="Transportation">Transportation</option>
                    </select>
                    <p id="formtext">Where is your company located?</p>
                    <select id="select-state" class="textbox" placeholder="Select a country" required value={emirateName} onChange={(event)=>setemirateName(event.target.value)}>
                        <option value="">Select an Emirate</option>
                        <option value="Abu Dhabi">Abu Dhabi</option>
                        <option value="Dubai">Dubai</option>
                        <option value="Sharjah">Sharjah</option>
                        <option value="Ajman">Ajman</option>
                        <option value="Umm Al Quwain">Umm Al Quwain</option>
                        <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                        <option value="Fujairah">Fujairah</option>
                    </select>
                    <p id="formtext">Write a short Description of what  your company does</p>
                    <textarea class="textbox" Style="width:100%;border-color:#C4C4C4;"rows = "5" cols = "60" name = "description" required value={companyDesc} onChange={(event)=>setcompanyDesc(event.target.value)}></textarea><br/>
                    <Link to ="/Seventh"><button id = "Create" type="button" onClick={UpdateStartup}>Create Profile</button></Link>
                    <button id = "Cancel" type="button">Cancel</button>
                </form>
                
            </div>
        )
}

export default Fifth;
