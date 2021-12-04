import React, {useState, useEffect} from 'react';
import Seventh from './Seventh';
import fire from './fire';
import './styles/page3.css';
import './styles/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import Axios from "axios";
const StartUpsSignUp = ()=>{
  const [user, setUser] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState('');
  const [companyName, setcompanyName] = useState("");
  const [NewcompanyName, setNewcompanyName] = useState('');
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const displayInfo = ()=>{
    console.log(companyName);
  }
  const addUser = () => {
    Axios.post("http://localhost:3001/createstartup", {
      companyName: companyName,
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    }).then(() => {
      console.log("success");
    });
  };
  //USER AUTENTICATION FUNCTIONS
  const clearInputs = ()=>{
    setEmail('');
    setPassword('');
  }
  const clearErrors = ()=>{
    setEmailError('');
    setPasswordError('');
  }
  const handleLogin = ()=>{
  clearErrors();
  fire
    .auth()
    .signInWithEmailAndPassword(email,password)
    .catch(err =>{
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
          setPasswordError(err.message);
          break;
      }
    });
  };
  const handleSignUp = ()=>{
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email,password)
      .catch(err =>{
        switch(err.code){
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };
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
  useEffect(()=>{
    authListener();
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
                                        <p id = "navbartext"><strong>Already have an account?</strong><span  onClick={() => setHasAccount(hasAccount)}><a id= "navbarlink"> <Link to="/Login" style={{color:'black'}}>Login</Link></a></span></p>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                            <strong><h1 style={{textAlign:'center'}}>Sign Up</h1></strong>
                            <form id = "signUpForm">
                            <p id="formtext">What is the name of your company?</p>
                                <input class="input textbox"type="text" placeholder="Company Name" required value={companyName} onChange={(event)=>setcompanyName(event.target.value)}/><br/>
                                <p id="formtext">What is your name?</p>
                                <input id = "input" class="input textbox"type="text"  placeholder="First Name" required value={firstName} onChange={(event)=>setfirstName(event.target.value)}/>
                                <input id="input"class="input textbox"type="text"  placeholder="Last Name" required value={lastName} onChange={(event)=>setlastName(event.target.value)}/><br/>
                                <p id="formtext">What is your email?</p>
                                <input class="input textbox"type="email"  placeholder="email@gmail.com" required value={email} onChange={(event)=>setEmail(event.target.value)}/><br/>
                                <p className="errorMsg">{emailError}</p>
                                <p id="formtext">What is your password?</p>
                                <input class="input textbox"type="password" placeholder="Password" required value={password} onChange={(event)=>setPassword(event.target.value)}/>
@@ -140,12 +135,6 @@
                            </form>

                    </div>
            )
            }




        </div>
        )
          }
    
export default StartUpsSignUp;