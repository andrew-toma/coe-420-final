import React, { useState, useRef, useEffect, useCallback } from 'react';
import {ViewInvestor} from './ViewInvestor';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link,useHistory} from "react-router-dom";
import './styles/Navbar.css';

const ViewForm = ({ val }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="col-sm-4">
      <div className="card my-2">
        <div className="card-body">
          <h5 className="card-title">
          <strong>{val.companyName}</strong>
          </h5>
          <p className="subtitle"><strong>blog:</strong><p className="card-text">{val.blog} </p></p>  
          <p className="subtitle"><strong>blogText:</strong><p className="card-text">{val.blogText} </p></p>
          <Link to ="/viewStartUpProfile"><button id = "sort" type="button">View Profile</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ViewForm;