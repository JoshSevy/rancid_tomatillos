import './Card.css';

import React from 'react';



function Card(props) {
  return (
    <div className="Card">
      <img src={props.poster} alt="Movie Poster" />
      <h3>{props.title}</h3>
      <p>Average Rating: {props.avgRating}</p>
    </div>
  )
}

export default Card;
