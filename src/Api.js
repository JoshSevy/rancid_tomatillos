import App from './App';

class Api {
  constructor(endpoint) {
    this.url = 'https://rancid-tomatillos.herokuapp.com/api/v2' + endpoint;
    this.movieData = {};
    this.getMovies = this.getMovies.bind(this);
  }

  getMovies() {
    return fetch(this.url)
    .then(response => response.json())
    .then(response => this.movieData.movies = response)
    .then(response => {
      return this.movieData;
    })
    .catch(error => console.log(error))
  }
}

export default Api;
