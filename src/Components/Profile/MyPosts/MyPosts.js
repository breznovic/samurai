import React from "react"
import { addPostAC, updateNewPostTextAC } from "../../../Redux/profileReducer"
import './MyPosts.css'
import Post from "./Post/Post"

const MyPosts = (props) => {

    let postsElements = props.posts.map(posts => <Post message={posts.message} id={posts.id} like={posts.like} />)

    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch(addPostAC())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.dispatch(updateNewPostTextAC(text))
    }

    return (

        <div className='block'>My posts
            <div>
                <div><textarea onChange={onPostChange} 
                ref={newPostElement} value={props.newPostText} /></div>
                <div><button onClick={addPost}>Send post</button></div>
            </div>
            {postsElements}
        </div>
    )
}

export default MyPosts