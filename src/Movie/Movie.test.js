import Movie from './Movie';
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';


test('renders button on header', () => {
  const { getByText } = render(<Movie />);
  const linkElement = getByText(/Average Rating:/i);
  expect(linkElement).toBeInTheDocument();
});