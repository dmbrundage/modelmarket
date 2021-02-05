import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Loginpage from './pages/LoginPage';
import Homepage from './pages/Homepage';
import Submitpage from './pages/Submitpage';
import Discussionpage from './pages/DiscussionPage';
class App extends Component {
  render(){
  return (
    <Switch>
    <Router>
     <div className="App">
    <Route exact path='/' component={Homepage}/>
    <Route exact path="/Login" component={Loginpage} />
    <Route exact path="/Submit" component={Submitpage} />
    <Route exact path="/Discuss" component={Discussionpage} />
    </div>
  </Router>
  </Switch>  );
}
}
export default App;
