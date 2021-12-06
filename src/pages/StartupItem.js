import React, { useState, useRef, useEffect, useCallback } from 'react';
import {ViewStartup} from './ViewStartup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Navbar.css';

const StartupItem = ({ val }) => {
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
          <p className="subtitle"><strong>Industry:</strong><p className="card-text">{val.industryName}</p></p>
          <p className="subtitle"><strong>Emirate:</strong> <p className="card-text">{val.emirateName}</p></p>     
          <button id = "sort" type="button" onClick={openModal}>View Profile</button>
          <ViewStartup val={val} showModal={showModal} setShowModal={setShowModal}/>
        </div>
      </div>
    </div>
  );
};

export default StartupItem;