import Header from './Header';
import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';


test('renders button on header', () => {
  const { getByText } = render(<Header />);
  const linkElement = getByText(/Rancid Tomatillos/i);
  expect(linkElement).toBeInTheDocument();
});

describe('Header Component', () => {

  it('should have correct content when rendered', () => {
    render(
      <Header />
    )
  
    const headerText = screen.getByText("Rancid Tomatillos");
    const buttonText = screen.getByText('LogIn');
    expect(headerText).toBeInTheDocument();
    expect(buttonText).toBeInTheDocument();
  })

  it('should have a button that can be clicked', () => {
    const mockShowLogin = jest.fn();

    render (
      <Header 
        showLoginPage={mockShowLogin}
      />
    )

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockShowLogin).toBeCalledTimes(1)
  })
})