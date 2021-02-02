
import ClippedDrawer from '../Components/NavContent';
import React from "react";
import ContentContainer from '../Components/ContentCards';
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