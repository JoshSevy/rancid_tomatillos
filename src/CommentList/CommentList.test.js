import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import CommentList from './CommentList';

describe('ClassList Component', () => {

  it('should render no comments if no comments exist', () => {
    render(
      <MemoryRouter>
        <CommentList comments={[]}/>
      </MemoryRouter>
    )

    const noComments = screen.getByRole('heading', /no comments yet!/i)

    expect(noComments).toBeInTheDocument()
  })

  it('should render multiple comments in comment container', () => {
    render(
      <MemoryRouter>
        <CommentList 
          comments={[
            {
              author: 'Josh',
              comment: 'crushing the project',
              id: 2
            },
            {
              author: 'Ben',
              comment: 'crushing the project',
              id: 1
            }
          ]}
        />
      </MemoryRouter>
    )
   
    const commentOne = screen.getByText(/josh/i);
    const commentTwo = screen.getByText(/ben/i);

    expect(commentOne).toBeInTheDocument();
    expect(commentTwo).toBeInTheDocument();


  })
})
