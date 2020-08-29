import React from 'react';


const CommentList = (props) => {
  props.comments.map(comment => {
    return (
      <article>
        <h3>{props.comment.title}</h3>
        <p>{props.user.name}</p>
        <p>{props.comment.summary}</p>
        <p>{props.comment.date}</p>
      </article>
    )
  })
}
export default CommentList;