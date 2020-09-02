import './Movie.css';
import CommentForm from '../CommentForm/CommentForm'

import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import PropTypes from "prop-types";

class Movie extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sliderValue: "10",
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
          <Link to="/">
            <button
              className="back-button"
              onClick={this.props.closeMovieDetail}
            >
              <span>&#215;</span>
            </button>
          </Link>
          <h3 className="movie-title">{this.props.movie.title}</h3>
          <p className="description">{this.props.movie.description}</p>
          <p className='movie-genre'>{this.props.movie.genres}</p>
          <p className="movie-length">Length: {this.props.movie.runtime} Minutes</p>
          <p className="avg-rating">Average Rating: {this.props.movie.avgRating} Tomatillos</p>
          {this.props.user &&
            <form className="add-rating">
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
                htmlFor="rating-input"
                className="rating-output"
              >
                {this.state.sliderValue} Tomatillos
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
        <CommentForm 
          user={this.props.user}
          movie={this.props.movie}
          isUserAuthenticated={this.props.isUserAuthenticated}
          comments={this.props.comments}
          getComments={this.props.getComments}
        />
      </section>
    )
  }
}

export default Movie;

Movie.propTypes = {
  movies: PropTypes.array,
  user: PropTypes.object,
  isUserAuthenticated: PropTypes.bool,
  ratings: PropTypes.array,
  sliderValue: PropTypes.number,
};
