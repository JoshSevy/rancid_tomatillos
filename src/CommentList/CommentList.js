import Comment from '../Comment/Comment'

import React from 'react';


const CommentList = ({comments, user}) => {
  if (comments === []) {
    comments.map(comment => {
      return (
        <Comment 
          comment={comment}
          user={user}
        />
      )
    })
  } else {
    return (
      <article className="comment-container">
        <h3 className="comment-none">No Comments Yet!</h3>
      </article>
    )
  }
}
export default CommentList;