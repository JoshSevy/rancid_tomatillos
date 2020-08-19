import Card from './Card/Card';
import CardContainer from './CardContainer/CardContainer'
import Header from './Header/Header';
import Login from './Login/Login';

import React, { Component } from 'react';

import './App.css';

// const movies = new Api('/movies');

class App extends Component {
  constructor() {
    super()
    this.state = {movies: ''};
  }

  showMovieCards() {
    if (this.state.movies) {
      return this.state.movies.map(movie => {
          return <Card title={movie.title} poster={movie['poster_path']} avgRating={movie['average_rating']} />;
        })
    } else {
      return null;
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(movies => this.setState({movies: movies.movies}))
      .catch(error => console.log('parsing failed',error));
  }


  render() {
    return (
      <main className="App">
        <Header />
          <section>
            {this.showMovieCards()}
          </section>
        <Login />
        test
      </main>
    );
  }
}


export default App;
