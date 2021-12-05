import React, { useState, useRef, useEffect, useCallback } from 'react';
import {View} from './View';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import './styles/Navbar.css';

const PersonItem = ({ val }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };
  
  return (
    <div className="col-sm-4">
      <div className="card my-2">
        <img src={val.blogs} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">
          <strong>{val.companyName}</strong>
          </h5>
          <p className="subtitle"><strong>Industry:</strong><p className="card-text">{val.industry}</p></p>
          <p className="subtitle"><strong>Emirate:</strong> <p className="card-text">{val.emirate}</p></p>     
          <button id = "sort" type="button" onClick={openModal}>View Profile</button>
          <View val={val} showModal={showModal} setShowModal={setShowModal}/>
        </div>
      </div>
    </div>
  );
};

export default PersonItem;