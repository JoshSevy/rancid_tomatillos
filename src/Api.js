class Api {
  constructor(endpoint) {
    this.url = 'https://rancid-tomatillos.herokuapp.com/api/v2' + endpoint;
    this.movieData = {};
    this.getMovies = this.getMovies.bind(this);
  }

  getMovies() {
    fetch(this.url)
    .then(response => response.json())
    .then(response => this.movieData.movies = response)
    .then(response => {
      console.log(this.movieData);
      return this.movieData;
    })
    .catch(error => console.log(error))
  }
}

export default Api;
