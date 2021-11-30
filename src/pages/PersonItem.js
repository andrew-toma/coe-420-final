import React, {useState} from 'react';
import ViewProfile from './ViewProfile';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import './styles/Navbar.css';


const PersonItem = ({ val }) => {

  return (
  <div className="PersonItem">  
    <div className="col-sm-4">
      <div className="card my-2">
        <img src={val.blogs} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">
          <strong>{val.companyName}</strong>
          </h5>
          <p className="card-text"><strong>Name:</strong> {val.firstName} {val.lastName}</p>
          <p className="card-text"><strong>Email:</strong> {val.email}</p>
          <p className="card-text"><strong>Industry:</strong> {val.industry}</p>
          <p className="card-text"><strong>Emirate:</strong> {val.emirate}</p>
          <ViewProfile val={val}/>
          {/* {investorList.filter((val)=>{
                if(searchTerm == ""){
                    return val
                }
                else if(val.companyName.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                }
                })
                .map((val,key) => {
                  <ViewProfile val={val} key={key} />
                    
                  })
              } */}
          
          <Link to ="/ViewProfile">
              <button id = "sort" type="button" >View Profile</button>
          </Link>
        </div>
      </div>
    </div>
    
    </div>
  );
};

export default PersonItem;