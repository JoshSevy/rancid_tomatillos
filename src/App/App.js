import CardContainer from '../CardContainer/CardContainer';
import Movie from '../Movie/Movie';
import Header from '../Header/Header';
import Login from '../Login/Login';
import ErrorPage from '../ErrorPage/ErrorPage';

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      // homepage: true,
      // error: false,
      // login: false,
      selectedMovie: false,
      user: {}
    };

    this.renderSpecificMovie = this.renderSpecificMovie.bind(this);
    this.getUserData = this.getUserData.bind(this)
    this.logOut = this.logOut.bind(this);
  }

  getUserData(user) {
    this.setState({user: user})
  }

  logOut() {
    this.setState({user: {}});
  }

  renderSpecificMovie(event) {
    if(event.target.closest(".Card")) {
      const id = event.target.closest('.Card').id;
      this.fetchSpecificMovie(id);
    }
  };

  componentDidMount() {
    this.fetchMovies()
  }

  fetchMovies() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(data => data.movies.map(movie => {
        return {
          id: movie.id,
          posterUrl: movie["poster_path"],
          backdropUrl: movie["backdrop_path"],
          title: movie.title,
          avgRating: Math.round(movie["average_rating"]),
          releaseDate: movie["release_date"]
        }
      }))
      .then(movies => this.setState({movies: movies}))
      .catch(error => {
        console.log(error);
        this.setState({homepage: false, error: true})
      });
  }

  fetchSpecificMovie(id) {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then(response => response.json())
      .then(data => data.movie = {
          id: data.movie.id,
          backdropUrl: data.movie["backdrop_path"],
          title: data.movie.title,
          avgRating: data.movie["average_rating"],
          releaseDate: data.movie["release_date"],
          description: data.movie.overview,
          genres: data.movie.genres,
          runtime: data.movie.runtime
        }
      )
      .then(movie => this.setState({selectedMovie: movie, homepage: false}))
      .catch(error => {
        this.setState({homepage: false, selectedMovie: false, error: true})
      })
  }

  render() {
    return (
        <main className="App">
        {this.state.user.id ?
          <Header 
            buttonDisplay={this.logOut} 
            user={this.state.user}
            buttonText='Log Out'
            title={`Welcome ${this.state.user.name}`}
            /> :
          <Header 
            buttonDisplay={this.showLoginPage}
            buttonText='Log In'
            title='Welcome to Rancid Tomatillos'
            />
        }
          <Switch>
            <Route exact path="/" render={() => 
              <CardContainer
                movies={this.state.movies} 
                renderSpecificMovie={this.renderSpecificMovie} 
              />
              } 
            />
            <Route exact path="/login" render={() => 
              <Login
                getUserData={this.getUserData}
              />
            } 
          />
            <Route path="/movies/:id" render={() => 
              <Movie 
                movie={this.state.selectedMovie}
              />
              } 
            />
            <Route exact path="/error" render={() => <ErrorPage />} />
          </Switch>
          {this.state.error &&
            <ErrorPage errorCode={this.state.error}/>
          }
        </main>
    );
  }
}

export default App;


App.propTypes = {
  movies: PropTypes.array,
  user: PropTypes.object
}