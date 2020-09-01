import './Movie.css';

import { Link, Redirect } from 'react-router-dom';
import React, { Component } from 'react';

class Movie extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sliderValue: "10",
      isFavorited: this.props.favorites.find(favorite => {
        return favorite.id === this.props.movie.id;
      })
    }

    this.handleChange = this.handleChange.bind(this);
    this.submitRating = this.submitRating.bind(this);
    this.clickFavoriteButton = this.clickFavoriteButton.bind(this);
  }

  componentDidMount() {
    if(!this.props.movieValidation) {
      return (<Redirect to="/" />)
    }
    this.setState({isFavorited: this.props.favorites.find(favorite => {
      console.log(this.props.movie)
      return favorite.id === this.props.movie.id;
    })})
  }

  clickFavoriteButton() {
      this.props.favoriteOrUnfavoriteMovie(this.props.movie.id)
      this.setState({isFavorited: !this.state.isFavorited})
  }

  handleChange(event) {
    this.setState({ sliderValue: event.target.value })
  }

  movieValidation() {
    const movie = this.props.ratings.find(rating => {
      return this.props.movie.id === rating.movieId;
    })
    if (movie) {
      return false;
    } else {
      return true;
    }
  }

  submitRating(event) {
    event.preventDefault();
    const rating = {
      movie_id: this.props.movie.id,
      rating: Number(this.state.sliderValue)
    }
    this.props.postUserRating(this.props.user.id, rating, this.props.movie.id);
  }

  render() {
    const userRating = this.props.ratings.find(rating => {
      return this.props.movie.id === rating.movieId;
    })
    return (
      <section
        className="movie-page"
        style={{backgroundImage: `url(${this.props.movie.backdropUrl})`}}>
        <article className="movie-description">
          <h3>{this.props.movie.title}</h3>
          <p className="description">
            {this.props.movie.description}
          </p>
          <p>
            Genres: {this.props.movie.genres.join(", ")} <br />
            Length: {this.props.movie.runtime} Minutes <br />
            Average Rating: {this.props.movie.avgRating} Tomatillos
          </p>
          {userRating &&
            <section>
              <p>{`Your Rating: ${userRating.rating}`}</p>
            </section>
          }
          {this.props.user.id &&
            <div>
              <button
                className="favorite-movie-button"
                onClick={this.clickFavoriteButton}>
                {this.state.isFavorited ? "Unfavorite" : "Favorite"}
              </button>
                <form className="submit-rating">
                  Submit new rating: <br />
                  <input
                    type="range"
                    name="rating-input"
                    min="1" max="10"
                    step="1"
                    className="rating-input"
                    onChange={this.handleChange}
                  />
                  <output
                    for="rating-input"
                    className="rating-output"
                  >
                    {this.state.sliderValue} Tomatillos<br />
                  </output>
                  <button
                    className="submit-rating"
                    onClick={this.submitRating}
                  >
                  Submit Rating
                  </button>
                </form>
              </div>
          }
        </article>
        <Link to="/">
          <button
            className="back-button"
            onClick={this.props.closeMovieDetail}
          >
            <span>&#215;</span>
          </button>
        </Link>
      </section>
    )
  }
}

export default Movie;
