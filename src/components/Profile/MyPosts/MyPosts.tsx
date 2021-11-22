import React from 'react'
import classes from './MyPosts.module.css'
import Post from "./Post/Post"
import {ProfilePageType} from "../../../redux/state";

function MyPosts (props: ProfilePageType) {

    let postElements = props.posts.map(p => <Post posted={p.posted} likes={p.likes} id={p.id}/>)

    let newPostElement: React.RefObject<any> = React.createRef()

    let addPost = () => {
    let text = newPostElement.current.value
    }

    return (

        <div className={classes.item}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
                <div className={classes.post}>
                    {postElements}
                </div>
            </div>
        </div>
    )
}

export default MyPosts