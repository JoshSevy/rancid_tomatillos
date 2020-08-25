
const url = 'https://rancid-tomatillos.herokuapp.com/api/v2/';


export const movieApi = async (id = "") => {
  try {
    const movieFetch = await fetch(`${url}movies/${id}`);
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




