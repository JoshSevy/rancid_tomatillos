import Movie from './Movie';
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';


describe('Movie Component', () => {
  it('should render Movie Component correctly', () => {

    const {getByRole} = render (
      <BrowserRouter>
        <Movie
          movie={[{
            title: "Inception",
            description: "Good Movie",
            avgRating: "9.9",
            id: 27,
            movieLength: 97,
            genres: ['action', 'drama']
          }]}
        />
      </BrowserRouter>
      )


    const button = screen.getByRole('button');
    const movieLength = screen.getByText(/length:/i);
    const ratings = screen.getByText(/average rating/i)
    const description = getByRole("heading", "Good Movie");
    const genres = getByRole("heading", ["action", "drama"]);

    expect(description).toBeInTheDocument();
    expect(genres).toBeInTheDocument();
    expect(movieLength).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(ratings).toBeInTheDocument();
  })
})