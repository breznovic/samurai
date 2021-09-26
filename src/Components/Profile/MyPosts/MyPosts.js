import React from 'react'
import './MyPosts.css'
import Post from './Post/Post'
import { addPostActionCreator } from '../../../Redux/profileReducer'
import { updateNewPostTextActionCreator } from '../../../Redux/profileReducer'

const MyPosts = (props) => {

let postsElements = props.posts.map(posts =>  <Post likes={posts.likes} message={posts.message} id={posts.id} />)

let newPostElement = React.createRef();

let onAddPost = () => {
props.addPost ()
  
}

let onPostChange = () => {
let text = newPostElement.current.value;
props.updateNewPostText (text);

}

  return (

    <div className='myPostsBlock'>
      <div>
        <div> 
          <h2>My posts</h2>
        </div>

        <div>
          <textarea onChange={onPostChange} ref={newPostElement} 
          value={props.newPostText} />
        </div>

        <div>
          <button onClick={ onAddPost }>Add post</button>
        </div>
      </div>
      <div>
       {postsElements}
      </div>
    </div>
  )
}

export default MyPosts
