const fetchMovies = () => {
  fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
    .then(movies => this.setState({ movies: movies.movies }))
    .catch(error => console.log('parsing failed', error));
}

const url = 'https://rancid-tomatillos.herokuapp.com/api/v2/';

export const movieApi = async (id = "") => {
  try {
    const movieFetch = await fetch(`${url}movies/${id}`);
    const moviesData = await movieFetch.json();
    return moviesData
  } 
  catch {
    return {error: 'error'}
  }
}

const fetchSpecificMovie = (id) => {
  fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies/' + id)
    .then(response => response.json())
    .then(response => this.setState({ selectedMovie: response.movie, homepage: false }))
    .catch(error => console.log('failed to get specific movie', error))
}

const fetchUserData = () => {
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
    .then(response => response.json())
    .then(response => console.log(response));
}




