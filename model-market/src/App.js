import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Switch, withRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import Loginpage from './pages/LoginPage';
import Homepage from './pages/Homepage';
import Submitpage from './pages/Submitpage';
import Discussionpage from './pages/DiscussionPage';
import Dashboardpage from './pages/UserDashboard';
//import * as comment_data from './pages/data/comment_file';
//import * as model_data from './pages/data/model_file';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      model_data: [],
      comment_data: [],
      inputvalue: "",
      filtereddata: [],
      filtered_comment_data: [],
      modelid: 0
    };

  }

  componentDidMount() {
    fetch('http://localhost:5000/api/comments')
      .then(res => res.json())
      .then((data) => {
        this.setState({ comment_data: data }, this.myFunction)
        this.setState({ filtered_comment_data: data }, this.myFunction)
        console.log(data)
      })
      .catch(console.log)

    fetch('http://localhost:5000/api/models')
      .then(res => res.json())
      .then((data) => {
        this.setState({ model_data: data }, this.myFunction)
        this.setState({ filtereddata: data }, this.myFunction)
        console.log(data)
      })
      .catch(console.log)
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
  handleComment = shared_value => {
    console.log(shared_value)
    this.setState({ comment_data: shared_value }, this.myFunction);

  }
  modelSelected = shared_value => {
    console.log(shared_value)
    const filteredcomments = this.state.comment_data.filter((comment) => comment.modelid == shared_value)
    this.setState({ filtered_comment_data: filteredcomments }, this.myFunction2);
    this.setState({ modelid: shared_value })
    console.log(filteredcomments)
  }
  myFunction2 = () => {
    const { filtered_comment_data } = this.state;
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps)
    console.log(this.state)
  }
  render() {

    console.log(this.state.comment_data)
    return (
      < Switch >
        <Router>
          <Header />
          <div className="App">
            <Route exact path='/' component={() => <Homepage data={this.state.model_data} filtereddata={this.state.filtereddata} filtervalue={this.filtervalue} resetfilter={this.resetfilter} modelSelected={this.modelSelected.bind(this)} />} />
            <Route exact path="/Login" component={Loginpage} />
            <Route exact path="/Submit" component={withRouter(Submitpage)} />
            <Route exact path="/Discuss" component={() => <Discussionpage filtered_comment_data={this.state.filtered_comment_data} modelid={this.state.modelid} handleComment={this.handleComment} />} />
            <Route exact path="/Profile" component={Dashboardpage} />
          </div>
        </Router>
      </ Switch>);
  }
}
export default App;
