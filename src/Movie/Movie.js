import './Movie.css';

import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class Movie extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sliderValue: 10
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({sliderValue: event.target.value})
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
            <form class="submit-rating">
              Submit new rating: <br />
              <input type="range" name="rating-input" min="1" max="10" step="1" class="rating-input" onChange={this.handleChange}/>
              <output for="rating-input" class="rating-output">{this.state.sliderValue} Tomatillos</output>
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
