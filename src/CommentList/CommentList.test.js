import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import CommentList from './CommentList';

import {} from '../helpers/apis';
jest.mock('../helpers/apis')

describe('ClassList Component', () => {

  it('should render no comments if no comments exist', {
    render(
      <MemoryRouter>
        <CommentList/>
      </MemoryRouter>
    )
  })

  it('should render multiple comments in comment container', async () => {

  })
})
