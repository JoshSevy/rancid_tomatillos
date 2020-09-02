import Card from '../Card/Card';
import './CardContainer.css';

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CardContainer = ({movies, user, renderSpecificMovie, displayUserRatings, ratings, favorites, favoriteOrUnfavoriteMovie, isFavoritePage}) => {
  return (
    <div>
      {isFavoritePage &&
        <Link to="/">
        <button
          className="back-button">
          <span>&#215;</span>
        </button>
      </Link>
      }
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
    </div>
  )
}

CardContainer.propTypes = {
  title: PropTypes.string,
  user: PropTypes.object,
  ratings: PropTypes.array,
  poster: PropTypes.string,
  avgRating: PropTypes.number,
  key: PropTypes.number,
  id: PropTypes.number,
  isFavorited: PropTypes.bool,
  favoriteOrUnfavoriteMovie: PropTypes.func
}

export default CardContainer;
