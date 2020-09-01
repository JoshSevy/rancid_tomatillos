import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import Comment from './Comment';

describe('Comment Component', () => {
  it('should render a comment correctly', () => {
    render (
      <MemoryRouter>
        <Comment 
          comment={{author: 'Ben', comment: 'Eazy Peazy'}}
        />
      </MemoryRouter>
    )

    const author = screen.getByText(/ben/i);
    const comment = screen.getByText(/eazy peazy/i);

    expect(author).toBeInTheDocument();
    expect(comment).toBeInTheDocument();
  })
})
