import React, { Component } from 'react';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Api from '../Api/Api';
import Card from '../Card/Card';
import './App.css';

const movies = new Api('/movies');

class App extends Component {
  constructor() {
    super()
    this.state = {movies: ""};
  }

  showMovieTitles() {
    if (this.state.movies) {
      return this.state.movies.map(movie => {
          return < Card title={movie.title} poster={movie['poster_path']} avgRating={movie['average_rating']} />;
        })
    } else {
      return null;
    }
  }

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
    .then(movies => this.setState({movies: movies.movies}))
    .catch(error => console.log(error))
  }


  render() {
    return (
      <div className="App">
      <Header />
        <header>
          <p>
            {this.showMovieTitles()}
            test
          </p>
        </header>
        <Login />
      </div>
    );
  }
}



export default App;
