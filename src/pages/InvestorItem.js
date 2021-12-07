import React, { useState, useRef, useEffect, useCallback } from 'react';
import {ViewInvestor} from './ViewInvestor';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Navbar.css';
import AvatarPic from '../photos/avatar.jpg';

const InvestorItem = ({ val }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };
  
  return (
    <div className="col-sm-4">
      <div className="card my-2">
        <img id="cardimg" src={AvatarPic} className="card-img-top" alt="AvatarPic" />
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