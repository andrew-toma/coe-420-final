import React, {useState} from 'react';
import InvestorItem from './InvestorItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Navbar.css';
import { FaRegUser} from "react-icons/fa";
import Axios from "axios";
import{Link,useHistory} from "react-router-dom";
import {fire, auth} from './fire';


const InvestorFilter =()=>{
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };
  const [investorList, setinvestorList] = useState([]);
  const[searchTerm,setSearchTerm] = useState("");
  const[order, setOrder] = useState("ASC");
  const handleLogout = () =>{
    fire.auth().signOut();
    auth.signOut();
  };
  const getEmployees = () => {
    Axios.get("http://localhost:3001/investors").then((response) => 
    {
      setinvestorList(response.data);
    });
  };
  
  const sortArray = (col)=>{
    console.log(investorList);
    if(order =="ASC"){
      investorList.sort((a, b) => {
        if (a[col].toLowerCase() < b[col].toLowerCase()) {
          return 1
        }
        if (a[col].toLowerCase() > b[col].toLowerCase()) {
          return -1
        }
        
      })
      setOrder("DSC");
    }
    if(order == "DSC"){
      investorList.sort((a, b) => {
        if (a[col].toLowerCase() > b[col].toLowerCase()) {
          return 1
        }
        if (a[col].toLowerCase() < b[col].toLowerCase()) {
          return -1
        }
        
      })
      setOrder("ASC");
    }

  }
  
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
          <div className="col-sm-3">
            <div className="row my-5">
              <div className="col">
                <h4 className="border-bottom">Find Matches</h4>
              </div>
              <div className="col-sm-12 my-2">
                <label htmlFor="name">Company Name</label>
                <input type="text" 
                  placeholder="Search by Company Name..." 
                  className="form-control"
                  id="companyName"
                  onClick={getEmployees} 
                  onChange={(event) => {setSearchTerm(event.target.value)}}
                  />
              </div>
              <div className="col-sm-12 my-2" style={{padding:'10px'}}>
                <label htmlFor="gender">First Name</label>
                <input type="text" 
                    placeholder="Search by First Name..." 
                    className="form-control"
                    id="firstName"
                    onClick={getEmployees} 
                    onChange={(event) => {setSearchTerm(event.target.value)}}
                    />
                  <br></br>
                
              </div>
              <div className="col-sm-12 my-2" style={{padding:'10px'}}>
                <label htmlFor="gender">Last Name</label>
                <input type="text" 
                    placeholder="Search by Last Name..." 
                    className="form-control"
                    id="lastName"
                    onClick={getEmployees} 
                    onChange={(event) => {setSearchTerm(event.target.value)}}
                    />
                  <br></br>
                
              </div>
              
            </div>
            <button id = "sort" type="button" onClick={()=>sortArray("companyName")} style={{marginBottom:'8px'}}>Sort by Company Name</button>
            <button id = "sort" type="button" onClick={()=>sortArray("firstName")} style={{marginBottom:'8px'}}>Sort by First Name</button>
            <button id = "sort" type="button" onClick={()=>sortArray("lastName")}>Sort by Last Name</button>
          </div>
          
          <div className="col-sm-9">
            <div className="row mt-5">
              {investorList.filter((val)=>{
                if(searchTerm == ""){
                    return val
                }
                else if(val.companyName.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                }
                
                else if(val.firstName.toLowerCase().includes(searchTerm.toLowerCase())){
                 return val
                }

                else if(val.lastName.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val
                 }
                })
                .map((val,key) => {
                  
                  return (
                      <InvestorItem val={val} key={key} />
                      
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

export default InvestorFilter;