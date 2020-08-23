import './Card.css';

import React from 'react';
import { Link } from 'react-router-dom';

function Card(props) {
  return (
    <Link to={"movies/"+ props.id}>
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
        {props.user &&
          <section>
            <p>User Rating: </p>
            <button>Leave a Rating</button>
          </section>
        }
      </article>
    </div>
    </Link>
  )
}

export default Card;
