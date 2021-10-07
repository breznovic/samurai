import React from "react"
import './MyPosts.css'
import Post from "./Post/Post"

const MyPosts = () => {
    
    let posts = [
        { id: 1, message: 'Welcome to TrollNetwork!', like: 10 },
        { id: 2, message: 'I create it', like: 5 },
        { id: 3, message: 'Are you glad?', like: 15 }
    ]

    let postsElements = posts
    .map (posts => <Post message={posts.message} id={posts.id} like={posts.like} />)
    
    return (

        <div className='block'>My posts
            <div>
                <div><textarea></textarea></div>
                <div><button>Send post</button></div>
            </div>
           {postsElements}
        </div>
    )
}

export default MyPosts