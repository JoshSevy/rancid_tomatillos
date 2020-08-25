
const url = 'https://rancid-tomatillos.herokuapp.com/api/v2';


export const movieApi = async (id = "") => {
  try {
    const movieFetch = await fetch(`${url}/movies/${id}`);
    const moviesData = await movieFetch.json();
    return moviesData;
  } 
  catch {
    return {error: 'error'}
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
  } 
  catch(error) {
    return error
  }
}


export const ratingsApi = async (id) => {
  try {
    const getRatingData = await fetch(`${url}/users/${id}/ratings`)
    const ratings = await getRatingData.json();
    const data = ratings.ratings.map(rating => {
      return {
        id: rating.id,
        userId: rating["user_id"],
        movieId: rating["movie_id"],
        rating: rating.rating,
        createdAt: rating["created_at"],
        updatedAt: rating["updated_at"]
      }
    })
    return data;
    }
  catch(error) {
    return error;
  }
}

