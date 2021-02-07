import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Loginpage from './pages/LoginPage';
import Homepage from './pages/Homepage';
import Submitpage from './pages/Submitpage';
import Discussionpage from './pages/DiscussionPage';
import Dashboardpage from './pages/UserDashboard';
import * as comment_data from './pages/data/comment_file';
import * as model_data from './pages/data/model_file';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      model_data: model_data['default'],
      comment_data: comment_data['default'],
      inputvalue: "",
      filtereddata: model_data['default'],
      filtered_comment_data: comment_data['default'],
      modelid: 0
    };

  }
  filtervalue = shared_value => {
    console.log(shared_value)
    const filteredcards = this.state.model_data.filter((card) => card.tags.includes(shared_value))
    this.setState({ filtereddata: filteredcards }, this.myFunction);

  }
  resetfilter = shared_value => {
    console.log(shared_value)
    const filteredcards = this.state.model_data.filter((card) => card.resettags.includes(shared_value))
    this.setState({ filtereddata: filteredcards }, this.myFunction);

  }

  modelSelected = shared_value => {

    const filteredcomments = this.state.comment_data.filter((comment) => comment.modelid === (shared_value))
    this.setState({ modelid: shared_value })
    this.setState({ filtered_comment_data: filteredcomments }, this.myFunction2);
  }
  myFunction2 = () => {
    const { filtered_comment_data } = this.state;
  }
  render() {
    console.log(this.state.modelid)
    return (
      < Switch >
        <Router>
          <div className="App">
            <Route exact path='/' component={() => <Homepage data={this.state.model_data} filtereddata={this.state.filtereddata} filtervalue={this.filtervalue} resetfilter={this.resetfilter} modelSelected={this.modelSelected.bind(this)} />} />
            <Route exact path="/Login" component={Loginpage} />
            <Route exact path="/Submit" component={Submitpage} />
            <Route exact path="/Discuss" component={() => <Discussionpage filtereddata={this.state.filtered_comment_data} modelid={this.state.modelid} />} />
            <Route exact path="/Profile" component={Dashboardpage} />
          </div>
        </Router>
      </ Switch>);
  }
}
export default App;
