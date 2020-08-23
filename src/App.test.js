import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';


describe('App Component', () => {
  it('should render App correctly', () => {
    
    const { getByRole } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
      )
    
    const headerText = screen.getByText(/Rancid Tomatillos/i);
    const headerLoginText = screen.getByText(/log in/i)
    
    expect(headerText).toBeInTheDocument();
    expect(headerLoginText).toBeInTheDocument();
  })
})


const mockFetch = async (data) => {
  return jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => data
    })
  );
}




