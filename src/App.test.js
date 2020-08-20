import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
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


const mockFetch = (data) => {
  return jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => data
    })
  );
}

test('fetchUserData', () => {
  fetch = mockFetch(test); // or window.fetch

  const person = fetchUserData();
  expect(person).toEqual(person);

  expect(fetch).toHaveBeenCalledTimes(1);
});

function fetchUserData() {
  const url = 'https://rancid-tomatillos.herokuapp.com/api/v2/login';

  const user = {
    email: 'marge@turing.io',
    password: 'password123'
  }

  const options = {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  fetch(url, options)
    .then(response => response.json())
    .then(response => console.log(response));
}


