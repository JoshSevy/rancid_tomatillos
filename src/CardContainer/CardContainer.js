import Card from '../Card/Card';
import './CardContainer.css';

import React from 'react';
import { Link } from 'react-router-dom';

const CardContainer = ({movies, renderSpecificMovie}, event) => {
  
  return (
    <Link to="/movies/{id}">
    <section 
      className="CardContainer" 
      onClick={renderSpecificMovie}
    >
      {
        movies.map(movie => {
        return <Card
          title={movie.title}
          poster={movie.posterUrl}
          avgRating={movie.avgRating}
          key={movie.id}
          id={movie.id}
        />
        })
      }
    </section>
    </Link>
  )
}

export default CardContainer;
