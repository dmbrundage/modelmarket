import React from "react";
import Discuss from "../Components/discussion";


class Discussionpage extends React.Component {
  handlecomment = (comment) => {
    console.log(comment)
    this.props.handleComment(comment);
  }
  render() {
    console.log(this.props.modelid)
    return (

      < div className="App" >
        <Discuss filtered_comment_data={this.props.filtered_comment_data} modelid={this.props.modelid} handleComment={this.handlecomment} />
      </ div >
    );
  }
}

export default Discussionpage;