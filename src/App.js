import React, {useState, useEffect} from 'react';
// import './App.css';
import logo from './logo.svg';
import First from "./pages/First";
import Second from "./pages/Second";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Fifth from "./pages/Fifth";
import Sixth from "./pages/Sixth";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () =>{
 

  return (
    
    <Router>  
    <div className="App">    
   
    <Switch>
      <Route exact path="/" component={First}/>
      <Route path="/Second" component={Second} />
      <Route path="/SignUp" component={SignUp} />
      <Route path="/Login" component={Login} />
      <Route path="/Fifth" component={Fifth} />
      <Route path="/Sixth" component={Sixth} />
    </Switch>
  
    </div>    
    </Router> 
  
  );
}

export default App;
