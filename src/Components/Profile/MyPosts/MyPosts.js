import React from 'react'
import './MyPosts.css'
import Post from './Post/Post'

const MyPosts = () => {

  let postsData = [
    { id: 1, likes: 10, message: 'Hi there!' },
    { id: 2, likes: 9, message: 'I am learning React' },
    { id: 3, likes: 5, message: 'My skill in it improving everyday' },
    { id: 4, likes: 23, message: 'It is hard but interesting' }
  ]

  let postsElements = postsData
  .map (posts =>  <Post likes={posts.likes} message={posts.message} id={posts.id} />)

  return (

    <div className='myPostsBlock'>
      <div>
        <div>
          <h2>My posts</h2>
        </div>

        <div>
          <textarea></textarea>
        </div>

        <div>
          <button>Add post</button>
        </div>
      </div>
      <div>
       {postsElements}
      </div>
    </div>
  )
}

export default MyPosts
