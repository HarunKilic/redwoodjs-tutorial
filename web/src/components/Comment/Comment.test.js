import { render, screen } from '@redwoodjs/testing/web'

import Comment from './Comment'

describe('Comment', () => {
  it('renders successfully', () => {
    const comment = {
      name: 'John Doe',
      body: 'This is my comment',
      createdAt: '2020-01-02T12:34:56Z',
    }

    expect(() => {
      render(<Comment comment={comment} />)
    }).not.toThrow()

    expect(screen.getByText(comment.name)).toBeInTheDocument()
    expect(screen.getByText(comment.body)).toBeInTheDocument()
    const dataExpect = screen.getByText('2 January 2020')
    expect(dataExpect).toBeInTheDocument()
    expect(dataExpect.nodeName).toEqual('TIME')
    expect(dataExpect).toHaveAttribute('datetime', comment.createdAt)
  })
})
