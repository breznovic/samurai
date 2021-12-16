import React from 'react'
import classes from './MyPosts.module.css'
import Post from "./Post/Post"
import {ActionsTypes, addPostAC, PostPropsType, UpdateNewPostTextAC} from "../../../redux/state";

type PropsType = {
    posts: Array<PostPropsType>
    newPost: string
    dispatch: (action: ActionsTypes) => void
}

function MyPosts (props: PropsType) {

    let postElements = props.posts.map(p => <Post posted={p.posted} likes={p.likes} id={p.id}/>)

    let newPostElement: React.RefObject<HTMLTextAreaElement> = React.createRef()

    let addPost = () => {
    let text = newPostElement.current ? newPostElement.current?.value : ''
        props.dispatch(addPostAC(text))
    }

    let onPostChange = () => {
    let text = newPostElement.current?.value
        if (text) props.dispatch(UpdateNewPostTextAC(text))
    }

    return (

        <div className={classes.item}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPost} />
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