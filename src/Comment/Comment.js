import React from 'react';

import './Comment.css'

const Comment = (props) => {
  return (
    <article>
      <p>{props.comment.author}</p>
      <p>{props.comment.comment}</p>
      <p>placeholder for upcoming data</p>
    </article>
  )
}




export default Comment;