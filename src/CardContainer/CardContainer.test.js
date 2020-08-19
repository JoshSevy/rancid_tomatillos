import CardContainer from './CardContainer';
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

test('practice test', () => {
  expect(true).toBe(true)
})

test('test', () => {
  const { getByText } = render(<CardContainer />);
  const linkElement = getByText(/Rancid Tomatillos/i);
  expect(linkElement).toBeInTheDocument();
});