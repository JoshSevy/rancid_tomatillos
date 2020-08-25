import Card from '../Card/Card';
import './CardContainer.css';

import React from 'react';

const CardContainer = ({movies, user, renderSpecificMovie, displayUserRatings}) => {
  return (
    <section className="CardContainer" onClick={renderSpecificMovie}>
      {
        movies.map(movie => {
        return <Card
          title={movie.title}
          user={user}
          poster={movie.posterUrl}
          avgRating={movie.avgRating}
          key={movie.id}
          id={movie.id}
          displayUserRatings={displayUserRatings}
        />
        })
      }
    </section>
  )
}

export default CardContainer;
