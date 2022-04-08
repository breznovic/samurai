import React from 'react'
import classes from './MyPosts.module.css'
import Post from "./Post/Post"
import {PostPropsType} from "../../../redux/reduxStore";
import {Field, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from "../../../utils/validators/validators";

type PropsType = {
    posts: Array<PostPropsType>
    newPost: string
    addPost: (posted: string) => void
    newPostText: (newText: string) => void
}

const maxLength10 = maxLengthCreator(10)

function MyPosts(props: PropsType) {

    let postElements = props.posts.map(p => <Post posted={p.posted} likes={p.likes} id={p.id}/>)

    let newPostElement: React.RefObject<HTMLTextAreaElement> = React.createRef()

    let addPost = (values) => {
        let text = newPostElement.current ? newPostElement.current?.value : ''
        props.addPost(values.newPostText)
    }

    console.log('newpost', props.newPost)

    return (

        <div className={classes.item}>
            <h3>My posts</h3>
            <AddNewPostForm onSubmit={addPost}/>
            <div className={classes.post}>
                {postElements}
            </div>
        </div>
    )
}

let AddNewPostForm = () => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name='newPostText' component='textarea' validate={[required, maxLength10]}/>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
}

AddNewPostForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

export default MyPosts