import React from 'react'
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

type PostPropsType = {
    posted: string
}

function MyPosts(props: PostPropsType) {
    return (

        <div>
            My posts
            <div>
                <textarea/>
                <div>
                    <button>Add post</button>
                </div>
              <Post posted={'This is TypeScript'} />
              <Post posted={'TypeScript'}/>
              <Post posted={'I write TypeScript!'}/>
            </div>
        </div>
    )
}

export default MyPosts