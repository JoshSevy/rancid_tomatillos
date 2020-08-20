import CardContainer from './CardContainer';
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';



// test('test', () => {
//   const { getByText } = render(<CardContainer />);
//   const linkElement = getByText(/Rancid Tomatillos/i);
//   expect(linkElement).toBeInTheDocument();
// });

// describe('CardContainer', () => {
//   it('Can view all the posters when the app loads', () => {
//     // Render the App component (this component fetches data from an external back-end API)
//     const { getByText } = render(<CardContainer />);
//     // Check that there is a container element on the page
//     // const averageRating = getByText(Average Rating:);
//     // Wait for an idea to appear on the page
//     const card = waitFor(() => getByText("Average Rating"));
//     // Check that there are ideas on the page
//     expect(averageRating).toBeInTheDocument();
//     expect(card).toBeInTheDocument();  
//   });
// });