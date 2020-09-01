import Card from '../Card/Card';
import './CardContainer.css';

import React from 'react';

const CardContainer = ({movies, user, renderSpecificMovie, displayUserRatings, ratings, favorites, favoriteOrUnfavoriteMovie}) => {
  return (
    <section
      className="CardContainer"
      onClick={renderSpecificMovie}>
      {
        movies.map(movie => {
        return <Card
          title={movie.title}
          user={user}
          ratings={ratings}
          poster={movie.posterUrl}
          avgRating={movie.avgRating}
          key={movie.id}
          id={movie.id}
          isFavorited={
            favorites.includes(movie) ? true : false
          }
          favoriteOrUnfavoriteMovie={favoriteOrUnfavoriteMovie}
        />
        })
      }
    </section>
  )
}

export default CardContainer;
