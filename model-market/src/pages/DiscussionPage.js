import React from "react";
import Discuss from "../Components/discussion";


class Discussionpage extends React.Component {

  render() {
    console.log(this.props)
    return (

      < div className="App" >
        <Discuss filtereddata={this.props.filtereddata} />
      </ div >
    );
  }
}

export default Discussionpage;