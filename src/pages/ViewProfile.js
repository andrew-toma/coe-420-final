import React, {useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import './styles/Navbar.css';
import Axios from "axios";

const ViewProfile = ({ val }) => {
    const [investorList, setinvestorList] = useState([]);
    const[searchTerm,setSearchTerm] = useState("");
    // const getEmployees = () => {
    //     Axios.get("http://localhost:3001/investors").then((response) => {
    //       setinvestorList(response.data);
    //     });
    //   };
  return (
    <div className="app">
        
        {setSearchTerm(val)}
        {
        investorList.filter((val)=>{
        if(searchTerm == ""){
            return val
        }
        else if(val.companyName.toLowerCase().includes(searchTerm.toLowerCase())){
            return val
        }

    })
    .map((val,key) => {
      return (
        <div className="user" key={key}>
                 <p>{val.companyName}</p>
        </div>
    );
      
      })
  }
    </div>
  );
};

export default ViewProfile;