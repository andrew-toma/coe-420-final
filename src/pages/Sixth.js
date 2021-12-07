import React, {useState} from "react";
import './styles/page3.css';
import './styles/page5.css';
import './styles/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from "axios";
import {Link} from "react-router-dom";
import { FaRegUser} from "react-icons/fa";

const Sixth =()=>{
    const [companyWebsite, setcompanyWebsite] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
    const [investorList, setinvestorList] = useState([]);
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
          setinvestorList(response.data);
        });
    };

    const updateInvestor = (email) => {
          Axios.put("http://localhost:3001/editinvestorprofile", { companyWebsite: companyWebsite, phoneNumber: phoneNumber, email:email }).then(
                (response) => {
                    console.log(response);
                  }
            
          );
          console.log(investorList);
    };
    const UpdateInvestor = () =>{
            getEmployees();
            updateInvestor(JSON.parse(localStorage.getItem("axiosresponse"))[0].email);
    };

    const deleteInvestor = (email) => {
        Axios.delete(`http://localhost:3001/deleteinvestor/${email}`).then((response) => {
          setinvestorList(
            investorList.filter((val) => {
              return val.email != email;
            })
          );
        });
      };
    const DeleteInvestor = () =>{
        getEmployees();
        deleteInvestor(JSON.parse(localStorage.getItem("axiosresponse"))[0].email);
    };

        return(
            <div>
                <nav class="navbar navbar-expand-lg navbar-custom bg-custom">
                    <span><Link to="/Eigth"><img id = "logo" class='img' src="logo.png" alt="logo"/></Link></span>
                    <div class="container-fluid">
                        <div class="navbar-nav">
                            <div id = "navcard" class="card mb-2">
                            <div class="row g-0">
                                <div class="col-md-8">
                                    </div>
                                    <div class="col-md-4"> 
                                        <p id = "navbartext" style = {{color:'black'}}>Welcome to your profile<Link to="/Fifth"><button id = "account" type="button"> <FaRegUser icon="fa-solid fa-coffee" size={25}></FaRegUser> </button></Link></p>
                                          
                                    </div>
                                </div>
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
                    <Link to ="/Eighth"><button id = "Create" type="button" onClick={UpdateInvestor}>Update Profile</button></Link>
                    <Link to ="/Eighth"><button id = "Cancel" type="button">Cancel</button></Link>
                    <Link to ="/"><button id = "Delete" type="button" onClick={DeleteInvestor}>Delete Profile</button></Link>
                    </web>
                </form>

            </div>
        )
    }


export default Sixth;
