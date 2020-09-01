import React from 'react';

import './Comment.css'

const Comment = (props) => {
  return (
    <article className="comment-card">
      <p className="comment">{props.comment.comment}</p>
      <p className="comment-author">Author: {props.comment.author}</p>
      
    </article>
  )
}




export default Comment;