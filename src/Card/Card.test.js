import Card from './Card';
import React from 'react';
import { render,  screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';


describe('Card Component', () => {
  
  it('should have correct content when rendered', () => {
    render(
      <MemoryRouter>
        <Card 
          poster="image-file.jpg"
          id={2}
          title="Inception"
          avgRating= "9.9"
          ratings={[{
            createdAt: "2020-08-26T02:00:25.103Z",
            id: 1809,
            movieId: 2,
            rating: 7,
            updatedAt: "2020-08-26T02:00:25.103Z",
            userId: 1
          }]}
        />
      </MemoryRouter>
    )
  
  const title = screen.getByText('Inception');
  const avgRating = screen.getByText("Average Rating: 9.9");
  const poster = screen.getByRole('img');

  expect(title).toBeInTheDocument();
  expect(poster).toBeInTheDocument();
  expect(avgRating).toBeInTheDocument();
  })
})
