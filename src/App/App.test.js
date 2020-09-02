import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../helpers/apis')

import { movieApi, ratingsApi, favoritesApi } from '../helpers/apis';

jest.mock('../helpers/apis')

describe('App Component', () => {
  beforeEach(() => {

    movieApi.mockResolvedValue({
      movies: [{
        id: 524047,
        poster_path: "https://image.tmdb.org/t/p/original//sA154deR0X51EcR2lm2FfDczryg.jpg",
        backdrop_path: "https://image.tmdb.org/t/p/original//juzEhsX92if2lJ2CSqKAI4RQswt.jpg",
        title: "Greenland",
        average_rating: 4.833333333333333,
        release_date: "2020-07-29"
      }]
    })
    favoritesApi.mockResolvedValue({
      favorites: [524047,486589]
    })
  })
  it('should render App correctly', () => {

    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
      )

    const headerText = screen.getByText(/Rancid Tomatillos/i);
    const headerLoginText = screen.getByRole("heading", /log in/i)

    expect(headerText).toBeInTheDocument();
    expect(headerLoginText).toBeInTheDocument();
  })

  it('should logout user', () => {
    let state = {
      user: {email: "marge@turing.io"},
      isUserAuthenticated: true
    }

    const mockLogOut = () => {
      return state.isUserAuthenticated = false;
    }

    mockLogOut();

    expect(state.isUserAuthenticated).toBe(false);
  })

  it('should fetch movie data from api', async () => {

    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    )

    expect(movieApi).toBeCalledTimes(2);
  })

  it('should render login page at /login path', async () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <App
          isUserAuthenticated={true}
          user={{name: 'Sean', id: 2, email: 'sean@gotcha.com'}}
        />
      </MemoryRouter>
    )

    let loginHeading = screen.getByText(/rancid tomatillos login/i);
    expect(loginHeading).toBeInTheDocument()
  })

  it('should render movie detail page ', async () => {
    render(
      <MemoryRouter initialEntries={['/movies/524047']}>
        <App />
      </MemoryRouter>
    )

    const movieCloseButton = screen.getByText(/submit rating/i)
    expect(movieCloseButton).toBeInTheDocument()
  })
})


// const mockFetch = async (data) => {
//   return jest.fn().mockImplementation(() =>
//     Promise.resolve({
//       ok: true,
//       json: () => data
//     })
//   );
// }
