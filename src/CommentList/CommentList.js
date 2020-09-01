import Comment from '../Comment/Comment'

import './CommentList.css'

import React from 'react';



const CommentList = ({comments, movie}) => {
  
  if (comments.length >= 1) {
    return (
      <section className="comment-container">
      {
        comments.map(comment => {
        return <Comment key={comment.id} comment={comment}/>
        })
      }
      </section>
    )
  } else {
    return (
      <article className="comment-none-container">
        <h3 className="comment-none">No Comments Yet!</h3>
      </article>
    )
  }
}
export default CommentList;