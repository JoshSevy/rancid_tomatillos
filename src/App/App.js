import CardContainer from '../CardContainer/CardContainer';
import Movie from '../Movie/Movie';
import Header from '../Header/Header';
import Login from '../Login/Login';
import ErrorPage from '../ErrorPage/ErrorPage';

import { movieApi, ratingsApi, postRatingApi } from '../apis/apis';

import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      selectedMovie: false,
      user: {},
      ratings: [],
      isUserAuthenticated: false
    };

    this.renderSpecificMovie = this.renderSpecificMovie.bind(this);
    this.logOut = this.logOut.bind(this);
    this.displayUserRatings = this.displayUserRatings.bind(this);
    this.postUserRating = this.postUserRating.bind(this);
    this.getUserData = this.getUserData.bind(this);
  }

  getUserData(user, status) {
    this.setState({user: user, isUserAuthenticated: status})
  }

  logOut() {
    this.setState({user: {}, isUserAuthenticated: false});
  }

  renderSpecificMovie(event) {
    if(event.target.closest(".Card")) {
      const id = event.target.closest('.Card').id;
      this.getSpecificMovieData(id);
    }
  };

  getUserRatings(id) {
    console.log(test)
    ratingsApi(id)
      .then(ratings => ratings.ratings.map(rating => {
      return {
        id: rating.id,
        userId: rating["user_id"],
        movieId: rating["movie_id"],
        rating: rating.rating,
        createdAt: rating["created_at"],
        updatedAt: rating["updated_at"]
      }
    })).then(data => this.setState({ratings: data}));
   
  }

  postUserRating(id, rating) {
    postRatingApi(id, rating).then(() => {
      this.getUserRatings(id)
    })
    
  }

  componentDidMount() {
    this.getMoviesData();
  }

  

  componentDidUpdate() {
    if (this.state.isUserAuthenticated && this.state.ratings.length === 0) {
      const id = this.state.user.id;
      this.getUserRatings(id);
    }
  }

  getMoviesData() {
    movieApi()
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
        
      });
  }

  getSpecificMovieData(id) {
    movieApi(id)
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
    .then(movie => this.setState({selectedMovie: movie}))
    .catch(error => {
      this.setState({selectedMovie: false, error: true})
    })
  }

  displayUserRatings(id) {
    let movieRating;
    if (!this.state.ratings) {
      movieRating = "none";
    } else {
      const movie = this.state.ratings.find(rating => {
        return id === rating.movieId;
      })
      movieRating = movie ? movie.rating : "none";
    }
    return movieRating;
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
            <Route exact path="/" render={() => 
              <CardContainer
                movies={this.state.movies}
                user={this.state.user}
                renderSpecificMovie={this.renderSpecificMovie}
                displayUserRatings={this.displayUserRatings}
              />
              }
            />
            <Route exact path="/login" render={() => 
              <Login
                getUserData={this.getUserData}
              />
              }
            />
            <Route exact path="/login" render={() => {
              return (
                (this.state.isUserAuthenticated) ? 
                  <Redirect to="/" />:
                  <Redirect to="/login" />
                )
            }}
            />
            <Route path="/movies/:id" render={() =>
              <Movie
                movie={this.state.selectedMovie}
                user={this.state.user}
                postUserRating={this.postUserRating}
              />
              }
            />
            <Route exact path="/error" render={() => <ErrorPage />} />
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