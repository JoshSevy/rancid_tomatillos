
const url = 'https://rancid-tomatillos.herokuapp.com/api/v2';


export const movieApi = async (id = "") => {
  try {
    const movieFetch = await fetch(`${url}/movies/${id}`);
    const moviesData = await movieFetch.json();
    return moviesData;

  } catch(error) {

    return error;
  }
}

export const userApi = async (user) => {
  const postStructure = {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try{
    const checkUser = await fetch(`${url}/login`, postStructure)
    const userData = await checkUser.json();

    return userData

  } catch(error) {

    return error
  }
}

export const ratingsApi = async (id) => {
  try {
    const getRatingData = await fetch(`${url}/users/${id}/ratings`)
    const ratings = await getRatingData.json();
    
    return ratings;

    } catch(error) {
    return error;
  }
}

export const postRatingApi = async (id, rating) => {
  console.log(JSON.stringify(rating));
  const options = {
    method: 'POST',
    body: JSON.stringify(rating),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    await fetch(`${url}/users/${id}/ratings`, options)
    
  } catch(error) {
    
    return error;
  }
}

