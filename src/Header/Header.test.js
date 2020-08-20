import Header from './Header';
import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';


test('renders button on header', () => {
  const { getByText } = render(<Header />);
  const linkElement = getByText(/Rancid Tomatillos/i);
  expect(linkElement).toBeInTheDocument();
});