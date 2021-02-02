import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Login from './Components/Login';
import Homepage from './Components/Homepage';
class App extends Component {
  render(){
  return (
    <Switch>
    <Router>
     <div className="App">
    <Route exact path='/' component={Homepage}/>
    <Route path="/Login" component={Login} />
    </div>
  </Router>
  </Switch>  );
}
}
export default App;
