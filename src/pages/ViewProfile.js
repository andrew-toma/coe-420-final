import React, {useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import './styles/Navbar.css';


const ViewProfile = ({ val }) => {
    
  return (
    <div className="app">
      
      <p>{val.message}</p>
    </div>
  );
};

export default ViewProfile;