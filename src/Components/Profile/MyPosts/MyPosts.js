import React from "react"
import './MyPosts.css'
import Post from "./Post/Post"

const MyPosts = () => {
    
    let postsData = [
        { id: 1, message: 'Welcome to TrollNetwork!', like: 10 },
        { id: 2, message: 'I create it', like: 5 },
        { id: 3, message: 'Are you glad?', like: 15 }
    ]
    
    return (

        <div className='block'>My posts
            <div>
                <div><textarea></textarea></div>
                <div><button>Send post</button></div>
            </div>
            <Post message={postsData[0].message} id={postsData[0].id} like={postsData[0].like} />
            <Post message={postsData[1].message} id={postsData[1].id} like={postsData[1].like} />
            <Post message={postsData[2].message} id={postsData[2].id} like={postsData[2].like} />
        </div>
    )
}

export default MyPosts