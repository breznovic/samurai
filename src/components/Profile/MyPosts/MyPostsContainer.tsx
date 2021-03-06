import {PostPropsType, RootStateType} from "../../../redux/reduxStore";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {addPostAC} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

type MstpType = {
    posts: Array<PostPropsType>
    newPost: string
}

type MdtpType = {
    addPost: (posted: string) => void
    newPostText: (newText: string) => void
}

type PropsType = MstpType & MdtpType

const mapStateToProps = (state: RootStateType): MstpType => ({
    posts: state.profilePage.posts,
    newPost: state.profilePage.newPostText,
})

const mapDispatchToProps = (dispatch: Dispatch): MdtpType => ({
    addPost: (newPostText: string) => dispatch(addPostAC(newPostText)),
})

const MyPostsContainer = (props: PropsType) => {
    return <MyPosts addPost={props.addPost} newPostText={props.newPostText}   posts={props.posts} newPost={props.newPost}/>

}
    export default connect(mapStateToProps, mapDispatchToProps)(MyPostsContainer)