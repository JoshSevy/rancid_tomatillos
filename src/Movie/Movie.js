import './Movie.css';

import React from 'react';

function Movie(props) {
  return (
    <section 
      className="movie-page" 
      style={{backgroundImage: `url(${props.movie.backdropUrl})`}}>
      <article className="movie-description">
        <h3>{props.movie.title}</h3>
        <p className="description">
          {props.movie.description}
        </p>
        <p>
          Genres: {props.movie.genres} <br />
          Length: {props.movie.runtime} Minutes <br />
          Average Rating: {props.movie.avgRating} Tomatillos
        </p>
      </article>
      <button 
      className="back-button"
      onClick={props.closeMovieDetail}
      >
        <span>&#215;</span>
      </button>
    </section>
  )
}

export default Movie;
