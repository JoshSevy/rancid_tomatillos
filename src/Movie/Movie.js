import './Movie.css';

import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class Movie extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sliderValue: "10"
    }

    this.handleChange = this.handleChange.bind(this);
    this.submitRating = this.submitRating.bind(this);
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
            Genres: {this.props.movie.genres} <br />
            Length: {this.props.movie.runtime} Minutes <br />
            Average Rating: {this.props.movie.avgRating} Tomatillos
          </p>
          {this.props.user &&
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
