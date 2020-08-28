import CardContainer from './CardContainer';
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

describe('CardContainer Component', () => {
  
  it('should have correct content when rendered', () => {

    const mockRenderSpecificMovie = jest.fn();

    const { getByRole } = render(
      <MemoryRouter>
        <CardContainer
          onClick={mockRenderSpecificMovie}
          ratings={[]}
          movies={[
            {
              poster: "image-file.jpg",
              id: 2,
              title: "Inception",
              avgRating: "9.9",
              key: 2,
            }
          ]}
        />
      </MemoryRouter>
    );
    
  const title = getByRole("heading", /Inception/i);
  const id = getByRole("heading", "2");
  const avgRating = getByRole("heading", "9.9");
  
  expect(title).toBeInTheDocument();
  expect(id).toBeInTheDocument();
  expect(avgRating).toBeInTheDocument();
  });

  it('should change render onClick', () => {
    

  })
  //still need to do some research on listeners with jest to test click
  expect(true).toBe(true);
});

