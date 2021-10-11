import React from "react"
import { addPostAC, updateNewPostTextAC } from "../../../Redux/profileReducer"
import MyPosts from "./MyPosts"



const MyPostsContainer = (props) => {
    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostAC())
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextAC(text)
        props.store.dispatch(action)
    }

    return (<MyPosts updateNewPostText={onPostChange} addPost={addPost} 
        posts={state.profilePage.posts}
        newPostText={state.profilePage.newPostText} />)
}

export default MyPostsContainer