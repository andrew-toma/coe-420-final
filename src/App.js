import React from 'react';
import First from "./pages/First";
import Second from "./pages/Second";
import StartUpsSignUp from "./pages/StartUpsSignUp";
import InvestorsSignUp from "./pages/InvestorsSignUp"
import Login from "./pages/Login";
import Fifth from "./pages/Fifth";
import Sixth from "./pages/Sixth";
import Seventh from "./pages/Seventh";
<<<<<<< HEAD
import Eighth from "./pages/Eighth";
import FileUpload from "./pages/FileUpload";
import Message from "./pages/Message";
import Progress from "./pages/Progress";
import viewBlog from "./pages/viewBlog";



=======
import Blogs from './pages/Blogs';
import Filter from './pages/Filter';
import Message from './pages/Message';
>>>>>>> 0ff2b501dad9cb2cca37e0c924c978c4f9cdc343


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
<<<<<<< HEAD
      <Route path="/FileUpload" component={FileUpload} />
      <Route path="/Message" component={Message} />
      <Route path="/Progress" component={Progress} />
      <Route path="/viewBlog" component={viewBlog} />



=======
      <Route path="/Filter" component={Filter} />
      <Route path="/Message" component={Message} />
>>>>>>> 0ff2b501dad9cb2cca37e0c924c978c4f9cdc343
    </Switch>
    
    </div>
    </Router> 
    
  );
}

export default App;
