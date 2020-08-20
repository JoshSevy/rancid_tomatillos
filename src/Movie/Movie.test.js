import Movie from './Movie';
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';


describe('Movie Component', () => {
  it('should render Movie Component correctly', () => {

    render(
      <Movie
        movie={[]}
      />)

    screen.debug()


    const button = screen.getByRole('button');
    const movieLength = screen.getByText(/length:/i);
    const ratings = screen.getByText(/average rating/i)
    const description = screen.getByText(/description/i);
    const genres = screen.getByText(/genres/i);

    expect(description).toBeInTheDocument();
    expect(genres).toBeInTheDocument();
    expect(movieLength).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(ratings).toBeInTheDocument();
  })
})