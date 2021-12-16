import {ActionsTypes, ProfilePageType, RootStateType} from "./state";

// type PropsType = {
//     state: RootStateType
//     action: ActionsTypes
//     rerenderEntireTree1: () => void
// }

export const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {
    switch(action.type) {
        case 'ADD_POST':
            let newPost = {
                "id": 4,
                "posted": action.posted,
                "likes": 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case 'UPDATE_NEW_POST_TEXT':
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export const addPostAC = (posted: string) => {
    return {
        type: 'ADD_POST',
        posted
    } as const
}

export const UpdateNewPostTextAC = (newText: string) => {
    return {
        type: 'UPDATE_NEW_POST_TEXT',
        newText
    } as const
}