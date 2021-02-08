import React from "react";
import Discuss from "../Components/discussion";


class Discussionpage extends React.Component {

  render() {
    console.log(this.props.modelid)
    return (

      < div className="App" >
        <Discuss filtereddata={this.props.filtereddata} modelid={this.props.modelid} />
      </ div >
    );
  }
}

export default Discussionpage;