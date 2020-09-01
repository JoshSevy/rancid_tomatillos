import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import CommentForm from './CommentForm';

import { postComment, getComments } from '../helpers/apis';

jest.mock('../helpers/apis');

describe('CommentForm Component', () => {
  it('should render commentForm correctly if user is NOT logged in', () => {
    render(
      <MemoryRouter>
        <CommentForm
          movie={{title: "Inception"}}
          isUserAuthenticated={false}
          comments={[]}
        />
      </MemoryRouter>
    )

    const loginLink = screen.getByRole('link', /login/i);

    expect(loginLink).toBeInTheDocument();
  })

  it('should render commentForm correctly if user IS logged in', () => {
    render(
      <MemoryRouter>
        <CommentForm
          movie={{ title: "Inception" }}
          isUserAuthenticated={true}
          comments={[]}
        />
      </MemoryRouter>
    )
    
    const buttons = screen.getAllByRole('button');
    const inputs = screen.getAllByRole('textbox');
    const header = screen.getByText(/inception/i);

    expect(buttons[0]).toBeInTheDocument();
    expect(buttons[1]).toBeInTheDocument();
    expect(inputs[0]).toBeInTheDocument();
    expect(inputs[1]).toBeInTheDocument();
    expect(header).toBeInTheDocument();
  })

  it('should check input fields', () => {
    render(
      <MemoryRouter>
        <CommentForm
          movie={{ title: "Inception" }}
          isUserAuthenticated={true}
          comments={[]}
        />
      </MemoryRouter>
    )

    const titleInput = screen.getByPlaceholderText(/comment title/i);
    const commentInput = screen.getByPlaceholderText(/input comment here/i);

    fireEvent.change(titleInput, {target: {value: 'Great Movie'}});
    fireEvent.change(commentInput, {target: {value: 'Loved it!'}});

    const title = screen.getByDisplayValue(/great movie/i);
    const comment = screen.getByDisplayValue(/loved it!/i);

    expect(title).toBeInTheDocument();
    expect(comment).toBeInTheDocument();
  })

  it('should clear inputs with click on cancel button', () => {
    render(
      <MemoryRouter>
        <CommentForm
          movie={{ title: "Inception" }}
          isUserAuthenticated={true}
          comments={[]}
        />
      </MemoryRouter>
    )

    const titleInput = screen.getByPlaceholderText(/comment title/i);
    const commentInput = screen.getByPlaceholderText(/input comment here/i);

    fireEvent.change(titleInput, { target: { value: 'Great Movie' } });
    fireEvent.change(commentInput, { target: { value: 'Loved it!' } });

    const title = screen.getByDisplayValue(/great movie/i);
    const comment = screen.getByDisplayValue(/loved it!/i);
    const cancelButton = screen.getByText(/cancel/i)

    expect(title.value).toEqual('Great Movie');
    expect(comment.value).toEqual('Loved it!');

    fireEvent.click(cancelButton);

    expect(title.value).toEqual("")
    expect(comment.value).toEqual("")
  })

  it('should be able to clear inputs when post clicked', async () => {
    render(
      <MemoryRouter>
        <CommentForm
          movie={{ title: "Inception", movieId: 23 }}
          isUserAuthenticated={true}
          comments={[]}
          user={{name: "Linus"}}
          getComments={jest.fn()}
        />
      </MemoryRouter>
    )

    postComment.mockResolvedValue({
      title: "Hates this movie",
      author: "Linus",
      movieId: 23,
    })

    const titleInput = screen.getByPlaceholderText(/comment title/i);
    const commentInput = screen.getByPlaceholderText(/input comment here/i);

    fireEvent.change(titleInput, { target: { value: 'Great Movie' } });
    fireEvent.change(commentInput, { target: { value: 'Loved it!' } });

    const postButton = screen.getByText(/post/i)

    expect(titleInput.value).toEqual('Great Movie');
    expect(commentInput.value).toEqual('Loved it!');

    fireEvent.click(postButton);

    expect(titleInput.value).toEqual("")
    expect(commentInput.value).toEqual("")
  })
//since I ran my post in a different component it was difficult to check if the post truly went through im gonna attempt to test in the app component, but the hour clock is dwindling down ahhhhh.
  it('should be able to post a new comment', async () => {
    postComment.mockResolvedValue({
      comment: "HATES this movie",
      author: "Linus",
      movieId: 23,
    });

    getComments.mockResolvedValue({
      comment: "HATES this movie",
      author: "Linus",
      movieId: 23,
      id: 567,
    });

    render(
      <MemoryRouter>
        <CommentForm
          movie={{ title: "Inception", movieId: 23 }}
          isUserAuthenticated={true}
          comments={[
            {
            comment: "HATES this movie",
            author: "Linus",
            movieId: 23,
            id: 567,
            }
          ]}
          user={{ name: "Linus" }}
          getComments={getComments}
        />
      </MemoryRouter>
    );

    const titleInput = screen.getByPlaceholderText(/comment title/i);
    const commentInput = screen.getByPlaceholderText(/input comment here/i);
    const postButton = screen.getByText(/post/i);

    fireEvent.change(titleInput, { target: { value: 'Hates' } });
    fireEvent.change(commentInput, { target: { value: 'this movie' } });

    fireEvent.click(postButton);

    const comment = screen.getByText(/hates this movie/i)

    expect(comment).toBeInTheDocument()
  })
})