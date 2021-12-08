import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Navbar.css';
import { FaRegUser} from "react-icons/fa";
import {Link,useHistory} from "react-router-dom";
import Axios from "axios";
import FormItem from './FormItem';
import {fire, auth} from './fire';


const Form =()=>{
    
  const [startupList, setStartUpList] = useState([]);
  const[searchTerm,setSearchTerm] = useState("");
  const[order, setOrder] = useState("ASC");
  const [gotstartUp, setgotstartUp] = useState(false);

  const handleLogout = () =>{
    fire.auth().signOut();
    auth.signOut();
  };
  const getEmployees = () => {
    Axios.get("http://localhost:3001/startups").then((response) => 
    {
      setStartUpList(response.data);
      setgotstartUp(true);
    });
  };
  useEffect(()=>{
    if(!gotstartUp){
      getEmployees();
    }
  })
  const sortArray = (col)=>{
    console.log(startupList);
    if(order =="ASC"){
      startupList.sort((a, b) => {
        if (a[col].toLowerCase() < b[col].toLowerCase()) {
          return 1
        }
        if (a[col].toLowerCase() > b[col].toLowerCase()) {
          return -1
        }
        
      })
      setOrder("DSC");
    }
    if(order == "DSC"){
      startupList.sort((a, b) => {
        if (a[col].toLowerCase() > b[col].toLowerCase()) {
          return 1
        }
        if (a[col].toLowerCase() < b[col].toLowerCase()) {
          return -1
        }
        
      })
      setOrder("ASC");
    }

  }
  
    return(
      <div>
              <nav class="navbar navbar-expand-lg navbar-custom bg-custom">
                <span><img id = "logo" class = 'img' src="logo.png" alt="logo"/></span>
                <div class="container-fluid">
                    <div class="navbar-nav">
                        <div id = "navcard" class="card mb-2">
                            <div class="row g-0">
                                <div class="col-md-9">
                                </div>
                                <div class="col-md-3">
                                    <Link to="/Login"><button id = "signUp" type="button" onClick={handleLogout} style={{marginRight:'8px'}}>Logout</button></Link> 
                                    <Link to="/Sixth"><button id = "accText" type="button">Account</button></Link>
                                    <Link to="/Sixth"><button id = "account" type="button"> <FaRegUser icon="fa-solid fa-coffee" size={25}></FaRegUser> </button></Link> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               </nav>
      <div className="container">
        <div className="row">
                  
          <div className="col-sm-12">
            <div className="row mt-5">
              {startupList.filter((val)=>{
                if(searchTerm == ""){
                    return val
                }
                else if(val.companyName.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                }
                else if(val.industry.toLowerCase().includes(searchTerm.toLowerCase())){
                 return val
                }
                })
                .map((val,key) => {
                  
                  return (
                      <FormItem val={val} key={key} />
                    );
                    
                  })
              }
           </div>
          </div>
          
        </div>
      </div>
      </div>
    );
}

export default Form;