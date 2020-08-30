import React from 'react';

import './Comment.css'

const Comment = (props) => {
  return (
    <section className="comment-container">
      <h1>{props.movie.title}</h1>
      <article>
      <p>{props.user.name}</p>
      <p>{props.comment.time}</p>
      <p>placeholder for upcoming data</p>
      </article>
      <p><span>Possible button to upvote downvote</span></p>
    </section>
  )
}




export default Comment;