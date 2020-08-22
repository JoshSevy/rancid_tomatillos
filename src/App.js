import CardContainer from './CardContainer/CardContainer';
import Movie from './Movie/Movie';
import Header from './Header/Header';
import Login from './Login/Login';
import ErrorPage from './ErrorPage/ErrorPage';

import React, { Component } from 'react';

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
      user: null
    };

    this.closeMovieDetail = this.closeMovieDetail.bind(this);
    this.showLoginPage = this.showLoginPage.bind(this);
    this.closeLoginPage = this.closeLoginPage.bind(this);
    this.renderSpecificMovie = this.renderSpecificMovie.bind(this);
    this.fetchUserData = this.fetchUserData.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  showLoginPage() {
    this.setState({login: true});
  }

  closeLoginPage() {
    this.setState({login: false});
  }

  closeMovieDetail() {
    this.setState(
      {
      homepage: true,
      selectedMovie: false
      }
    )
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
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies/' + id)
      .then(response => response.json())
      .then(response => this.setState({selectedMovie: response.movie, homepage: false}))
      .catch(error => {
        this.setState({homepage: false, selectedMovie: false, error: true})
      })
  }

  render() {
    return (
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
        {this.state.login &&
          <Login
            fetchUserData={this.fetchUserData} 
            closeLoginPage={this.closeLoginPage}/>}
        {this.state.homepage &&
          <section className="home-page">
            <CardContainer 
              movies={this.state.movies} renderSpecificMovie={this.renderSpecificMovie}/>
          </section>
        }
        {this.state.selectedMovie &&
            <Movie 
              movie={this.state.selectedMovie}
              closeMovieDetail={this.closeMovieDetail}
            />
        }
        {this.state.error &&
          <ErrorPage errorCode={this.state.error}/>
        }
      </main>
    );
  }
}

export default App;
