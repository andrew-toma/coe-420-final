import React, {useState, useEffect} from 'react';
import Seventh from './Seventh';
import Eighth from './Eighth';
import fire from './fire';
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import './styles/page3.css';
import './styles/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link,useHistory} from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Axios from "axios";

const Login = ()=>{
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState('');
  const [startUp, setstartUp] = useState(null);
  const [investor, setInvestor] = useState(null);
  const history = useHistory();

  const loginUser = () => {
    Axios.post("http://localhost:3001/startupslogin", {
      email: email,
      password: password,
    }).then((response) => {
      console.log(response.data);
      setstartUp(response);
    });
    if(!startUp){
      Axios.post("http://localhost:3001/investorslogin", {
        email: email,
        password: password,
      }).then((response) => {
        console.log(response.data);
        setInvestor(response);

      });
    }
  };
  
  const clearInputs = ()=>{
    setEmail('');
    setPassword('');

  }

  const clearErrors = ()=>{
    setEmailError('');
    setPasswordError('');

  }

  const handleLogout = () =>{
    fire.auth().signOut();
  };

  const authListener = () =>{
    fire.auth().onAuthStateChanged(user =>{
      if(user){
        clearInputs();
        setUser(user);
      }
      else{
        setUser("");
      }
    })
  }
  const startUpPromise = new Promise((resolve, reject) => {      
    if(startUp) {  
      if(startUp.data.length > 0){
        resolve('Promise is resolved successfully.');  
      }else{
        reject('Promise is rejected');  
      }
    } else {    
        reject('Promise is rejected');  
    }
  });
  const investorPromise = new Promise((resolve, reject) => {      
    if(investor) {  
      if(investor.data.length > 0){
        resolve('Promise is resolved successfully.');  
      }else{
        reject('Promise is rejected');  
      }
    } else {    
        reject('Promise is rejected');  
    }
  });
  useEffect(()=>{
    authListener();
    startUpPromise.then((message) => {
    console.log( startUp)  ;
    localStorage.setItem("axiosresponse", JSON.stringify(startUp.data));
    history.push("/Seventh");
    });
    investorPromise.then((message) => {
      console.log( investor)  ;
      localStorage.setItem("axiosresponse", JSON.stringify(investor.data));
      history.push("/Eighth");
      });
  })
  return(

    <div>
      
      {user ? (
        <Seventh handleLogout={handleLogout}/>
      ):(
      
            <div>
                      <nav class="navbar navbar-expand-lg navbar-custom bg-custom">
                          <span><a href="index.html"><img id = "logo" src="logo.png" alt="logo"/></a></span>
                          <div class="container-fluid">
                              <div class="navbar-nav">
                                  <div id = "navcard" class="card mb-2">
                                      <p id = "navbartext"><strong>Don't have an account?</strong><span  onClick={() => setHasAccount(!hasAccount)}><a id= "navbarlink"><Link to="/Second"style={{color:'black'}}> Sign Up</Link></a></span></p>
                                  </div>
                              </div>
                          </div>
                      </nav>
                      <strong><h1 style={{textAlign:'center'}}>Login</h1></strong>
                      <form id = "signUpForm">
                      <p id="formtext">Enter your Email</p>
                      <div class="textbox">
                        <FaUserAlt class="logo"/>
                        <input class="input"type="email" placeholder="email@gmail.com" required value={email} onChange={e=>setEmail(e.target.value)}/><br/>
                      </div>
                      <p className="errorMsg">{emailError}</p>
                      <p id="formtext">Enter your password</p>
                      <div class="textbox">
                        <FaLock class="logo"/>
                        <input class="input"type="password" placeholder="Password" required value={password} onChange={e=>setPassword(e.target.value)}/>
                      </div>
                      <p className="errorMsg">{passwordError}</p>
                      <button id = "submit" type="button"  onClick={loginUser}>Login</button>
                      </form>

            </div>
        )
      }

    </div>
  )
}
    
export default Login;