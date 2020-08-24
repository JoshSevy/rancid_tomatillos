import Login from './Login';
import React from 'react';
import { render, screen, getByPlaceholderText, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

describe('Login Component', () => {
  let inputEmail, inputPassword, mockLogIn;
  beforeEach(() => {

    mockLogIn = jest.fn();

    render(
      <BrowserRouter>
        <Login 
          onClick={mockLogIn}
        />
      </BrowserRouter>
    )

    inputEmail = screen.getByPlaceholderText(/user email/i);
    inputPassword = screen.getByPlaceholderText(/user password/i);

    
  })
  it('should render App correctly', () => {
    const headerText = screen.getByText(/Rancid Tomatillos/i);
    const headerLoginText = screen.getByText(/login/i)
    
    expect(headerText).toBeInTheDocument();
    expect(headerLoginText).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
  })

it('should check input fields', () => { 
  fireEvent.change(inputEmail, {target: {value: "marge@turing.io"}})
  fireEvent.change(inputPassword, {target: {value: "fakePassWord"}})

  const email = screen.getByDisplayValue(/marge@turing.io/i);
  const password = screen.getByDisplayValue(/fakepassword/i);

  expect(email).toBeInTheDocument();
  expect(password).toBeInTheDocument();

})
//Test failing still needs to be added need to look into listener and might have to mock some functionality to test.
it.skip('should have a button that submits input values', () => {

  const loginUser = jest.fn()

  const buttonSubmit = screen.getByText(/submit/i);
  


  fireEvent.change(inputEmail, {target: {value: /ben@email.com/i}});
  fireEvent.change(inputPassword, {target: {value: /128password/i}})
  fireEvent.click(buttonSubmit);


  expect(loginUser).toBeCalledTimes(1);
    
})


  const mockFetch = async (data) => {
    return jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => data
      })
    );
  }
})