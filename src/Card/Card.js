import './Card.css';

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Card(props) {
  const userRating = props.ratings.find(rating => props.id === rating.movieId)
  return (
      <div className="Card-block">
        <article
          className="Card"
          id={props.id}>
          <Link to={`movies/${props.id}`}>
            <img
              src={props.poster}
              alt={props.description}
            />
          </Link>
          <h3>{props.title}</h3>
          <p>Average Rating: {props.avgRating}</p>
            {userRating &&
                <section>
                  <p>{`Your Rating: ${userRating.rating}`}</p>
                </section>
            } 
        </article>
      </div>
    
  )
}

export default Card;

Card.propTypes = {
  ratings: PropTypes.array,
}
