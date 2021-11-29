import React, {useState} from 'react';
import ViewProfile from './ViewProfile';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import './styles/Navbar.css';


const PersonItem = ({ val }) => {
  return (
    <div className="col-sm-4">
      <div className="card my-2">
        <img src={val.blogs} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">
          {val.companyName}
          </h5>
          <p className="card-text">{val.firstName} {val.lastName}</p>
          <p className="card-text">{val.email}</p>
          {/* <Link to ="/ViewProfile"> */}
              <button id = "sort" type="button"  onClick={ViewProfile ({val}) }>View Profile</button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default PersonItem;