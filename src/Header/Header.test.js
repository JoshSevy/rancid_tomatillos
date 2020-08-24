import Header from './Header';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom';


describe('Header Component', () => {

  it('should have correct content when rendered', () => {
    const { getByRole } = render(
      <BrowserRouter>
        <Header title="Hello World" buttonText="Click Me"/>
      </BrowserRouter>
    )
    const headerText = getByRole("heading", {name: "Hello World"});
    const buttonText = getByRole("button", {name: "Click Me"});
    expect(headerText).toBeInTheDocument();
    expect(buttonText).toBeInTheDocument();
  })


  //look into testing routes in jest functionality removed with the use of react router
  it.skip('should have a button that can be clicked', () => {
    const mockShowLogin = jest.fn();

     render (
      <BrowserRouter>
        <Header 
          buttonText="Click"
          showLoginPage={mockShowLogin}
        />
      </BrowserRouter>
    )

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockShowLogin).toBeCalledTimes(1)
  })
})