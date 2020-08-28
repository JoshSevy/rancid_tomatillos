import React, { Component } from 'react';

class CommentForm extends Component {
  constructor(props) {
    super(props) 
    this.state={
    comments: [],
    user: {},
    }
  }

  onSubmit(){
  }

  render() {
    return (
      <section>
      <input type="text-box" placeholder="input comment here" />


      </section>
    )
  }
  
}


export default CommentForm; 