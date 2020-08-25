
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




