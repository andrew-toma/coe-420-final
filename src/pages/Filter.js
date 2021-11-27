import React, {useState, useEffect} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import Axios from "axios";

const Filter =()=>{
    
  const [investorList, setinvestorList] = useState([]);
  const[searchTerm,setSearchTerm] = useState("");
  const getEmployees = () => {
    Axios.get("http://localhost:3001/employees").then((response) => {
      setinvestorList(response.data);
    });
  };
 
    return(
        <div>
            
          <div className="row my-5">
            <div className="col">
              <h4 className="border-bottom">Filters</h4>
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
      
          <div className="col-sm-12 my-2">
            <label htmlFor="gender">Industry</label>
            <select
              className="form-control"
              id="gender"
              placeholder="Select Industry"
              onClick={getEmployees}
              onChange={(event) => {setSearchTerm(event.target.value)}}
            >
              <option >Select Industry</option>
              {investorList.map((val,key)=>(
                
                <option value={val.companyName} key={key}>
                  {val.companyName}
                </option>
                ))}

              {investorList.filter((val)=>{
                  if(searchTerm == ""){
                      return val
                  }
                  

              }).map((val,key)=>{
                
                return (
                  <div className="user" key={key}>
                      <p>{val.companyName}</p>
                  </div>
                   );
                })}
               
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
                
                <option value={val.companyName} key={key}>
                  {val.companyName}
                </option>
                ))}

              {investorList.filter((val)=>{
                  if(searchTerm == ""){
                      return val
                  }
                  

              }).map((val,key)=>{
                
                return (
                  <div className="user" key={key}>
                      <p>{val.companyName}</p>
                  </div>
                   );
                })}
               
            </select>
          </div>
          
        </div>
        {investorList.filter((val)=>{
                  if(searchTerm == ""){
                      return val
                  }
                  else if(val.companyName.toLowerCase().includes(searchTerm.toLowerCase())){
                      return val
                  }

              }).map((val,key)=>{
        
              return (
                  <div className="user" key={key}>
                      <p>{val.companyName}</p>
                  </div>
              );
          })}
      </div>
    )
}

export default Filter;