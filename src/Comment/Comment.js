import "./Comment.css";

import React from 'react';
import Proptypes from 'prop-types';


const Comment = (props) => {
  return (
    <article 
      className="comment-card"
    >
      <p className="comment">{props.comment.comment}</p>
      <p className="comment-author">Author: {props.comment.author}</p>
      
    </article>
  )
}

export default Comment;

Comment.propTypes = {
  comment: Proptypes.object
}