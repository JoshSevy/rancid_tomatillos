import CardContainer from './CardContainer';
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('CardContainer Component', () => {
  let mockRenderSpecificMovie;
  beforeEach(() => {
    mockRenderSpecificMovie = jest.fn();

    render(
      <CardContainer
        onClick={mockRenderSpecificMovie}
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
    );
  })

  it('should have correct content when rendered', () => {
    
  const title = screen.getByText(/Inception/i);
  
  expect(title).toBeInTheDocument();
  });

  it('should change render onClick', () => {
    

  })
  //still need to do some research on listeners with jest to test click
  expect(true).toBe(true);
});

