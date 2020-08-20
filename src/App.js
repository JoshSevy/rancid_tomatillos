import CardContainer from './CardContainer/CardContainer';
import Movie from './Movie/Movie';
import Header from './Header/Header';
import Login from './Login/Login';

import React, { Component } from 'react';

import './App.css';

// const movies = new Api('/movies');

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      homepage: true,
      login: false,
      selectedMovie: false,
      user: null
    };

    this.showLoginPage = this.showLoginPage.bind(this);
    this.closeLoginPage = this.closeLoginPage.bind(this);
    this.renderSpecificMovie = this.renderSpecificMovie.bind(this);
    this.fetchUserData = this.fetchUserData.bind(this);
  }

  showLoginPage() {
    this.setState({login: true});
  }

  closeLoginPage() {
    this.setState({login: false});
  }

  renderSpecificMovie(event) {
    if(event.target.closest(".Card")) {
      const id = event.target.closest('.Card').id;
      console.log(id);
      this.fetchSpecificMovie(id);
    }
  };

  componentDidMount() {
    this.fetchMovies()
  }

  fetchUserData(user) {
    const url = 'https://rancid-tomatillos.herokuapp.com/api/v2/login';

    const options = {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch(url, options)
      .then(response => response.json())
      .then(response => this.setState({ user: response.user }))
      .catch(error => {
        console.log('invalid user', error)
        this.setState({ error: 'Invalid email or password' })
      })
  }

  fetchMovies() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(movies => this.setState({movies: movies.movies}))
      .catch(error => console.log('parsing failed',error));
  }

  fetchSpecificMovie(id) {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies/' + id)
      .then(response => response.json())
      .then(response => this.setState({selectedMovie: response.movie, homepage: false}))
      .catch(error => console.log('failed to get specific movie', error))
  }

  render() {
    return (
      <main className="App">
        <Header showLoginPage={this.showLoginPage}/>
        {this.state.login &&
          <Login 
            fetchUserData={this.fetchUserData} closeLoginPage={this.closeLoginPage}/>}
        {this.state.homepage &&
          <section className="home-page">
            <CardContainer movies={this.state.movies} renderSpecificMovie={this.renderSpecificMovie}/>
          </section>
        }
        {this.state.selectedMovie &&
            <Movie movie={this.state.selectedMovie}/>
        }
      </main>
    );
  }
}


export default App;
