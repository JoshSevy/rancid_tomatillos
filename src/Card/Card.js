import './Card.css';

import React from 'react';



function Card(props) {
  return (
    <div className="Card-block">
      <article className="Card">
        <img src={props.poster} alt="Movie Poster" />
        <h3>{props.title}</h3>
        <p>Average Rating: {props.avgRating}</p>
      </article>
    </div>
  )
}

export default Card;
