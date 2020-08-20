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

    this.closeMovieShowcasePage= this.closeMovieShowcasePage.bind(this);
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

  closeMovieShowcasePage() {
    this.setState({ 
                    selectedMovie: false,
                    homepage: true
                   });
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
        {this.state.user === null && 
        <Header 
          title="Rancid Tomatillos"
          buttonName="LogIn"
          buttonLog={this.showLoginPage}
        />
        }
        {this.state.user && 
        <Header
          title={`Welcome ${this.state.user.name}`}
          buttonName="LogOut"
          buttonLog={this.setState({user: null})}
        />
        }
        {this.state.login &&
          <Login 
            fetchUserData={this.fetchUserData} closeLoginPage={this.closeLoginPage}/>}
        {this.state.homepage &&
          <section className="home-page">
            <CardContainer movies={this.state.movies} renderSpecificMovie={this.renderSpecificMovie}/>
          </section>
        }
        {this.state.selectedMovie &&
            <Movie 
              movie={this.state.selectedMovie}
              closeMovieShowcasePage={this.closeMovieShowcasePage}
            />
        }
      </main>
    );
  }
}

export default App;
