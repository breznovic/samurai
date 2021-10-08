import React from "react"
import './MyPosts.css'
import Post from "./Post/Post"

const MyPosts = (props) => {

    let postsElements = props.posts.map(posts => <Post message={posts.message} id={posts.id} like={posts.like} />)

    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch({type: 'ADD_POST'})
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.dispatch({type: 'UPDATE_NEW_POST_TEXT', newText: text})
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