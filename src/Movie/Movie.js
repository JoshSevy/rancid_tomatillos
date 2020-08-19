import './Movie.css';

import React from 'react';

function Movie(props) {
  const style = {
    backgroundImage: "url(" + props.movie["backdrop_path"] + ")"
  }

  return (
    <section className="movie-page" style={style}>
      <button className="back-button">Back</button>
      <article className="movie-description">
        <h3>{props.movie.title}</h3>
        <p>Description: {props.movie.overview}</p>
        <p>
          Genres: {props.movie.genres} <br />
          Length: {props.movie.runtime} Minutes <br />
          Average Rating: {props.movie["average_rating"]} Tomatillos
        </p>
      </article>
    </section>
  )
}

export default Movie;
