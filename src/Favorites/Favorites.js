import React from 'react';
import CardContainer from '../CardContainer/CardContainer';
import './Favorites.css';

function Favorites(props) {
  return (
    <CardContainer
      favoriteOrUnfavoriteMovie={props.favoriteOrUnfavoriteMovie}
      movies={props.favorites}
      user={props.user}
      ratings={props.ratings}
      isUserAuthenticated={props.isUserAuthenticated}
      renderSpecificMovie={props.renderSpecificMovie}
      displayUserRatings={props.displayUserRatings}
    />
  )
}

export default Favorites;
