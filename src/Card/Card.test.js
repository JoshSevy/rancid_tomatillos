import Card from './Card';
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

test('renders text on cards', () => {
  const { getByText } = render(<Card />);
  const linkElement = getByText(/Average Rating:/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders text on cards', () => {
  const { getByAltText } = render(<Card />);
  const linkElement = getByAltText(/Movie Poster/i);
  expect(linkElement).toBeInTheDocument();
});