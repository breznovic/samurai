import React from "react"
import './MyPosts.css'
import Post from "./Post/Post"



const MyPosts = () => {
    return (

        <div>My posts
            <div>
                <textarea></textarea>
                <div><button>Send post</button></div>
            </div>
            <Post message='This is my social network' like='2' />
            <Post message='I create it' like='5' />
            <Post message='Are you glad?' like='1' />
        </div>
    )
}

export default MyPosts