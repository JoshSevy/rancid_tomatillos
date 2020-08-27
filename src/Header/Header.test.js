import Header from './Header';
import React from 'react';
import { MemoryRouter, Link } from 'react-router-dom';
import {render, screen, fireEvent} from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import '@testing-library/jest-dom';


describe('Header Component', () => {

  it('should have correct content when user not logged in rendered', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <Header 
          isUserAuthenticated={false}
        />
      </MemoryRouter>
    )
    const headerText = getByRole("heading", {name: /welcome to rancid tomatillos/i});
    const buttonText = getByRole("link", {name: "LogIn"});
    expect(headerText).toBeInTheDocument();
    expect(buttonText).toBeInTheDocument();
  })

  it('should have correct content when user islogged in rendered', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <Header
          isUserAuthenticated={true}
          user={{
            name:'Ben',
            id: 1,
            email: 'megaman@awesome.com'
          }}
        />
      </MemoryRouter>
    )
    const headerText = getByRole("heading", { name: /welcome ben !/i });
    const buttonText = getByRole("link", { name: "LogOut" });
    expect(headerText).toBeInTheDocument();
    expect(buttonText).toBeInTheDocument();
  })


  //look into testing routes in jest functionality removed with the use of react router
  it('should have a button that can be clicked', () => {
     render (
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )

    const button = screen.getByRole('link', /login/i);
    fireEvent.click(button);

  })
//may need to be tested in app to have abilitiy to switch pages
  it("navigates to login page when you click the login navlink", async () => {
    
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header 
          isUserAuthenticated={false}
        />
      </MemoryRouter>
    );
    act(() => {
      const goLoginPage = document.querySelector('.login-button');
      // Click it
      goLoginPage.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(document.body.textContent).toBe('Welcome To Rancid TomatillosLogIn');
  });
})