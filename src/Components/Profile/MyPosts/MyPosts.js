import React from 'react'
import './MyPosts.css'
import Post from './Post/Post'

const MyPosts = () => {
  return (


    <div>My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <Post likes='10' message='Hi there!' />
      <Post likes='9' message='I am learning React' />
      <Post likes='5' message='My skill in it improving everyday'/>
      <Post likes='23' message='It is hard but interesting'/>
    </div>

  )
}

export default MyPosts
