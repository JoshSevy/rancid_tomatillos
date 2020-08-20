import Login from './Login';
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Login Component', () => {
  it('should render App correctly', () => {

    render(<Login />)

    const headerText = screen.getByText(/Rancid Tomatillos/i);
    const headerLoginText = screen.getByText(/login/i)
    const email = screen.getByPlaceholderText(/user email/i);
    const password = screen.getByPlaceholderText(/user password/i)

    expect(headerText).toBeInTheDocument();
    expect(headerLoginText).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  })
})