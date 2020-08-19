import React, { Component } from 'react';
import Api from './Api';
import logo from './logo.svg';
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
          return movie.title + "\n";
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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.showMovieTitles()}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}



export default App;
