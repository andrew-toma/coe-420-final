import React from 'react';
import First from "./pages/First";
import Second from "./pages/Second";
import StartUpsSignUp from "./pages/StartUpsSignUp";
import InvestorsSignUp from "./pages/InvestorsSignUp"
import Login from "./pages/Login";
import Fifth from "./pages/Fifth";
import Sixth from "./pages/Sixth";
import Seventh from "./pages/Seventh";
import Eighth from "./pages/Eighth";
import FileUpload from "./pages/FileUpload";
import Message from "./pages/Message";
import Progress from "./pages/Progress";
import viewBlog from "./pages/viewBlog";
import Blogs from './pages/Blogs';
import StartUpFilter from './pages/StartUpFilter';
import InvestorFilter from'./pages/InvestorFilter';




import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const App = () =>{
  <h4 className='display-4 text-center mb-4'>
  <i className='fab fa-react' /> React File Upload
</h4>

  return (
    
    <Router>  
    <div className="App">    
   
    <Switch>
      <Route exact path="/" component={First}/>
      <Route path="/Second" component={Second} />
      <Route path="/StartUpsSignUp" component={StartUpsSignUp} />
      <Route path="/InvestorsSignUp" component={InvestorsSignUp} />
      <Route path="/Login" component={Login} />
      <Route path="/Fifth" component={Fifth} />
      <Route path="/Sixth" component={Sixth} />
      <Route path="/Seventh" component={Seventh} />
      <Route path="/Eighth" component={Eighth} />
      <Route path="/Blogs" component={Blogs} />
      <Route path="/FileUpload" component={FileUpload} />
      <Route path="/Message" component={Message} />
      <Route path="/Progress" component={Progress} />
      <Route path="/viewBlog" component={viewBlog} />
      <Route path="/StartUpFilter" component={StartUpFilter} />
      <Route path="/InvestorFilter" component={InvestorFilter} />
    </Switch>
    
    </div>
    </Router> 
    
  );
}

export default App;