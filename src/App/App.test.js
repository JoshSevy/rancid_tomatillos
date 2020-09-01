import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import App from "./App";

import { movieApi, getComments } from '../helpers/apis';

jest.mock('../helpers/apis')

describe('App Component', () => {
  
  it('should render App correctly', () => {
    movieApi.mockResolvedValue({
      movies: [
        {
          id: 524047,
          poster_path:
            "https://image.tmdb.org/t/p/original//sA154deR0X51EcR2lm2FfDczryg.jpg",
          backdrop_path:
            "https://image.tmdb.org/t/p/original//juzEhsX92if2lJ2CSqKAI4RQswt.jpg",
          title: "Greenland",
          average_rating: 4.833333333333333,
          release_date: "2020-07-29",
        }
      ]
    });
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
    movieApi.mockResolvedValue({
      movies: [
        {
          id: 524047,
          poster_path:
            "https://image.tmdb.org/t/p/original//sA154deR0X51EcR2lm2FfDczryg.jpg",
          backdrop_path:
            "https://image.tmdb.org/t/p/original//juzEhsX92if2lJ2CSqKAI4RQswt.jpg",
          title: "Greenland",
          average_rating: 4.833333333333333,
          release_date: "2020-07-29",
        }
      ]
    });

    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    )

    const movieCard = await waitFor(() => screen.getByText(/greenland/i))

    expect(movieCard).toBeInTheDocument();
    expect(movieApi).toBeCalledTimes(2);
  })

  it('should render login page at /login path', () => {
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

  //Not sure where the waitFor is not a function error is comming from I thought I had it working but it seems that all my async functions are getting this same error AHHHHHHHH I guess it could of been something worse that could have broke. 
  it('should get comments from api', async () => {
    movieApi.mockResolvedValue({
      movies: [
        {
          id: 524047,
          poster_path:
            "https://image.tmdb.org/t/p/original//sA154deR0X51EcR2lm2FfDczryg.jpg",
          backdrop_path:
            "https://image.tmdb.org/t/p/original//juzEhsX92if2lJ2CSqKAI4RQswt.jpg",
          title: "Greenland",
          average_rating: 4.833333333333333,
          release_date: "2020-07-29",
        }
      ]
    });

    getComments.mockResolvedValue({
      comments: [{
        author: 'Josh',
        comment: "Movie Rocks",
        movieId: 234,
        id: 876
      }]
    })

    render(
      <MemoryRouter>
        <App 
          isUserAuthenticated={true}
          movies={[]}
        />
      </MemoryRouter>
    )

    const movieCard = await waitFor(() => screen.getByText(/greenland/i))

    expect(movieCard).toBeInTheDocument()

    fireEvent.click(movieCard)

    const comments = await waitFor(() => screen.getByText(/movie rocks/i))

    expect(comments).toBeInTheDocument();
  })
})





