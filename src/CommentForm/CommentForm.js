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
      <section>
        <form>
          <h2>How was the movie?</h2>
          <label for="title">Comment Title:</label>
          <input type="text" placeholder='Comment Title' />
          <label for="comment">Leave Comment Here:</label>
          <input type="text-box" placeholder="input comment here" />
          <button>Submit</button>
        </form>
        <CommentList />
      </section>
    )
  }
}

export default CommentForm; 