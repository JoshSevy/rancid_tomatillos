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
    this.state = {
      movies: [],
      login: false
    };

    this.showLoginPage = this.showLoginPage.bind(this);
    this.closeLoginPage = this.closeLoginPage.bind(this);
  }

  showLoginPage() {
    this.setState({login: true});
  }

  closeLoginPage() {
    this.setState({login: false});
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
    this.postUserData()
  }

  fetchData() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(movies => this.setState({movies: movies.movies}))
      .catch(error => console.log('parsing failed',error));
  }

  postUserData() {
    const url = 'https://rancid-tomatillos.herokuapp.com/api/v2/login';

    const user = {
      email: 'marge@turing.io',
      password: 'password123'
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch(url, options)
      .then(respones => respones.json())
      .then(response => console.log(response));
  }


  render() {
    return (
      <main className="App">
        <Header showLoginPage={this.showLoginPage}/>
          {this.state.login &&
            <Login closeLoginPage={this.closeLoginPage}/>}
        <section className="home-page">
          <CardContainer movies={this.state.movies} />
        </section>
      </main>
    );
  }
}


export default App;
