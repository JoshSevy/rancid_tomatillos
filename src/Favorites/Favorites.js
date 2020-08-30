import React, { Component } from 'react';
import CardContainer from '../CardContainer/CardContainer';
import './Favorites.css';

class Favorites extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <CardContainer
        movies={this.props.favorites}
        user={this.props.user}
        ratings={this.props.ratings}
        isUserAuthenticated={this.props.isUserAuthenticated}
        renderSpecificMovie={this.props.renderSpecificMovie}
        displayUserRatings={this.props.displayUserRatings}
      />
    )
  }
}

export default Favorites;
