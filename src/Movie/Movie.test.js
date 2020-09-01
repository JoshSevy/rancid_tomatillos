import Movie from './Movie';
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';


describe('Movie Component', () => {
  it('should render Movie Component correctly', () => {

    const {getByRole} = render (
      <MemoryRouter>
        <Movie
          comments={[]}
          movie={[{
            title: "Inception",
            description: "Good Movie",
            avgRating: "9.9",
            id: 27,
            movieLength: 97,
            genres: ['action', 'drama']
          }]}
        />
      </MemoryRouter>
      )


    const button = getByRole('button');
    const movieLength = screen.getByText(/length:/i);
    const ratings = screen.getByText(/average rating/i)

    expect(movieLength).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(ratings).toBeInTheDocument();
  })

  it('should render comment component on movie page load', () => {
    render(
      <MemoryRouter>
        <Movie
          comments={[]}
          movie={[
            {
              title: "Inception",
              description: "Good Movie",
              avgRating: "9.9",
              id: 27,
              movieLength: 97,
              genres: ["action", "drama"],
            },
          ]}
        />
      </MemoryRouter>
    );

    const noCommentMessage = screen.getByText(/no comments yet/i)

    expect(noCommentMessage).toBeInTheDocument()
  })
})