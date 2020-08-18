import React, { Component } from 'react';
import Api from './Api';
import logo from './logo.svg';
import './App.css';

const movies = new Api('/movies');

class App extends Component {
  constructor() {
    super()

    this.state = false;
  }

  componentDidMount() {
    this.setState({state: true});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {console.log(movies.getMovies())}
            Yo!{movies.getMovies()}
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
