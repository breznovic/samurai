import React from 'react'
import classes from './MyPosts.module.css'
import Post from "./Post/Post"

type PostPropsType = {
    id: number
    posted: string
    likes: number
}

function MyPosts(props: PostPropsType) {

    let posts: Array<PostPropsType> = [
        {id: 1, posted: 'This is TypeScript', likes: 10},
        {id: 2, posted: 'TypeScript', likes: 5},
        {id: 3, posted: 'I write TypeScript!', likes: 7},
    ]

    let postElements = posts.map(p => <Post posted={p.posted} likes={p.likes} id={p.id}/>)

    return (

        <div className={classes.item}>
            <h3>My posts</h3>
            <div>
                <div><textarea/></div>
                <div>
                    <button>Add post</button>
                </div>
                <div className={classes.post}>
                    {postElements}
                </div>
            </div>
        </div>
    )
}

export default MyPosts