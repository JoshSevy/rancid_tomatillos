import Login from './Login';
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

test('renders heading on Login Page', () => {
  const { getByText } = render(<Login />);
  const linkElement = getByText(/Rancid Tomatillos/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders password input field', () => {
  const { getByPlaceholderText } = render(<Login />);
  const linkElement = getByPlaceholderText(/user password/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders email input field', () => {
  const { getByPlaceholderText } = render(<Login />);
  const linkElement = getByPlaceholderText(/user email/i);
  expect(linkElement).toBeInTheDocument();
});