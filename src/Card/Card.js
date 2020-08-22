import './Card.css';

import React from 'react';

function Card(props) {
  return (
    <div className="Card-block">
      <article 
        className="Card" 
        id={props.id}>
        <img 
          src={props.poster} 
          alt={props.description} 
        />
        <h3>{props.title}</h3>
        <p>Average Rating: {props.avgRating}</p>
      </article>
    </div>
  )
}

export default Card;
