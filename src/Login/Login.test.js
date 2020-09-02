import Login from './Login';
import React from 'react';

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../helpers/apis')


import { userApi } from '../helpers/apis';


describe('Login Component', () => {
  
  it('should render Login component correctly', () => {
    render(
      <MemoryRouter>
        <Login getUserData={jest.fn()} />
      </MemoryRouter>
    );

    const headerText = screen.getByText(/Rancid Tomatillos/i);
    const headerLoginText = screen.getByText(/login/i);
    const inputEmail = screen.getByPlaceholderText(/user email/i);
    const inputPassword = screen.getByPlaceholderText(/user password/i);
    
    expect(headerText).toBeInTheDocument();
    expect(headerLoginText).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
  })

it('should check input fields', () => { 
  render(
    <MemoryRouter>
      <Login getUserData={jest.fn()} />
    </MemoryRouter>
  )

  const inputEmail = screen.getByPlaceholderText(/user email/i);
  const inputPassword = screen.getByPlaceholderText(/user password/i);

  fireEvent.change(inputEmail, {target: {value: "marge@turing.io"}});
  fireEvent.change(inputPassword, {target: {value: "fakePassWord"}});

  const email = screen.getByDisplayValue(/marge@turing.io/i);
  const password = screen.getByDisplayValue(/fakepassword/i);
  

  expect(email).toBeInTheDocument();
  expect(password).toBeInTheDocument();

})
//Test failing still needs to be added need to look into listener and might have to mock some functionality to test.
it('should have a button that submits input values', async () => {
  userApi.mockResolvedValue(() => {
    return Promise.resolve({
      user: {
        email: `megaman@games.com`,
        id: 3,
        name: `MegaMan`,
      }
    });
  });

  render(
    <MemoryRouter>
      <Login 
        user={userApi} 
        getUserData={userApi} 
        userIsAuthenticated={true}/>
    </MemoryRouter>
  );

  const inputEmail = screen.getByPlaceholderText(/user email/i);
  const inputPassword = screen.getByPlaceholderText(/user password/i);
  const buttonSubmit = screen.getByText(/submit/i);
  
  fireEvent.change(inputEmail, {target: {value: "ben@email.com"}});
  fireEvent.change(inputPassword, {target: {value: "128password"}})
  fireEvent.click(buttonSubmit);

  const userTitle = await waitFor(() => screen.getByText(/welcome megaman/i))

  expect(userTitle).toBeInTheDocument()


    
  })

})
