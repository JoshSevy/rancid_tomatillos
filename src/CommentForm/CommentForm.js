import CommentList from '../CommentList/CommentList'


import React, { Component } from 'react';


class CommentForm extends Component {
  constructor(props) {
    super(props) 
    this.state={
    comments: [],
    user: {},
    }
  }

  onSubmit() {
  }

  render() {
    return (
      <section className="comment-form-container">
        <form className="comment-form">
          <h2>How was the movie?</h2>
          <label for="title">Comment Title:</label>
          <input type="text" placeholder='Comment Title' className="comment-title-input"/>
          <label for="comment">Leave Comment Here:</label>
          <input type="text-box" placeholder="input comment here" className="comment-summary-input"/>
          <button>Submit</button>
        </form>
        <CommentList 
          comments={this.state.comments} 
          user={this.state.user}
        />
      </section>
    )
  }
}

export default CommentForm; 