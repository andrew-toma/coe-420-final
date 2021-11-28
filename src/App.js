import React from 'react';
import First from "./pages/First";
import Second from "./pages/Second";
import StartUpsSignUp from "./pages/StartUpsSignUp";
import InvestorsSignUp from "./pages/InvestorsSignUp"
import Login from "./pages/Login";
import Fifth from "./pages/Fifth";
import Sixth from "./pages/Sixth";
import Seventh from "./pages/Seventh";
import Blogs from './pages/Blogs';
import Filter from './pages/Filter';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const App = () =>{
 

  return (
    
    // <Router>  
    // <div className="App">    
   
    // <Switch>
    //   <Route exact path="/" component={First}/>
    //   <Route path="/Second" component={Second} />
    //   <Route path="/StartUpsSignUp" component={StartUpsSignUp} />
    //   <Route path="/InvestorsSignUp" component={InvestorsSignUp} />
    //   <Route path="/Login" component={Login} />
    //   <Route path="/Fifth" component={Fifth} />
    //   <Route path="/Sixth" component={Sixth} />
    //   <Route path="/Seventh" component={Seventh} />
    //   <Route path="/Blogs" component={Blogs} />
    // </Switch>
    
    // </div>
    // </Router> 
    <div className="App">

    <Filter/>
     </div>
  
  );
}

export default App;
