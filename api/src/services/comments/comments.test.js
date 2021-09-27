import { comments, createComment } from './comments'

describe('comments', () => {
  scenario(
    'returns all comments for a single post from database',
    async (scenario) => {
      const result = await comments({ postId: scenario.comment.jane.postId })

      expect(result.length).toEqual(1)
    }
  )

  scenario('postOnly', 'creates a new comment', async (scenario) => {
    const comment = await createComment({
      input: {
        name: 'Test',
        body: 'What is your bob?',
        postId: scenario.post.bark.id,
      },
    })

    expect(comment.name).toEqual('Test')
    expect(comment.body).toEqual('What is your bob?')
    expect(comment.postId).toEqual(scenario.post.bark.id)
    expect(comment.createdAt).not.toEqual(null)
  })
})
