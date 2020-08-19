import React from 'react';

function Card(props) {
  return (
    <div className="card">
      <img src={props.poster} alt="Movie Poster" />
      <h3>{props.title}</h3>
      <p>Average Rating: {props.avgRating}</p>
    </div>
  )
}

export default Card;
