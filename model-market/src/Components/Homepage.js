
import Header from './Header';
import ClippedDrawer from './NavContent';
import React from "react";
import ReactDOM from "react-dom";
import ContentContainer from './ContentCards';
import Toolbar from '@material-ui/core/Toolbar';

class Homepage extends React.Component {
    render(){
  return (

    <div className="App">
    <Toolbar />
        <ContentContainer/>
        <ClippedDrawer/>
      </div>
  );
}}

export default Homepage;