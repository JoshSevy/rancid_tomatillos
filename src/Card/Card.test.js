import Card from './Card';
import React from 'react';
import { render,  screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';


describe('Card Component', () => {
  
  it('should have correct content when rendered', () => {
    render(
      <BrowserRouter>
        <Card 
          poster="image-file.jpg"
          id={2}
          title="Inception"
          avgRating= "9.9"
        />
      </BrowserRouter>
    )
  
  const title = screen.getByText('Inception');
  const avgRating = screen.getByText("Average Rating: 9.9");
  const poster = screen.getByRole('img');

  expect(title).toBeInTheDocument();
  expect(poster).toBeInTheDocument();
  expect(avgRating).toBeInTheDocument();
  })
})
