import Card from '../Card/Card';
import './CardContainer.css';

import React from 'react';

const CardContainer = ({movies}) => {
  console.log(movies)
  return (
    <section className="CardContainer">
      {
        movies.map(movie => {
        return <Card
          title={movie.title}
          poster={movie['poster_path']}
          avgRating={movie['average_rating']}
        />    
        })
      }
    </section>
  )
}

export default CardContainer;