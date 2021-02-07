import React, { Component } from "react";
import Comment from "./comment";

export default class Comments extends Component {

  async fetchData(url) {
    const response = await fetch(url);
    let data = await response.json();
    return data;
  }

  /*   componentDidMount() {
      const url = "https://jsonplaceholder.typicode.com/posts/1/comments";
      //let data = this.fetchData(url);
      let data = this.props.commentdata
      data.then(comments => {
        let commentList = comments.slice(0, 10);
        this.setState(
          {
            comments: commentList,
            isFetching: false
          },
          () => console.log("New State", this.state.comments)
        );
      });
    } */

  render() {
    //console.log(this.props.commentdata)
    //const { comments, isFetching } = this.state;
    return <Comment comments={this.props.commentdata} />;
  }
}