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

  const compareObjects = (object1, object2, key) =>{
    const obj1 = object1[key].toLowerCase()
    const obj2 = object2[key].toLowerCase()
  
    if (obj1 < obj2) {
      return 1
    }
    if (obj1 > obj2) {
      return -1
    }
    return 0
  }
  
  
  const sortArray=()=>
  {
    investorList.sort((a, b) => {
      return compareObjects(a, b, 'companyName')
    })

    investorList.map((val,key)=>{
        
      return (
          <div className="user" key={key}>
              <p>{val.companyName}</p>
          </div>
      );
  })
    // function compareFunction(a,b){

    //   return b-a;
    // }
      // investorList.sort(function(a,b)
      //   {
      //     if(a.companyName.toLowerCase() < b.companyName.toLowerCase()){
      //       return 1;
      //     }
      //     if(a.companyName.toLowerCase() > b.companyName.toLowerCase()){
      //       return -1;
      //     }
      //     return 0;
      //     })
      //     .map((val,key)=>{
                
      //       return (
      //         <div className="user" key={key}>
      //             <p>{val.companyName}</p>
      //         </div>
      //          );
      //       })}
  }

 
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
          <button onClick={sortArray}>sort</button>
      </div>
    )
}

export default Filter;