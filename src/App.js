import CardContainer from './CardContainer/CardContainer';
import Movie from './Movie/Movie';
import Header from './Header/Header';
import Login from './Login/Login';
import ErrorPage from './ErrorPage/ErrorPage';

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      homepage: true,
      error: false,
      login: false,
      selectedMovie: false,
      user: {id: 73, name: "Marge", email: "marge@turing.io"}

    };

    this.renderSpecificMovie = this.renderSpecificMovie.bind(this);
    this.fetchUserData = this.fetchUserData.bind(this);
    this.fetchUserRatings = this.fetchUserRatings.bind(this);
    this.logOut = this.logOut.bind(this);
  }


  logOut() {
    this.setState({user: null});
  }

  renderSpecificMovie(event) {
    if(event.target.closest(".Card")) {
      const id = event.target.closest('.Card').id;
      this.fetchSpecificMovie(id);
    }
  };

  componentDidUpdate() {
    if (this.state.user && !this.state.user.ratings) {
      const id = this.state.user.id;
      const url = "https://rancid-tomatillos.herokuapp.com/api/v2/users/";
      this.fetchUserRatings(id, url);
    }
  }

  fetchUserRatings(id, url) {
    fetch(`${url}${id}/ratings`)
      .then(response => response.json())
      .then(data => data.ratings.map(rating => {
        return {
          id: rating.id,
          userId: rating["user_id"],
          movieId: rating["movie_id"],
          rating: rating.rating,
          createdAt: rating["created_at"],
          updatedAt: rating["updated_at"]
        }
      }))
      .then(ratings => {
        this.state.user.ratings = ratings;
        this.setState({user: this.state.user})
        }
      )
      .catch(error => console.log(error))
  }

  postUserRating(id, url, rating) {
    const options = {
      method: 'POST',
      body: JSON.stringify(rating),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch(`${url}${id}/ratings`, options)
      .then(response => this.fetchUserRatings(id, url))
      .catch(error => console.log(error))
  }

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
      .then(data => data.movies.map(movie => {
        return {
          id: movie.id,
          posterUrl: movie["poster_path"],
          backdropUrl: movie["backdrop_path"],
          title: movie.title,
          avgRating: movie["average_rating"],
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
      <BrowserRouter>
        <main className="App">
        {this.state.user ?
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
            <Route path="/" exact render={() =>
              <CardContainer
                movies={this.state.movies}
                user={this.state.user}
                renderSpecificMovie={this.renderSpecificMovie}
              />
              }
            />
            <Route path="/login" exact render={() =>
              <Login
                fetchUserData={this.fetchUserData}
              />
            }
          />
            <Route path="/movies/:id" render={() =>
              <Movie
                movie={this.state.selectedMovie}
                user={this.state.user}
                postUserRatings={this.postUserRatings}
              />
              }
            />
            <Route path="/error" exact render={() => <ErrorPage />} />
          </Switch>
          {this.state.error &&
            <ErrorPage errorCode={this.state.error}/>
          }
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
