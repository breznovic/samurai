import React from 'react'
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

type PostPropsType = {
    posted: string
    likes: number
}

function MyPosts(props: PostPropsType) {
    return (

        <div className={classes.item}>
            My posts
            <div>
                <textarea/>
                <div>
                    <button>Add post</button>
                </div>
              <Post posted={'This is TypeScript'} likes={10} />
              <Post posted={'TypeScript'} likes={5}/>
              <Post posted={'I write TypeScript!'} likes={7}/>
            </div>
        </div>
    )
}

export default MyPosts