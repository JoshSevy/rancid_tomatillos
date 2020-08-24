import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import  ErrorPage  from './ErrorPage';

describe('Error Component', () => {
  
  it('should render error component correctly', () => {
    render (
      <BrowserRouter>
        <ErrorPage />
      </BrowserRouter>
    )

    const message = screen.getByText(/we're sorry, but there seems to be an error. you cannot access this page at the moment/i)
    
    expect(message).toBeInTheDocument();

  })

})