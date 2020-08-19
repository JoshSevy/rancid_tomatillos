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
    this.state = {movies: []};
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
        <Header />
        <section className="home-page">
          <CardContainer movies={this.state.movies} />
        </section>
        <Login />
        test
      </main>
    );
  }
}


export default App;
