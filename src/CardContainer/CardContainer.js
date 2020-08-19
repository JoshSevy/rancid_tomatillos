import Card from '../Card/Card';
import './CardContainer.css';

import React from 'react';

const CardContainer = (props) => {
  console.log(props);
  console.log(props.movies)
  return (
    <section className="CardContainer" onClick={props.renderSpecificMovie}>
      {
        props.movies.map(movie => {
        return <Card
          title={movie.title}
          poster={movie['poster_path']}
          avgRating={movie['average_rating']}
          key={movie.id}
          id={movie.id}
        />
        })
      }
    </section>
  )
}

export default CardContainer;
