import React from 'react'
import './MyPosts.css'
import Post from './Post/Post'

const MyPosts = (props) => {

let postsElements = props.posts.map(posts =>  <Post likes={posts.likes} message={posts.message} id={posts.id} />)

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
