import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import jest from '@testing-library/jest-dom';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/test/i);
  expect(linkElement).toBeInTheDocument();
});


function mockFetch(data) {
  return jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => data
    })
  );
}

test('fetchPerson()', async () => {
  fetch = mockFetch(someJson); // or window.fetch

  const person = await fetchPerson('whatever id');
  expect(person).toEqual(someJson);

  // Make sure fetch has been called exactly once
  expect(fetch).toHaveBeenCalledTimes(1);
});
// when testing this simple function:

  function fetchPerson(id) {
  const response = await fetch(`${BASE_URL}/people/${id}`);
  if (!response.ok) throw new Error(response.statusText);
  const data = await response.json();
  // Some operations on data if needed...
  return person;
}