import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';


describe('App Component', () => {
  it('should render App correctly', () => {
    
    render(<App />)
    
    const headerText = screen.getByText(/Rancid Tomatillos/i);
    const headerLoginText = screen.getByText(/login/i)
    
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




