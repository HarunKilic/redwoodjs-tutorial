import Comment from './Comment'

export const generated = () => {
  return (
    <div className="m-4">
      <Comment
        comment={{
          name: 'Harun Kilic',
          body: 'This is the first comment!',
          createdAt: '2020-01-01T12:34:56Z',
        }}
      />
    </div>
  )
}

export default { title: 'Components/Comment' }
