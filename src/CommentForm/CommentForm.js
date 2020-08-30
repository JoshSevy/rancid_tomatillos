import CommentList from '../CommentList/CommentList'

import './CommentForm.css'

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
          <h2 className="comment-message">How was {this.props.movie.title}?</h2>
          <label for="title">Comment Title:</label>
          <input type="text" placeholder='Comment Title' className="comment-title-input"/>
          <label for="comment-field">Leave Comment Here:</label>
          <textarea 
            name="comment-field" 
            placeholder="input comment here" 
            className="comment-summary-input"/>
          <article className="button-container">
            <button className="comment-post">Post</button>
            <button className="comment-cancel">Cancel</button>
          </article>
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