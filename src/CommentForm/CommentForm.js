import CommentList from '../CommentList/CommentList'

import './CommentForm.css'

import {getComments, postComments} from '../helpers/apis';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class CommentForm extends Component {
  constructor(props) {
    super(props) 
    this.state={
      comments: [],
      user: {},
      commentTitle: "",
      commentSummary: ""
    }

    this.onSubmit = this.onSubmit.bind(this)
  }

  commentFieldOutput = (e) => {
    const formData = e.target.name;
    const formValue = e.target.value;
    this.setState({[formData]: formValue });
  }

  getMovieComments = async (movieID) => {
    getComments(movieID)
  }

  postMovieComment = async (postData) => {
    
  }

  onSubmit(e) {
    e.preventDefault();
    const title = this.state.commentTitle;
    const summary = this.state.commentSummary;
    const userComment = `${title.toUpperCase()} ${summary}`

    console.log(userComment)
  }

  onCancel(e) {
    e.preventDefault();
    this.setState({commentTitle: "", commentSummary: ""})
  }

  render() {
    return (
      <section className="comment-form-container">
      {
        (this.props.isUserAuthenticated) ? 
        <form 
          className="comment-form"
          ref={(el) => this.onCancel = el}
        >
          <h2 className="comment-message">How was {this.props.movie.title}?</h2>
          <label for="title">Comment Title:</label>
          <input 
            name="commentTitle"
            value={this.state.commentTitle}
            type="text" 
            placeholder="Comment Title" 
            className="comment-title-input"
            onChange={this.commentFieldOutput}
          />
          <label for="comment-field">Leave Comment Here:</label>
          <textarea 
            name="commentSummary" 
            value={this.state.commentSummary}
            placeholder="input comment here" 
            className="comment-summary-input"
            onChange={this.commentFieldOutput}
          />
          <article className="button-container">
            <button 
              className="comment-post"
              onClick={this.onSubmit}
            >
              Post
            </button>
            <button
              type="reset"
              className="comment-cancel"
              onClick={this.onCancel}
            >
              Cancel
            </button>
          </article>
        </form> :
        <article className="login-prompt">
          <h3>Login to Comment on {this.props.movie.title}</h3>
          <Link 
            to="/login" className="form-login-button"
          >
            Login
          </Link>
        </article>
        }
        <CommentList 
          comments={this.state.comments} 
          user={this.state.user}
        />
      </section>
    )
  }
}

export default CommentForm; 