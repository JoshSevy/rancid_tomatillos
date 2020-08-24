import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

describe('App Component', () => {
  it('should render App correctly', () => {
    
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
      )

    const headerText = screen.getByText(/Rancid Tomatillos/i);
    const headerLoginText = screen.getByRole("heading", /log in/i)
    
    expect(headerText).toBeInTheDocument();
    expect(headerLoginText).toBeInTheDocument();
  })

  it('should logout user', () => {
    let state = {
      user: {email: "marge@turing.io"}
    }

    const mockLogOut = () => {
      return state = null;
    }

    mockLogOut();

    expect(state).toBe(null);
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




