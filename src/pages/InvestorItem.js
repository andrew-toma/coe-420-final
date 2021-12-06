import React, { useState, useRef, useEffect, useCallback } from 'react';
import {ViewInvestor} from './ViewInvestor';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import './styles/Navbar.css';

const InvestorItem = ({ val }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };
  
  return (
    <div className="col-sm-4">
      <div className="card my-2">
        <img id="cardimg" src={val.blogs} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">
          <strong>{val.companyName}</strong>
          </h5>
          <p className="subtitle"><strong>Name:</strong><p className="card-text">{val.firstName} {val.lastName}</p></p>    
          <button id = "sort" type="button" onClick={openModal}>View Profile</button>
          <ViewInvestor val={val} showModal={showModal} setShowModal={setShowModal}/>
        </div>
      </div>
    </div>
  );
};

export default InvestorItem;