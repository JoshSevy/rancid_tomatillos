import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { fetchUserData } from './App';
import '@testing-library/jest-dom';


test('renders header text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Rancid Tomatillos/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders login button', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/login/i);
  expect(linkElement).toBeInTheDocument();
});

const mockFetch = async (data) => {
  return jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => data
    })
  );
}


test('componentDidMount', () => {
  fetch = mockFetch(test); // or window.fetch

  const person = fetchUserData();
  expect(person).toEqual(person);

  expect await wait(fetchUserData).toHaveBeenCalledTimes(1)
})



