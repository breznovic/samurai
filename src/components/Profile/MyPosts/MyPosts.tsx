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
            <h3>My posts</h3>
            <div>
                <div><textarea/></div>
                <div>
                    <button>Add post</button>
                </div>
                <div className={classes.post}>
                <Post posted={'This is TypeScript'} likes={10}/>
                <Post posted={'TypeScript'} likes={5}/>
                <Post posted={'I write TypeScript!'} likes={7}/>
                </div>
            </div>
        </div>
    )
}

export default MyPosts