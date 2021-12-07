import React, {useState, useEffect} from 'react';
import InvestorItem from './InvestorItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Navbar.css';
import { FaRegUser} from "react-icons/fa";
import Axios from "axios";
import{Link,useHistory} from "react-router-dom";
import {fire, auth} from './fire';
import ViewForm from './ViewForm';


const Form =()=>{
  const [startUpsBlogsList, setstartUpsBlogsList] = useState([]);
  const[searchTerm,setSearchTerm] = useState("");
  const [startUp, setstartUp] = useState(null);

  const[gotBlogs, setGotBlogs] = useState("");
  
  const handleLogout = () =>{
    fire.auth().signOut();
    auth.signOut();
  };
  const getEmployees = () => {
    Axios.get("http://localhost:3001/blogs").then((response) => 
    {
      setstartUpsBlogsList(response.data);
      setstartUp(response.data);
      setGotBlogs(true);
    });
  };
  const startUpPromise = new Promise((resolve, reject) => {      
    if(startUp) {  
      if(startUp.data.length > 0){
        resolve('Promise is resolved successfully.');  
      }else{
        reject('Promise is rejected');  
      }
    } else {    
        reject('Promise is rejected');  
    }
  });
  useEffect(()=>{
    getEmployees();
    startUpPromise.then((message) => {
    console.log( startUp)  ;
    localStorage.setItem("startup", JSON.stringify(startUp.data));//ON LOGOUT SET STARTUP TO NULL INSIDE LOCAL STORAGE SO LOGOUT FUNCTION WORK PROPWRLY
    });
})
  
    return(
      <div>
      <nav class="navbar navbar-expand-lg navbar-custom bg-custom">
        <span><img id = "logo" class = 'img' src="logo.png" alt="logo"/></span>
        <div class="container-fluid">
            <div class="navbar-nav">
                <div id = "navcard" class="card mb-2">
                    <div class="row g-0">
                    <div class="col-md-9">
                                </div>
                                <div class="col-md-3">
                                    <Link to="/Login"><button id = "signUp" type="button" onClick={handleLogout} style={{marginRight:'8px'}}>Logout</button></Link> 
                                    <Link to="/Fifth"><button id = "accText" type="button">Account</button></Link>
                                    <Link to="/Fifth"><button id = "account" type="button"> <FaRegUser icon="fa-solid fa-coffee" size={25}></FaRegUser> </button></Link>  
                                </div>
                    </div>
                </div>
            </div>
        </div>
       </nav>
      <div className="container">
        <div className="row">
          
          
          <div className="col-sm-9">
            <div className="row mt-5">
              {startUpsBlogsList.filter((val)=>{
                if(searchTerm == ""){
                    return val
                }
                })
                .map((val,key) => {
                  
                  return (
                      <ViewForm val={val} key={key} />                      
                    );
                    
                  })
              }
           </div>
          </div>
          
        </div>
        
      </div>
      </div>
      
    );
}

export default Form;