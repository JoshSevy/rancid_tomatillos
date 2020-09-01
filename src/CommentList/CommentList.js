import Comment from '../Comment/Comment'

import './CommentList.css'

import React from 'react';



const CommentList = ({comments, movie}) => {
  
  if (comments.length >= 1) {
    return (
      <section className="comment-container">
      {
        comments.map(comment => {
        return <Comment comment={comment}/>
        })
      }
      </section>
    )
  } else {
    return (
      <article className="comment-container">
        <h3 className="comment-none">No Comments Yet!</h3>
      </article>
    )
  }
}
export default CommentList;