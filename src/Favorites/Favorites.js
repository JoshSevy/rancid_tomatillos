import React from 'react';
import CardContainer from '../CardContainer/CardContainer';
import './Favorites.css';

function Favorites(props) {
  return (
    <CardContainer
      favoriteOrUnfavoriteMovie={props.favoriteOrUnfavoriteMovie}
      favorites={props.favorites}
      movies={props.favorites}
      user={props.user}
      ratings={props.ratings}
      isUserAuthenticated={props.isUserAuthenticated}
      renderSpecificMovie={props.renderSpecificMovie}
      displayUserRatings={props.displayUserRatings}
      isFavoritePage={true}
    />
  )
}

export default Favorites;
