import Card from '../Card/Card';
import './CardContainer.css';

import React from 'react';

const CardContainer = ({movies, renderSpecificMovie}) => {
  return (
    <section className="CardContainer" onClick={renderSpecificMovie}>
      {
        movies.map(movie => {
        return <Card
          title={movie.title}
          poster={movie['poster_path']}
          avgRating={movie['average_rating']}
          key={movie.id}
          id={movie.id}
        />
        })
      }
    </section>
  )
}

export default CardContainer;
