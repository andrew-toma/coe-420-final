import React, {useState} from 'react';
import PersonItem from './PersonItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Navbar.css';
import { FaRegUser} from "react-icons/fa";
import {Link,useHistory} from "react-router-dom";
import Axios from "axios";
import {View} from './View';

const InvestorFilter =()=>{
    
  const [investorList, setinvestorList] = useState([]);
  const[searchTerm,setSearchTerm] = useState("");
  const[order, setOrder] = useState("ASC");
    
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
                                <div class="col-md-10">
                                </div>
                                <div class="col-md-2">
                                    {/*<button id = "investors" type="button">Investors</button>
                                    <button id = "startUps" type="button">Start-Ups</button>
                                    */}
                                    <button id = "accText" type="button">Account</button>
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
                <label htmlFor="gender">Industry</label>
                <input type="text" 
                    placeholder="Search by Industry..." 
                    className="form-control"
                    id="industryName"
                    onClick={getEmployees} 
                    onChange={(event) => {setSearchTerm(event.target.value)}}
                    />
                  <br></br>
                <select
                  className="form-control"
                  id="gender"
                  placeholder="Select Industry"
                  onClick={getEmployees}
                  onChange={(event) => {setSearchTerm(event.target.value)}}
                >
                  <option >Select Industry</option>
                  {investorList.map((val,key)=>(
                    
                    <option value={val.industry} key={key}>
                      {val.industry}
                    </option>
                    ))}
                </select>
              </div>
              <div className="col-sm-12 my-2">
                <label htmlFor="gender">Emirate</label>
                <select
                  className="form-control"
                  id="gender"
                  placeholder="Select Emirate"
                  onClick={getEmployees}
                  onChange={(event) => {setSearchTerm(event.target.value)}}
                >
                  <option >Select Emirate</option>
                  {investorList.map((val,key)=>(
                    
                    <option value={val.emirate} key={key}>
                      {val.emirate}
                    </option>
                    ))}               
                </select>
              </div>
            </div>
            <button id = "sort" type="button" onClick={()=>sortArray("companyName")} style={{marginBottom:'8px'}}>Sort by Company Name</button>
            <button id = "sort" type="button" onClick={()=>sortArray("industry")} style={{marginBottom:'8px'}}>Sort by Industry</button>
            <button id = "sort" type="button" onClick={()=>sortArray("emirate")}>Sort by Emirate</button>
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
                //else if(val.industry.toLowerCase().includes(searchTerm.toLowerCase())){
                //  return val
                //}
                })
                .map((val,key) => {
                  
                  return (
                      <PersonItem val={val} key={key} />
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